import React from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DealsList from "../../component/dealslist";
import i18n from "../../locales/localization";

const HealthDeals = () => {
  const navigation = useNavigation();
 
  // const [healthDeals, setHealthDeals] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/healthDeals`)
  //   .then((res) => {
  //     console.log("success")
  //     setHealthDeals(res.data.healthDeals)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#38857B] v-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mt-4 justify-between items-center flex-row">
        <Text className="text-white text-[24px] font-bold pb-[8px] font-sans">
            {i18n.t("your_deals")}
        </Text>
        <Pressable onPress={() => { navigation.navigate("Notifications"); }}>
          <Ionicons
            name="ios-notifications-circle-outline"
            size={32}
            color="white"
          />
        </Pressable>
      </View>

      <View className="h-[90vh]  bg-white px-[20px] rounded-[24px] pt-[24px]">
          <View className="flex flex-row items-center gap-3 pb-4">
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome5
              color="#38857B"
              size={20}
              name="arrow-left"
            />
          </Pressable>
            <Text className="font-semibold text-[17px] font-sans">{i18n.t("health_deal_h")}</Text>
          </View>
          <DealsList data={i18n.t("health_deals")} navigation={"HealthDeal"} imageType = {2}/>
      </View>
    </SafeAreaView>
  );
};

export default HealthDeals;
