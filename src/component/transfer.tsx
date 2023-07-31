import React, { FC, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { useValidation } from "react-native-form-validator";
import i18n from "../locales/localization";

interface transferProps {
  setTransferValid: (isValid: boolean) => void;
}
const Transfer: FC<transferProps> = (props) => {
  const [amount, setAmount] = useState("4000");
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("janedoe1@email.com");
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { amount, name, email },
    });

  const onTransfer = () => {
    const valid = validate({
      amount: { minlength: 1, required: true },
      name: { minlength: 1, required: true },
      email: { minlength: 1, required: true },
    });
    props.setTransferValid(valid);
  };

  const required_field = i18n.t("required_field");

  return (
    <View className="flex-col mt-1">
      <Text className="text-[18px] pb-[15px] font-sans">
        {i18n.t("transaction_details")}
      </Text>

      <TextInput
        onChangeText={setAmount}
        value={amount}
        label="Enter an amount"
        name="transfer_amount"
        placeholder={i18n.t("placeholder_enter_amount")}
        className={
          isFieldInError("amount")
            ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px] font-sans"
            : "border border-1 h-[40px] rounded-lg border-[#8AAEC9] px-2 my-[4px] font-sans"
        }
      />
      {isFieldInError("amount") && (
        <Text className="text-red-600 font-sans">{required_field}</Text>
      )}

      <TextInput
        onChangeText={setName}
        value={name}
        label="beneficiary"
        name="beneficiary"
        placeholder={i18n.t("placeholder_enter_name")}
        className={
          isFieldInError("beneficiary")
            ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px] font-sans"
            : "border border-1 h-[40px] rounded-lg border-[#8AAEC9] px-2 my-[4px] font-sans"
        }
      />
      {isFieldInError("beneficiary") && (
        <Text className="text-red-600 font-sans">
          {i18n.t("required_field")}
        </Text>
      )}

      <TextInput
        onChangeText={setEmail}
        value={email}
        label="beneficiary1"
        name="beneficiary1"
        placeholder={i18n.t("placeholder_enter_email")}
        className={
          isFieldInError("beneficiary1")
            ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px] font-sans"
            : "border border-1 h-[40px] rounded-lg border-[#8AAEC9] px-2 my-[4px] font-sans"
        }
      />
      {isFieldInError("beneficiary1") && (
        <Text className="text-red-600 font-sans">
          {i18n.t("required_field")}
        </Text>
      )}

      <TextInput
        label="description"
        name="description"
        placeholder={i18n.t("placeholder_enter_description")}
        className="border border-1 h-[40px] rounded-lg border-[#8AAEC9] px-2 my-[4px] font-sans"
      />

      <Pressable
        className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[20px] mt-4 font-sans"
        onPress={onTransfer}>
        <Text className="text-white text-[16px] font-bold pl-1 font-sans">
          {i18n.t("transfer")}
        </Text>
      </Pressable>
    </View>
  );
};

export default Transfer;
