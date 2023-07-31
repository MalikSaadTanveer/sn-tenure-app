import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, SafeAreaView } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";
import { showToast } from "../const/toast";
import PinCodeInput from "../component/pincodeinput";
import {
  getPinCodeFromLocalStorage,
  savePinCodeToLocalStorage,
} from "../const/storage";
import ButtonLoading from "../component/buttonloading";

const ChangePinCode = () => {
  const navigation = useNavigation();
  const [originPinCode, setOriginPinCode] = useState("");
  const [tempPinCode, setTempPinCode] = useState("");
  const [newPinCode, setNewPinCode] = useState("");

  const [isOriginPin, setIsOriginPin] = useState(false);
  const [isNewPin, setIsNewPin] = useState(false);
  const [isReenterPincode, setIsReenterPincode] = useState(false);
  const [isConfirmPin, setIsConfirmPin] = useState();

  const [requireMessage, setRequrieMessage] = useState("");
  const [incorrectMessage, setIncorrectMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  useEffect(() => {
    if (!isNewPin) {
      getPinCodeFromLocalStorage("pinCode")
        .then(pinCode => {
          // Use the pinCode value here
          console.log("original pin code : ", pinCode);
          setOriginPinCode(pinCode);
        })
        .catch(error => {
          // Handle any errors that occurred during pin code retrieval
          console.log(`Error retrieving pin code: ${error}`);
        });
    }
  }, []);

  const checkOriginalPinCode = (pinCode: string, isCorrect: boolean) => {
    setIsOriginPin(isCorrect);
    if (isCorrect) setIncorrectMessage("");
    else {
      setIncorrectMessage(i18n.t("pin_incorrect_field"));
      setRequrieMessage("");
    }
  };

  const handleNewPincode = () => {
    if (isOriginPin) {
      setOriginPinCode("");
      setRequrieMessage("");
    } else {
      setRequrieMessage(i18n.t("pin_required_field"));
    }
  };

  const getNewPinCode = (pinCode: string, isCorrect: boolean) => {
    console.log("isVerifyCorrect", isCorrect);
    setTempPinCode(pinCode);
    setIsNewPin(isCorrect);
    if (isCorrect) setRequrieMessage("");
  };

  const setConfirmPinCode = (pinCode: string, isCorrect: boolean) => {
    setIsConfirmPin(isCorrect);
    setRequrieMessage("");
    if (isCorrect) {
      setNewPinCode(pinCode);
      setConfirmMessage("");
    } else {
      setConfirmMessage(i18n.t("pin_confirm_field"));
    }
  };

  const handleConfirmNewPinCode = () => {
    console.log("111", newPinCode);
    if (tempPinCode === "" || tempPinCode.length !== 4) {
      setRequrieMessage(i18n.t("pin_required_field"));
    } else {
      setRequrieMessage("");
      if (isNewPin) {
        setIsReenterPincode(true);
        setIncorrectMessage("");
        setConfirmMessage("");
        setRequrieMessage("");
      } else {
        setIncorrectMessage(i18n.t("pin_incorrect_field"));
      }
    }
  };
  const savePinCode = async () => {
    if (newPinCode === "" || newPinCode.length !== 4) {
      setRequrieMessage(i18n.t("pin_required_field"));
      setConfirmMessage("");
    } else {
      await savePinCodeToLocalStorage("pinCode", newPinCode);
      showToast("Your pin code changed successfully.");
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mb-3">
        <View className="gap-3 mt-6 justify-between items-center flex flex-row">
          <Text className="text-white font-bold text-[24px] font-sans">
            {i18n.t("settings")}
          </Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[25px] rounded-[24px] py-[24px]">
          <View className="flex flex-row items-center gap-3 mb-4">
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome5 color="#38857B" size={20} name="arrow-left" />
            </Pressable>
            <Text className="font-semibold text-[17px] font-sans">
              {originPinCode === "" ? i18n.t("create_pin") : i18n.t("edit_pin")}
            </Text>
          </View>

          {originPinCode !== "" ? (
            <View>
              <Text className="text-[#25384D] text-[15px] leading-[20px] mb-6 font-sans">
                {i18n.t("edit_pin_detail")}
              </Text>

              <View className="flex flex-row items-center">
                <PinCodeInput
                  onPinCodeChange={checkOriginalPinCode}
                  originalCode={originPinCode}
                />
              </View>
              {requireMessage !== "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {requireMessage}
                </Text>
              ) : null}

              {incorrectMessage != "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {incorrectMessage}
                </Text>
              ) : null}

              <ButtonLoading
                title={i18n.t("next")}
                titleLoading={i18n.t("creating_account")}
                onPress={() => { handleNewPincode() }}
                className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans mt-5"
              />

              {/* <Pressable
                android_ripple={{ color: '#5F9A94' }}
                onPress={() => { handleNewPincode() }}
                className="bg-[#38857B] flex flex-row items-center justify-center mt-5 rounded py-2">
                <Text className="text-white text-center font-bold text-[16px] font-sans">
                  {i18n.t("next")}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color="white"
                />
              </Pressable> */}
            </View>
          ) : !isReenterPincode ? (
            <View>
              <Text className="text-[#25384D] text-[15px] leading-[20px] mb-6 font-sans">
                {isOriginPin
                  ? i18n.t("create_pin_detail")
                  : i18n.t("enter_your_new_pin")}
              </Text>

              <View className="flex flex-row items-center">
                <PinCodeInput
                  onPinCodeChange={getNewPinCode}
                  originalCode={""}
                />
              </View>

              {requireMessage !== "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {requireMessage}
                </Text>
              ) : null}

              {incorrectMessage != "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {incorrectMessage}
                </Text>
              ) : null}
              <Pressable
                android_ripple={{ color: "#5F9A94" }}
                onPress={() => {
                  handleConfirmNewPinCode();
                }}
                className="bg-[#38857B] flex flex-row items-center justify-center mt-5 rounded py-2">
                <Text className="text-white text-center font-bold text-[16px] font-sans">
                  {i18n.t("next")}
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                  color="white"
                />
              </Pressable>
            </View>
          ) : (
            <View className="w-[100%] flex flex-col border-1">
              <Text className="text-[#25384D] text-[15px] leading-[20px] mb-6 font-sans">
                {isOriginPin
                  ? i18n.t("reenter_pin")
                  : i18n.t("reenter_your_new_pin")}
              </Text>

              <View className="flex flex-row items-center">
                <PinCodeInput
                  onPinCodeChange={setConfirmPinCode}
                  originalCode={tempPinCode}
                />
              </View>
              {requireMessage !== "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {requireMessage}
                </Text>
              ) : null}

              {incorrectMessage != "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {incorrectMessage}
                </Text>
              ) : null}
              {confirmMessage !== "" ? (
                <Text className="text-[#FF0000] text-[12px] leading-[20px] my-2 font-sans">
                  {confirmMessage}
                </Text>
              ) : null}

              <Pressable
                android_ripple={{ color: "#5F9A94" }}
                onPress={() => {
                  savePinCode();
                }}
                className="bg-[#38857B] flex flex-row items-center justify-center mt-5 rounded py-2">
                <Text className="text-white text-center font-bold text-[16px] font-sans">
                  {i18n.t("done")}
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChangePinCode;
