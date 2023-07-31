import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import i18n from "../locales/localization";
import ConfirmSvg from "../../assets/svg/Reset_password2.svg";

const Confirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#38857B" />
        <Text className="text-[#38857B] text-[16px] pl-2 font-bold font-sans">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[35vh]">
        <ConfirmSvg width={250} height={250} />
      </View>
      <Text className="text-[#010101] text-[24px] leading-[40px] font-bold text-center py-[16px] font-sans">
        {i18n.t("reset_pw")}
      </Text>
      <Text className="text-[#010101] text-[14px] text-left pb-[12px] font-sans">
        {i18n.t("reset_pw_confirm_content")}
      </Text>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={[{ height: 44 }]}
          onPress={() => navigation.navigate("Login")}
          className="bg-[#38857B] flex-row items-center justify-center rounded-lg">
          <Text style={styles.btntitle} className="font-sans">{i18n.t("login")}</Text>
        </Pressable>
      </View>
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
export default Confirm;
