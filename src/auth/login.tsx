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

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonPress = () => {

    // Perform some async task or API call

    // Simulating a delay of 2 seconds

  };

  const loginUser = () => {
    setIsLoading(true);
    // axios.post(`${API_BASIC_URL}/emailsent`, data)
    // .then((res) => {
    //   setIsLoading(false);
    // navigation.navigate("HomeScreens")
    // })
    // .catch((error) => {
    //   setIsLoading(false);
    // })
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("HomeStack")
    }, 2000);
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
          {i18n.t("welcome_back")}
        </Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={loginUser}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View style={{ marginBottom: 20 }}>
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
            />
            <View>
              <Text
                // style={styles.rightTitle}
                className="text-right text-[14px] font-bold text-[#38857B] pt-[8px] font-sans"
                onPress={() => navigation.navigate("ForgotPassword")}>
                {i18n.t("forgot_password")}
              </Text>
            </View>
            <View style={{ marginTop: 32 }}>
              <ButtonLoading
                title={i18n.t("login")}
                titleLoading={i18n.t("loggingin")}
                isLoading={isLoading}
                onPress={loginUser}
                className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
              />
            </View>



            <View>
              <Text className="text-center pt-[32px] text-[14px] font-sans">
                {i18n.t("have_account_yet")}
                <Text
                  onPress={() => navigation.navigate("Signup")}
                  className="text-[#38857B] text-[14px] ml-[4px] font-sans">
                  {i18n.t("create_account")}
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
  rightTitle: {
    textAlign: "right",
    color: "#5A5A5A",
    paddingTop: 10,
  },
  listItem: {
    fontSize: 14,
    color: "#767676",
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

export default Login;
