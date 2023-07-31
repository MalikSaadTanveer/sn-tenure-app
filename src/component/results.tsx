import React, { FC } from "react";
import { Text, View, Pressable } from "react-native";
import i18n from "../locales/localization";
import SuccessIcon from "../../assets/svg/onboarding_payment/success_icon.svg";
import FailedIcon from "../../assets/svg/onboarding_payment/failed_icon.svg";

interface resultsProps {
  success : boolean;
  setDone : () => void;
  setRetry : () => void;
}
const Results: FC<resultsProps> = (props) => {

  const onPressDone = () => {
    props.setDone();
  }

  const onPressTry = () => {
    props.setRetry();
  }

  return (
    <View className = "flex flex-col mt-8">
      {props.success ? (
        <View className="flex-row justify-center items-center mb-[35px] border border-2 border-[#018485] rounded-xl h-[200px] px-4">
          <View>
            <View className="flex-row justify-center">
              <SuccessIcon />
            </View>
            <Text className="pt-[40px] text-[#018485] font-sans">
              {i18n.t("transfer_success")}
            </Text>
          </View>
        </View>
      ) : (
        <View className="flex-row justify-center items-center mb-[35px] border border-2 border-[red] rounded-xl h-[200px] px-4">
          <View>
            <View className="flex-row justify-center">
              <FailedIcon />
            </View>
            <Text className="pt-[40px] text-[#FF0000] font-sans">
              {i18n.t("transfer_failed")}
            </Text>
          </View>
        </View>
      )}

      <View className = "flex flex-row w-[100%]">
        <Pressable
          className="flex-1 flex-row justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[20px] mt-4"
          onPress={onPressDone}
        >
          <Text className="text-white text-[16px] font-bold pl-1 font-sans">
            {i18n.t("done")}
          </Text>
        </Pressable> 
        {!props.success ? (
          <Pressable
              className="flex-1 flex-row justify-center items-center border-[#38857B] border-[1px] h-[40px] rounded-lg mb-[20px] mt-4 ml-2"
              onPress={onPressTry}
            >
              <Text className="text-[#38857B] text-[16px] font-bold pl-1 font-sans">
                {i18n.t("try_again")}
              </Text>
            </Pressable> 
        ) : null}
        
      </View>
      
    </View>
  );
}

export default Results;
