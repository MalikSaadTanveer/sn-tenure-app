import React, {FC, useState} from "react";
import { FlatList, Pressable, Text, View, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowSolid from "../../assets/svg/location-arrow-solid.svg";

export const imageUrls = [
  require("../../assets/dealsTravel.png"),
  require("../../assets/dealsRetail.png"),
  require("../../assets/dealsHealth.png"),
  require("../../assets/dealsFood.png")
]

interface deal {
  title: string;
  discountDescription: string;
  location: string;
  expiryDate: string;
  status: string;
}

interface dealItemProp {
  item: deal;
  navigation : string;
  imageType : number;
}

const DealItem: FC<dealItemProp> = (props) => {
    const item = props.item;
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };
  
    const handlePressOut = () => {
        setIsPressed(false);
    };
  
    return (
      <Pressable
        onPress={() => navigation.navigate(props.navigation, {location : item.location})}
        onPressOut={handlePressOut}
        onPressIn={handlePressIn}
        className={isPressed ? "bg-[#EBC55B] flex border-[#8AAEC9] border-b p-2 flex-row" : "flex border-[#8AAEC9] border-b p-2 flex-row"}>
      
      <Image
        source={imageUrls[props.imageType]}
        style={{width : 40, height : 40}}
        className="rounded-full"
      />

        <View className="flex flex-col ml-4">
          <Text className="font-bold text-[16px] font-sans">{item.title}</Text>
          {props.imageType == 0 ? (
            <Text className="mt-3 text-[14px] font-sans">{item.location}</Text>
          ) : (
            <View className = "flex flex-row mt-3 items-center">
              <ArrowSolid/>
              <Text className="text-[12px] text-[#5A7894] ml-1 font-sans">{item.location}</Text>
            </View>
          )}
          <Text className="mt-1 text-[14px] font-sans">
            {item.discountDescription}
          </Text>
          <Text className="my-2 text-[#5A7894] text-[12px] font-sans">{item.expiryDate}</Text>
        </View>
      </Pressable>
    )
}


interface dealslistProps {
  data : deal[];
  navigations : string;
  imageType : number
}
const DealsList = (props : dealslistProps) => {

  return (  
    <FlatList
      contentContainerStyle={{paddingBottom: Platform.OS == 'android' ? 44 : 100 }}
      data={props.data}
      className="mb-10"
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (<DealItem item={item} navigation={props.navigation} imageType={props.imageType}/>)}
    />
  );
}

export default DealsList;
