import React, { useState, useEffect, FC } from "react";
import { Text, View, Pressable } from "react-native";
import PinCodeInput from "./pincodeinput";
import { getPinCodeFromLocalStorage } from "../const/storage";
import i18n from "../locales/localization";

interface pincodeProps {
  setPinValid: (isValid: boolean) => void;
  setTransferValid: (isValid: boolean) => void;
}
const PinCode: FC<pincodeProps> = (props) => {

  const [originPinCode, setOriginPinCode] = useState('')
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {

    getPinCodeFromLocalStorage("pinCode")
      .then((pinCode) => {
        // Use the pinCode value here
        console.log("original pin code : ", pinCode);
        setOriginPinCode(pinCode);
      })
      .catch((error) => {
        // Handle any errors that occurred during pin code retrieval
        console.log(`Error retrieving pin code: ${error}`);
      });

  }, [])

  const checkOriginalPinCode = (pinCode: string, isCorrect: boolean) => {
    props.setPinValid(isCorrect)
    setIsValid(isCorrect)
  }

  const onGoBack = () => {
    props.setTransferValid(false)
  }

  return (
    <View className="flex-col justify-between mt-1">
      <Text className="text-[18px] pb-[15px] font-bold font-sans">{i18n.t("pin_details")}</Text>

      <Text className="text-[14px] pb-[15px] font-sans">{i18n.t("pin_content")}</Text>

      <View className="flex flex-col items-center">
        <PinCodeInput onPinCodeChange={checkOriginalPinCode} originalCode={originPinCode} />

        {!isValid ? (
          <View className="w-[100%] flex flex-row mt-3">

            <Text className="text-[12px] pb-[15px] text-[#FF0000] font-sans">
              {i18n.t("pin_incorrect_field")}
            </Text>
          </View>
        ) : null}
      </View>

      <Pressable
        className="flex-row w-[100%] justify-center items-center h-[40px] rounded-lg mb-[20px]"
        onPress={onGoBack}>
        <Text className="text-[#38857B] text-[15px] font-bold pl-1 font-sans">
          {i18n.t("transaction_edit")}
        </Text>
      </Pressable>
    </View>
  );
}

export default PinCode
