import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import RadioButtonRN from "radio-buttons-react-native";

const RoundUp = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#38857B] h-[100vh] py-[32px]">
      <View className="h-[14vh] px-[24px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] pb-[4px] font-sans-bold">
            {i18n.t("round_up")}
          </Text>
          <Text className="text-white text-[14px] leading-[20px] font-sans">
            {i18n.t("round_up_content")}
          </Text>
        </View>
      </View>
      <View className="h-[86vh] bg-white px-[24px] rounded-[24px]">
        <ScrollView>
          <Text className="text-[20px] text-[#010101] py-[24px] font-sans-bold">
            {i18n.t("round_up_amounts")}
          </Text>
          <View>
            <Text className="text-[15px] font-medium pb-[8px] font-sans">
              {i18n.t("max_weekly_round_up_amount")}
            </Text>
            <TextInput
              label={i18n.t("label_max_weekly_amount_input")}
              name={i18n.t("name_max_weekly_amount_input")}
              placeholder={i18n.t("placeholder_max_weekly_amount_input")}
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
            />
          </View>
          <View className="mb-[16px]">
            <Text className="text-[16px] pb-[8px] font-sans-bold">
              {i18n.t("round_up_settings")}
            </Text>
            <RadioButtonRN
              data={i18n.t("round_up_settings_itmes")}
              activeColor="#38857B"
              box={false}
              selectedBtn={e => console.log(e)}
            />
          </View>
          <View>
            <Text className="text-[16px] pb-[8px] font-sans-bold">
              {i18n.t("nearest_round_up_amount")}
            </Text>
            <TextInput
              label={i18n.t("label_nearest_amount_input")}
              name={i18n.t("name_nearest_amount_input")}
              placeholder={i18n.t("placeholder_nearest_amount_input")}
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
            />
          </View>
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[16px]"
            onPress={() => {
              navigation.navigate("RoundUpConfirm");
            }}>
            <Text className="text-white text-[16px] font-bold font-sans">
              {i18n.t("set_rounded_up_amount")}
            </Text>
          </Pressable>
          <View className="w-[100%] flex-row justify-between items-center pb-[60px]">
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("Payment")}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color="#38857B"
              />
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("previous_step")}
              </Text>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("Goal")}>
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
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

export default RoundUp;
