import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import Logo from "../../assets/svg/tenurefi_icon.svg";
import PasswordInput from "../component/passwordinput";
import ButtonLoading from "../component/buttonloading";
import loginStore from '../zustand/loginStore';

const Signup = () => {
  const { user, loading, error, login } = loginStore();
  const [isLoading, setIsLoading] = useState(false);
  const [email,setEmail] = useState(' ')
  const [password,setPassword] = useState(' ')
  const signUp = async() => {
    await login(email, password); 
    // setIsLoading(true);
    // axios.post(`${API_BASIC_URL}/signup`, data)
    // .then((res) => {
    //   console.log("SignUp success")
    //    setIsLoading(false);
    // })
    // .catch((error) => {
    //   console.log("error")
    //  setIsLoading(false);
    // })
    // setTimeout(() => {
    //   setIsLoading(false);
    //   navigation.navigate("Payment")
    // }, 2000);
  };

  const handlePasswordChange = (text:string) => {
    setPassword(text);
  };
  const passwordInputRef = useRef(null);

  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label("Email")
      .required("Email is required")
      .email("Email is invalid"),
    password: yup.string().label("Password").required("Password is required"),
  });

  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4 items-center" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#38857B" />
        <Text className="text-[#38857B] text-[16px] pl-2 font-bold font-sans">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View>
        <View className="flex-row justify-center">
          <Logo className="mb-[24px]" />
        </View>
        <Text className="text-[30px] font-bold text-center pb-[24px] font-sans">
          {i18n.t("create_account")}
        </Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={signUp}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View className=" pb-[20px]">
              <TextInput
                autoCapitalize="none"
                disabled={isSubmitting}
                keyboardType="email-address"
                label="Email"
                name="email"
                placeholder="Enter Email"
                placeholderTextColor={'grey'}
                style={styles.input}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                onChangeText={(text:string) => setEmail(text)}
                className = "font-sans"
              />
            </View>
            <PasswordInput
              disabled={isSubmitting}
              label="Password"
              name="password"
              password
              placeholder="Enter Password"
              secureTextEntry={true}
              innerRef={passwordInputRef}
              onSubmitEditing={handleSubmit}
              onChangeText={handlePasswordChange}
            />

            <View style={styles.listGroup} className="pt-[16px]">
              <View style={styles.list}>
                <View className="flex flex-row items-center">
                  <Text className="font-bold text-base text-[#5A7894]">•</Text>
                  <Text style={styles.listItem}>
                    {i18n.t("pw_characters_minimum")}
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <Text className="font-bold text-base text-[#5A7894]">•</Text>
                  <Text style={styles.listItem}>{i18n.t("pw_lowercase")}</Text>
                </View>
                <View className="flex flex-row items-center">
                  <Text className="font-bold text-base text-[#5A7894]">•</Text>
                  <Text style={styles.listItem}>{i18n.t("pw_uppercase")}</Text>
                </View>
              </View>
              <View style={styles.list}>
                <View className="flex flex-row items-center">
                  <Text className="font-bold text-base text-[#5A7894]">•</Text>
                  <Text style={styles.listItem}>{i18n.t("pw_special")}</Text>
                </View>
                <View className="flex flex-row items-center">
                  <Text className="font-bold text-base text-[#5A7894]">•</Text>
                  <Text style={styles.listItem}>{i18n.t("pw_number")}</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <ButtonLoading
                title={i18n.t("signup")}
                titleLoading={i18n.t("creating_account")}
                isLoading={isLoading}
                onPress={signUp}
                className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
              />
            </View>

            <View>
              <Text className="text-[13px] leading-[24px] text-center text-[#010101] pt-[15px] font-sans">
                {i18n.t("agree")}{" "}
                <Text className="text-[#38857B] text-[13px] font-sans">
                  {i18n.t("terms_conditions")}
                </Text>
                <Text> {i18n.t("and")}</Text>
                <Text className="text-[#38857B] text-[13px] font-sans">
                  {" "}
                  {i18n.t("privacy_policy")}
                </Text>
              </Text>
            </View>
            <View style={{ paddingTop: 25 }}>
              <Text className="text-[13px] text-[#010101] text-center font-sans">
                {i18n.t("already_have_account")}{" "}
                <Text
                  className="text-[#38857B] font-sans"
                  onPress={() => navigation.navigate("Login")}>
                  {i18n.t("login")}
                </Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    backgroundColor: "white",
    height: "100%",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 35,
    height: "28%",
  },
  title: {
    fontSize: 32,
    color: "#5A5A5A",
  },
  input: {
    height: 50,
    borderColor: "#8AAEC9",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  list: {
    width: "50%",
  },
  listGroup: {
    flexDirection: "row",
  },
  listItem: {
    fontFamily: 'cera-pro',
    fontSize: 13,
    color: "#5A7894",
  },
  btntitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  btntext: {
    fontSize: 14,
    color: "#38857B",
    paddingLeft: 10,
    fontWeight: 700,
  },
  outlineBtn: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderColor: "#38857B",
  },
  link: {
    color: "#6662F5",
  },
  footer: {
    fontSize: 14,
    color: "#595959",
    paddingTop: 15,
    textAlign: "center",
  },
});

export default Signup;
