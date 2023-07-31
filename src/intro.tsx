import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "./locales/localization";
import { slides } from "./const/default";

const Intro = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [press, setPress] = useState(false);
  const [outlinepress, setOutlinePress] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const navigation = useNavigation();

  const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };


  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <View className="h-[40vh] flex-row justify-center items-center">
          <item.image width={250} height={250} />
          {/* <Image source={item.image} /> */}
        </View>
        <View className="flex">
          <View style={styles.content}>
            <View>
              <Text className="text-[24px] text-center leading-[36px] pb-4 text-[#25384D] font-sans-bold">
                {item.title}
              </Text>
              <Text className="text-[14px] leading-[20px] text-[#25384D] font-sans">{item.text}</Text>
            </View>
          </View>
          {item.isflag ? (
            <View>
              <View
                style={{ marginTop: 20 }}
                className={press ? "border-2 border border-[#38857B] rounded-lg" : "border-0"}>
                <Pressable
                  style={[{ height: 44, margin: 2 }]}
                  className="m-2"
                  className="bg-[#38857B] flex-row items-center justify-center rounded-lg"
                  onPress={() => navigation.navigate("Signup")}
                  onPressIn={() => setPress(!press)}
                  onPressOut={() => setPress(!press)}>
                  <Text style={styles.btntitle}>{i18n.t("signup")}</Text>
                </Pressable>
              </View>
              <View
                style={{ marginTop: 20 }}
                className={outlinepress ? "bg-[#DCF8EA]" : null}>
                <Pressable
                  style={[{ height: 44, margin: 2 }]}
                  className="border-[#38857B] border border-2 flex-row items-center justify-center rounded-lg"
                  onPressIn={() => setOutlinePress(!outlinepress)}
                  onPressOut={() => setOutlinePress(!outlinepress)}
                  onPress={() => navigation.navigate("Login")}>
                  <Text className="text-[#38857B] font-bold text-[16px] font-sans">
                    {i18n.t("login")}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View
        className="flex-row justify-center items-center h-[40px]">
        <MaterialCommunityIcons
          name="chevron-left"
          size={20}
          color="#38857B"
        />
        <Text className=" text-[#38857B] text-[16px] leading-[24px] pr-[10px] font-sans">
          {sliderIndex == 4 ? i18n.t("go_back") : i18n.t("previouse")}
        </Text>
      </View>
    )
  }

  const renderNextButton = () => {
    
    // const isPressed = true
    return (
      <View className = {isPressed ? "border p-[2px] rounded-[5px] border-[#38857B]" : "p-[3px] border-none rounded-[5px]"}>

      <View 
      className="  flex-row justify-center items-center bg-[#38857B] h-[40px] rounded-md px-2 border-0  " >
        <Text className=" text-white text-[16px] leading-[24px] align-middle pr-1 font-sans">
          {i18n.t("next")}
        </Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color="white"
        />
      </View>
      </View>
    )
  }

  const onSlideChange = index => {
    setSliderIndex(index);
  };

  return (
    <View style={styles.container} className="h-[100vh]">
      <View className="h-[98vh]">
        {showRealApp ? (
          <Intro />
        ) : (
          <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            showPrevButton={true}
            showDoneButton={false}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
            activeDotStyle={{ backgroundColor: "#38857B" }}
            dotStyle={{ backgroundColor: "#8AAEC9" }}
            onSlideChange={onSlideChange}
            
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#5A5A5A",
    textAlign: "center",
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  btntitle: {
    fontFamily: 'cera-pro',
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  container: {
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
});

export default Intro;
