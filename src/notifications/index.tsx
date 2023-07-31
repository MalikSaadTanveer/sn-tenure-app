import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";
import NotificationEmptyIcon from "../../assets/svg/Noticication_empty.svg";

const Notifications = () => {
  const navigation = useNavigation();
 
  // const [notifications, setNotifications] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/notifications`)
  //   .then((res) => {
  //     console.log("success")
  //     setNotifications(res.data.notifications)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh]">
      <View className="px-[25px] mb-5">
        <View className=" gap-3 mt-6 items-center flex flex-row">
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome5
              color="white"
              size={20}
              name="arrow-left"
            />
          </Pressable>
          <Text className="text-white font-bold text-[24px] font-sans">{i18n.t("notification")}</Text>
        </View>
      </View>
      <View className="h-[90vh]  bg-white px-[25px] rounded-[24px] pt-[20px]">
        {i18n.t("notifications").length > 0 ? (
          <View className="mb-20">
            <FlatList
              data={i18n.t("notifications")}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.date}
              renderItem={({ item: notification }) => (
                <View className={"mb-4"}>
                  <Text className="font-bold text-lg font-sans">{notification.date}</Text>
                  <FlatList
                    className={`mt-3 ${notification.date === "Today" ? "bg-[#EBC55B]" : ""} rounded-md`}
                    data={notification.notifies}
                    renderItem={({ item: notify }) => (
                      <View className="border-b pt-3 rounded pl-4  pb-2 border-[#8AAEC9]">
                        <Text className="font-bold text-[16px] font-sans">
                          {notify.title}
                        </Text>
                        <Text className="mt-1 text-[12px] font-sans">{notify.description}</Text>
                      </View>
                    )}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <View className="flex items-center h-[69vh] justify-center flex-col">
            <NotificationEmptyIcon/>
            <Text className="text-[#25384D] text-[15px] pt-4 font-sans">
              {i18n.t("notification_empty")}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
