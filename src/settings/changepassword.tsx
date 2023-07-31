import React, { useState, useRef } from "react";
import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PasswordInput from "../component/passwordinput";
import i18n from "../locales/localization";
import { showToast } from "../const/toast";
import ButtonLoading from "../component/buttonloading";

const ChangePassword = () => {
  const navigation = useNavigation();
  const [showOldPassowrd, setShowOldpassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReneteredNewPassword, setShowReenteredNewPassword] = useState(false);

  const passwordInputRef = useRef(null);
  // const handleRoundedUp = () => {
  //   axios.post(`${API_BASIC_URL}/payment`, {showOldPassowrd, showNewPassword, showReneteredNewPassword})
  //   .then((res) => {
  //     console.log("success")
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }
  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mb-3">
        <View className="gap-3 mt-6 justify-between items-center flex flex-row">
          <Text className="text-white font-bold text-[24px] font-sans">{i18n.t("settings")}</Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[25px] rounded-[24px] py-[24px]">
          <View className="flex flex-row items-center gap-3">
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome5
                color="#38857B"
                size={20}
                name="arrow-left"
              />
            </Pressable>
            <Text className="font-semibold text-[17px] font-sans">{i18n.t("change_password")}</Text>
          </View>
          <View className="pt-4 pb-2">
            <PasswordInput
              label="OldPassword"
              name="oldpassword"
              password
              placeholder={i18n.t("enter_old_password")}
              secureTextEntry={true}
              innerRef={passwordInputRef}
            />
          </View>
          <View className="py-2">
            <PasswordInput
              label="NewPassword"
              name="newpassword"
              password
              placeholder={i18n.t("enter_new_password")}
              secureTextEntry={true}
              innerRef={passwordInputRef}
            />
          </View>
          <View className="py-2">
            <PasswordInput
              label="ConfirmPassword"
              name="confirmpassword"
              password
              placeholder={i18n.t("reenter_new_password")}
              secureTextEntry={true}
              innerRef={passwordInputRef}
            />
          </View>
          {/* <Pressable
            android_ripple={{ color: '#5F9A94' }}
            onPress={() => {
              const success_msg = i18n.t("password_changed_successfully");
              showToast(success_msg);
              navigation.goBack()
            }
            }
            className="bg-[#38857B] mt-5 rounded py-2">
            <Text className="text-white text-center font-semibold font-sans">
              {i18n.t("change_password")}
            </Text>
          </Pressable> */}
          <ButtonLoading
               title={i18n.t("change_password")}
               titleLoading={i18n.t("creating_account")}
               
               onPress={() => {
                const success_msg = i18n.t("password_changed_successfully");
                showToast(success_msg);
                navigation.goBack()
              }
              }
               className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
             />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
