import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import i18n from "../locales/localization";
import SuccessIcon from "../../assets/svg/onboarding_payment/success_icon.svg";

const LinkedSuccessfully = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#38857B] h-[100vh] py-[32px]">
      <View className="pt-3 pb-4 px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[8px] font-sans">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[16px] leading-[24px] font-sans">
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View className="h-[100%] bg-white px-[32px] rounded-[24px]">

        <View className="mb-4 h-[600px]">
          <View className="flex flex-row items-center gap-3">
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome5
                color="#38857B"
                size={20}
                name="arrow-left"
              />
            </Pressable>
            <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[24px] font-sans">
              {i18n.t("link_your_card")}
            </Text>
          </View>
          <View className="flex-row  justify-center items-center  border-2 border-[#018485] rounded-xl h-[200px] px-4 mt-10">
            <View>
              <View className="flex-row justify-center">
                <SuccessIcon />
              </View>
              <Text className="pt-[40px] text-[#018485] font-sans">
                {i18n.t("payment_linked_success")}
              </Text>
            </View>
          </View>
          <Pressable
            android_ripple={{ color: '#5F9A94' }}
            className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[20px] mt-16"
            onPress={() => navigation.navigate("LinkedCards")}>
            <Text className="text-white text-[16px] font-bold font-sans">{i18n.t("done")}</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1RowStyle: {
    backgroundColor: "bule",
    borderBottomColor: "transparent",
    paddingHorizontal: 10,
  },
  dropdown1RowTxtStyle: { color: "#010101", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown2BtnStyle: {
    height: 40,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8AAEC9",
  },
  dropdown2BtnTxtStyle: {
    color: "#8AAEC9",
  },
});

export default LinkedSuccessfully;
