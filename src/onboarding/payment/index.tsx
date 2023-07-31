import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import Card from "../../../assets/svg/onboarding_payment/card.svg";

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[16vh] px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px] font-sans">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[14px] leading-[20px] font-sans">
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View className="h-[84vh] bg-white px-[24px] rounded-[24px]">
        <ScrollView>
          <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[26px] font-sans">
            {i18n.t("link_card")}
          </Text>
          <View className="flex-row justify-center mb-[10px]">
            <Card className="w-[100vw]" />
          </View>
          <Text className="text-[15px] leading-[20px] text-[#010101] pb-[20px] font-sans">
            {i18n.t("link_card_content")}
          </Text>
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[20px]"
            onPress={() => navigation.navigate("Cardlink")}>
            <Text className="text-white text-[15px] font-bold font-sans">
              {i18n.t("link_card")}
            </Text>
          </Pressable>
          <View className="flex-row items-center justify-between w-[100%]">
            <Pressable
              className="flex-row items-center justify-center w-[100%]"
              onPress={() => navigation.navigate("RoundUp")}>
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
          <Text className="text-[12px] leading-[16px] text-[#010101] py-[32px] font-sans">
            {i18n.t("link_card__content")}
          </Text>
        </ScrollView>
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
    // flex: 1,
    height: 40,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8AAEC9",
  },
  dropdown2BtnTxtStyle: {
    color: "#8AAEC9",
    // textAlign: "right",
  },
});

export default Payment;
