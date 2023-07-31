import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import i18n from "../locales/localization";
import EmailSentSvg from "../../assets/svg/Email_sent.svg";

const EmailSent = () => {
  const navigation = useNavigation();

  const handleEmailSent = () => {
    navigation.navigate("ResetPassword");

    // axios.post(`${API_BASIC_URL}/emailsent`, email)
    // .then((res) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })

  }
  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#38857B" />
        <Text className="text-[#38857B] text-[16px] pl-2 font-bold font-sans">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[35vh]">
        {/* <Image source={require("../../assets/image/email_sent.png")} /> */}
        <EmailSentSvg width={250} height={250} />
      </View>
      <Text className="text-[#010101] text-[24px] leading-[40px] font-bold text-center pb-[16px] font-sans">
        {i18n.t("email_sent")}
      </Text>
      <Text className="text-[#010101] text-[14px] text-left pb-[24px] font-sans">
        {i18n.t("email_sent_content")}
      </Text>
      <Text className="text-[14px] text-center font-sans">
        {i18n.t("no_link")}{" "}
        <Text
          className="text-[#38857B] text-[14px] font-sans"
          onPress={() => handleEmailSent()}>
          {i18n.t("resend_link")}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "white",
    height: "100%",
  },
  imageCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#5A5A5A",
    textAlign: "center",
    paddingVertical: 20,
  },
  luckyContent: {
    fontSize: 20,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 20,
  },
  input: {
    height: 44,
    borderColor: "#3A3A3C",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btntitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#6662F5",
  },
  back: {
    color: "#5A5A5A",
  },
});
export default EmailSent;
