import React, { useRef, useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import ForgotPasswordSvg from "../../assets/svg/Reset_password.svg";
import ButtonLoading from "../component/buttonloading";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const passwordInputRef = useRef(null);
  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label("Email")
      .required("Email is required")
      .email("Email is invalid"),
  });

  const emailSent = () => {
    setIsLoading(true);
    // axios.post(`${API_BASIC_URL}/forgotpassword`, email)
    // .then((res) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("EmailSent")
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#38857B" />
        <Text className="text-[#38857B] text-[16px] pl-2 font-bold font-sans">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[35vh]">
        {/* <Image source={require("../../assets/image/Lock.png")} /> */}
        <ForgotPasswordSvg width={250} height={250} />
      </View>
      <Text className="text-[#010101] text-[24px] leading-[40px] font-bold text-center pb-[16px] font-sans">
        {i18n.t("forgot_password")}
      </Text>
      <Text className="text-[#010101] text-[14px] text-left pb-[24px] font-sans">
        {i18n.t("forgot_pw_content")}
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={emailSent}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View>
              <TextInput
                autoCapitalize="none"
                disabled={isSubmitting}
                keyboardType="email-address"
                label="Email"
                name="email"
                placeholder="Enter Email"
                style={styles.input}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                className="rounded-lg font-sans"
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <ButtonLoading
                title={i18n.t("submit")}
                titleLoading={i18n.t("sending_reset_link")}
                isLoading={isLoading}
                onPress={emailSent}
                className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
              />
            </View>
          </View>
        )}
      </Formik>
      <Text
        className="text-[14px] text-center font-sans"
        onPress={() => navigation.goBack()}>
        {i18n.t("back_to")}{" "}
        <Text className="text-[#38857B] text-[14px] font-sans">{i18n.t("login")}</Text>
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
  title: {
    fontSize: 24,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 16,
  },
  content: {
    fontSize: 16,
    color: "#5A5A5A",
    textAlign: "center",
    paddingVertical: 20,
  },
  input: {
    height: 44,
    borderColor: "#8AAEC9",
    borderWidth: 1,
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

export default ForgotPassword;
