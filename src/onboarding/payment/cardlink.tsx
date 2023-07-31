import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import { ScrollView } from "react-native-gesture-handler";

const Cardlink = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[16vh] px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px] font-sans">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[15px] leading-[20px] font-sans" numberOfLines={2}>
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View className="h-[84vh] bg-white px-[24px] rounded-[24px]">
        <ScrollView>
          <Text className="font-bold text-[20px] text-[#010101] py-[24px] font-sans">
            {i18n.t("link_your_card")}
          </Text>
          <TextInput
            label="Card holder name"
            name="cardName"
            placeholder="Card holder name"
            className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
          />
          <TextInput
            label="Card number"
            name="cardNumber"
            placeholder="Card number"
            className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
          />
          <View className="flex-row items-center mb-[16px] justify-between">
            <TextInput
              label="Expiration date"
              name="expirationDate"
              placeholder="Expiration date"
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 w-[48%] font-sans"
            />
            <TextInput
              label="CVV"
              name="cvv"
              placeholder="CVV"
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2  w-[48%] font-sans"
            />
          </View>
          <TextInput
            label="Postal code"
            name="postalCode"
            placeholder="Postal code"
            className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2  w-[48%] font-sans"
          />
          <Text className="pt-[32px] font-bold leading-[16px] text-[12px] text-[#5A7894] pb-[20px] font-sans">
            {i18n.t("link_your_card_content1")}{" "}
            <Text className="text-[#38857B] font-sans">{i18n.t("terms_conditions")}</Text>{" "}
            {i18n.t("and")}{" "}
            <Text className="text-[#38857B] font-sans">{i18n.t("privacy_policy")}</Text>
            {i18n.t("link_your_card_content2")}
          </Text>
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[20px]"
            onPress={() => navigation.navigate("CardConfirm")}>
            <Text className="text-white text-[16px] font-bold font-sans">
              {i18n.t("link_card")}
            </Text>
          </Pressable>
          <View className="w-[100%] flex-row justify-between items-center pb-[60px]">
          <View className="flex-row items-center justify-between w-[100%]">
            <Pressable
              className="flex-row items-center justify-center w-[100%]"
              onPress={() => navigation.navigate("RoundUp")}>
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
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

export default Cardlink;
