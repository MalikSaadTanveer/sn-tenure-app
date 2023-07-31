import React from "react";
import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";

interface User {
  fullname: string;
  email: string;
  birthday: string;
  location: string;
}

const PersonalInfo = () => {
  const navigation = useNavigation();
  const user:User = {
    fullname: "John Doe",
    email: "jondoe@gmail.com",
    birthday: "06/11",
    location: "Brampton, ON",
  };

  // const [user, setUser] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/user`)
  //   .then((res) => {
  //     console.log("success")
  // setUser(res.data.user)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useFocusEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mb-3">
        <View className="gap-3 mt-6 justify-between items-center flex flex-row">
          <Text className="text-white font-bold text-[24px] font-sans">{i18n.t("settings")}</Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[25px] rounded-[24px] py-[24px]">
          <View className="flex flex-row items-center gap-3">
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesome5
                color="#38857B"
                size={20}
                name="arrow-left"
              />
            </Pressable>
            <Text className="font-semibold text-[17px] font-sans">{i18n.t("personal_info")}</Text>
          </View>

          <View className="mt-7">
            <Text className="font-semibold text-[15px]">{i18n.t("personal_detail")}</Text>
            <View className="mt-5 h-[500px]">
              <View className="flex mb-4 flex-col gap-3">
                <Text className="text-[#5A7894] text-sm font-sans">
                {i18n.t("full_name")}
                </Text>
                <Text className="text-base font-sans">{user.fullname}</Text>
              </View>
              <View className="flex mb-4 flex-col gap-3">
                <Text className="text-[#5A7894] text-sm font-sans">
                {i18n.t("email")}
                </Text>
                <Text className="text-base font-sans">{user.email}</Text>
              </View>
              <View className="flex  mb-4 flex-col gap-3">
                <Text className="text-[#5A7894] text-sm font-sans">
                {i18n.t("location")}
                </Text>
                <Text className="text-base font-sans">{user.location}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;
