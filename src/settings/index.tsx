import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import i18n from "../locales/localization";
import { showToast } from "../const/toast";
import { ImageViewer } from "../component/imageviewer";
import { getPinCodeFromLocalStorage, savePinCodeToLocalStorage } from "../const/storage";

interface itemProps {
  navigation: string;
  title: string;
  icon: string;
}
const Item = (props: itemProps) => {
  const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };
  
    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
      <Pressable
        android_ripple={{ color: "#EBC55B" }}
        onPressOut={handlePressOut}
        onPressIn={handlePressIn}
        onPress={() => {
          props.navigation !== "ContactSupport" && navigation.navigate(props.navigation);
        }}
        className={isPressed ? "bg-[#EBC55B] flex flex-row justify-between items-center p-2" : "flex flex-row justify-between items-center p-2"}>
        <View className="flex flex-row items-center gap-3">
          {props.title == i18n.t("contact_support") || props.title == i18n.t("change_password") ? (
            <MaterialIcons name={props.icon} size={24} color="#5A7894" />
          ) : (
            <Ionicons color="#5A7894" size={22} name={props.icon} />
          )}
          <Text className="text-[#25384D] font-sans">
            {props.title}
          </Text>
        </View>
        <Entypo color="#38857B" size={17} name="chevron-right" />
      </Pressable>
    )
}
const Settings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("Jon Doe");
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    getPinCodeFromLocalStorage("profileImage")
      .then(profileImage => {
        // Use the pinCode value here
        console.log("profile image : ", profileImage);
        setSelectedImage(profileImage);
      })
      .catch(error => {
        // Handle any errors that occurred during pin code retrieval
        console.log(`Error retrieving pin code: ${error}`);
      });
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const profileImage = result.assets[0].uri;
      setSelectedImage(profileImage);
      //save profile image to async storage
      await savePinCodeToLocalStorage("profileImage", profileImage);
    } else {
      showToast("You did not select any image.");
    }
  };

  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="px-[25px] mb-3">
        <View className=" gap-3 mt-6 justify-between items-center flex flex-row">
          <Text className="text-white text-[24px] font-bold pb-[8px] font-sans-bold">
            {i18n.t("settings")}
          </Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[20px] rounded-t-[24px] py-[24px]">
          <View className="flex flex-col  items-center">
            <ImageViewer
              placeholderImageSource={require("../../assets/profile_default.png")}
              selectedImage={selectedImage}
            />
            <Pressable
              onPress={pickImageAsync}
              className="flex gap-2 mt-3 items-center flex-row">
              <MaterialIcons name="edit" color={"#38857B"} size={20} />
              <Text className="text-[#38857B] text-md font-medium font-sans-bold">
                {i18n.t("update_profile_photo")}
              </Text>
            </Pressable>
            <Text className="mt-3 font-bold text-xl font-sans-bold">{name}</Text>
            <View className="mt-5 w-full px-1">
              <Item navigation="PersonalInfo" title={i18n.t("personal_info")} icon="person-sharp"/>
              <Item navigation="ChangePassword" title={i18n.t("change_password")} icon="lock"/>
              <Item navigation="ChangePinCode" title={i18n.t("change_transfer_pin")} icon="key"/>
              <Item navigation="LinkedCards" title={i18n.t("linked_cards")} icon="card"/>
              <Item navigation="NotificationsSettings" title={i18n.t("notifications_settings")} icon="ios-notifications-circle-outline"/>
              <Item navigation="ContactSupport" title={i18n.t("contact_support")} icon="headset-mic"/>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
