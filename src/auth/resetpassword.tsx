import React, { useRef, useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import ResetPwSvg from "../../assets/svg/Reset_password.svg";
import ButtonLoading from "../component/buttonloading";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  const validationSchema = yup.object().shape({
    password: yup.string().label("Password").required("Password is required"),
  });

  const handleReset = () => {
    setIsLoading(true);
    // axios.post(`${API_BASIC_URL}/resetpassword`, password)
    // .then((res) => {
    //   console.log("success")
    // navigation.navigate("Confirm")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Confirm")
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
        <ResetPwSvg width={250} height={250} />
      </View>
      <Text className="text-[#010101] text-[24px] leading-[40px] font-bold text-center pb-[12px] font-sans">
        {i18n.t("reset_pw")}
      </Text>
      <Text className="text-[#010101] text-[14px] text-left pb-[24px] font-sans">
        {i18n.t("reset_pw_content")}
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleReset}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View className="mb-[4px]">
              <TextInput
                disabled={isSubmitting}
                label="Password"
                name="password"
                password
                placeholder="Enter Password"
                secureTextEntry={true}
                innerRef={passwordInputRef}
                style={styles.input}
                onSubmitEditing={handleSubmit}
                className = "font-sans"
              />
            </View>
            <View style={styles.listGroup}>
              <View style={styles.list}>
                <Text style={styles.listItem}>
                  {i18n.t("pw_characters_minimum")}
                </Text>
                <Text style={styles.listItem}>{i18n.t("pw_lowercase")}</Text>
                <Text style={styles.listItem}>{i18n.t("pw_uppercase")}</Text>
              </View>
              <View style={styles.list}>
                <Text style={styles.listItem}>{i18n.t("pw_special")}</Text>
                <Text style={styles.listItem}>{i18n.t("pw_number")}</Text>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <ButtonLoading
                title={i18n.t("reset_pw")}
                titleLoading={i18n.t("resetting_password")}
                isLoading={isLoading}
                onPress={handleReset}
                className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
              />
            </View>
          </View>
        )}
      </Formik>
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
  list: {
    width: "50%",
  },
  listGroup: {
    flexDirection: "row",
    paddingTop: 10,
  },
  listItem: {
    fontFamily : 'cera-pro',
    fontSize: 14,
    color: "#767676",
  },
});
export default ResetPassword;
