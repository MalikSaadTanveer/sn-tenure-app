import React from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import i18n from "../locales/localization";

const SettingsLinkCard = () => {
  const navigation = useNavigation();

  // const [data, setData] = useState();

  //   const handleCardLink = () => {
  //     axios.post(`${API_BASIC_URL}/settingpayment`, data)
  //     .then((res) => {
  //       console.log("success")
  //     })
  //     .catch((error) => {
  //       console.log("error")
  //     })
  //   }

  return (
    <View className="bg-[#38857B] h-[100vh] py-[32px]">
      <View className=" pb-4 pt-8 px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[8px] font-sans">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[16px] leading-[24px] font-sans" numberOfLines={2}>
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[100%] bg-white px-[32px] rounded-[24px]">
          <View className="pb-32">
            <View className="flex flex-row items-center gap-3">
              <FontAwesome5
                onPress={() => navigation.goBack()}
                color="#38857B"
                size={20}
                name="arrow-left"
              />
              <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[24px] font-sans">
                {i18n.t("link_your_card")}
              </Text>
            </View>

            <TextInput
              label="Card holder name"
              name="cardName"
              placeholder={i18n.t("card_holder_name")}
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
            />
            <TextInput
              label="Card number"
              name="cardNumber"
              placeholder={i18n.t("card_number")}
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
            />
            <View className="flex-row items-center mb-[16px] justify-between">
              <TextInput
                label="Expiration date"
                name="expirationDate"
                placeholder={i18n.t("expiration_date")}
                className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 w-[48%] font-sans"
              />
              <TextInput
                label="CVV"
                name="cvv"
                placeholder={i18n.t("cvv")}
                className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2  w-[48%] font-sans"
              />
            </View>
            <TextInput
              label="Postal code"
              name="postalCode"
              placeholder={i18n.t("postal_code")}
              className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2  w-[48%] font-sans"
            />
            <Text className="pt-[32px] font-bold leading-[16px] text-[12px] text-[#5A7894] pb-[20px] font-sans">
              {i18n.t("link_your_card_content1")}{" "}
              <Text className="text-[#38857B]">
                {i18n.t("terms_conditions")}
              </Text>{" "}
              {i18n.t("and")}{" "}
              <Text className="text-[#38857B] font-sans">{i18n.t("privacy_policy")}</Text>
              {i18n.t("link_your_card_content2")}
            </Text>
            <Pressable
              className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[10px]"
              onPress={() => navigation.navigate("SettingsSuccessCardLink")}>
              <Text className="text-white text-[16px] font-bold font-sans">
                {i18n.t("link_card")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsLinkCard;
