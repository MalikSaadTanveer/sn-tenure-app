import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../const/default";
import i18n from "../locales/localization";
import CategoryItem from "../component/categoryitem";

const screenWidth = Dimensions.get("window").width;

const Deals = () => {
  const navigation = useNavigation();
  
  // const [categories, setCategories] = useState();

  // const fetchData = () => {
  //   axios.post(`${API_BASIC_URL}/categories`, email)
  //   .then((res) => {
  //     console.log("success")
  //     setCategories(res.data.categories)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mt-4 justify-between items-center flex-row">
        <Text className="text-white text-[24px] font-bold pb-[8px] font-sans-bold">
          {i18n.t("your_deals")}
        </Text>
        <Ionicons
          onPress={() => {
            navigation.navigate("Notifications");
          }}
          name="ios-notifications-circle-outline"
          size={32}
          color="white"
        />
      </View>
      <View className="h-[90vh] bg-white px-[15px] rounded-t-[24px] py-[24px]">
        <View>
          <Text className="font-bold text-xl font-sans">By category</Text>
          <FlatList
            contentContainerStyle={{paddingBottom: Platform.OS == 'android' ? 44 : 100 }}
            data={categories}
            keyExtractor={(v, index) => index}
            numColumns={2}
            disableVirtualization={true}
            style={{ width: screenWidth }}
            className="mt-4 mb-3 h-[530px] overflow-visible"
            renderItem = {({item}) => <CategoryItem item = {item}/>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Deals;
