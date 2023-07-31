import React, { FC } from "react";
import { Text, View, Pressable } from "react-native";
import ProgressCircle from 'react-native-progress/Circle'
import i18n from "../locales/localization";

interface breakdownItemProp {
  type : string;
  progress : number;
}
const BreakdownItem: FC<breakdownItemProp> = (props) => {
  const itemColor = props.type == 'cash' ? "#EBC55B" : "#6FAF91"
  const itemTitle = props.type == 'cash' ? i18n.t("cash-back") : i18n.t("round-up");
  return (
    <Pressable className="flex-row p-2 items-center">
      <ProgressCircle
        progress={props.progress}
        size={40}
        thickness={4}
        unfilledColor={props.type == 'cash' ? "#FEB094" : "#66B5A4"}
        color="#BBDAED"
        borderWidth={0}
        bgColor={itemColor}
        showsText={true}
        formatText={() => (
          <View className="flex-col items-center">
            <Text className="text-[#25384D] text-[10px] font-sans">{props.progress * 100}%</Text>
          </View>
        )}
      />
      <View className="flex-col pl-4">
        <Text className="text-[#25384D] text-[16px] font-sans">{itemTitle}</Text>
        <Text className="text-[#5A7894] text-[12px] font-sans">$50,000</Text>
      </View>
    </Pressable>
  );
}

export default BreakdownItem;
