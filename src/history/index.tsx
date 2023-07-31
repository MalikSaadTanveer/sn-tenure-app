import React, { useState, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, FlatList, Platform } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import { renderMoney } from "../utils";
import HistoryEmptyIcon from "../../assets/svg/history_empty.svg";

interface ChartConfig {
  backgroundColor: string;
  backgroundGradientFromOpacity: number;
  backgroundGradientTo: string;
  backgroundGradientToOpacity: number;
  color: (opacity?: number) => string;
  labelColor: (opacity?: number) => string;
  strokeWidth?: number;
  barPercentage: number;
  decimalPlaces: string;
  useShadowColorFromDataset?: boolean;
  propsForHorizontalLabels: {
    fontSize: number;
  };
  propsForVerticalLabels: {
    fontSize: number;
  };
  propsForBackgroundLines: {
    strokeDasharray: string;
    strokeWidth: number;
    stroke: string;
  };
}

const screenWidth = Dimensions.get("window").width;

const History = () => {
  const cashBacks = i18n.t("cashBacks");
  const roundUps = i18n.t("roundUps");
  // const [data, setData] = useState();

  // const fetchData = () => {
  //   axios.post(`${API_BASIC_URL}/data`, email)
  //   .then((res) => {
  //     console.log("success")
  //     setData(res.data.data)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  const chartConfig:ChartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: Platform.OS == 'android' ? 1 : 0 ,
    color: (opacity = 1) => `#BBDAED`,
    labelColor: (opacity = 1) => `#000`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: '0',
    useShadowColorFromDataset: false, // optional
    propsForHorizontalLabels: {
      fontSize: 11 // Set the font size for the x-axis label text
    },
    propsForVerticalLabels: {
      fontSize: 10 // Set the font size for the x-axis label text
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // solid line
      strokeWidth: 1, // width of the horizontal grid lines
      stroke: '#e8e8e8' // color of the horizontal grid lines
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [3200, 400, 700, 1000, 2000, 2500, 3000, 3500, 4500, 5000, 5500, 5500],
        color: (opacity = 1) => `#38857B`, // optional
        strokeWidth: 2 // optional
      }
    ]
  };

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-[#38857B] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] mt-4 justify-between items-center flex-row">
        <Text className="text-white text-[24px] font-bold pb-[8px] font-sans-bold">
          {i18n.t("your_history")}
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
      <View className="h-[90vh] bg-white px-[24px] rounded-t-[24px] py-[24px]">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: Platform.OS == 'android' ? 44 : 100 }} >
          <View className="flex justify-center flex-row items-start gap-3">
            <View>
              <Text
                onPress={() => {
                  flatListRef.current.goToFirstIndex();
                  setCurrentIndex(0);
                }}
                className={`font-semibold text-[15px] font-sans ${currentIndex !== 0
                  ? "text-[#8AAEC9]"
                  : "text-[#38857B]  outline-slate-900"
                  }`}>
                {i18n.t("cash-back")}
              </Text>
              {currentIndex === 0 && (
                <View className="border-t-2 border-[#38857B] mt-[5px]"></View>
              )}
            </View>
            <View>
              <Text
                onPress={() => {
                  setCurrentIndex(1);
                  flatListRef.current.goToLastIndex();
                }}
                className={`font-semibold text-[15px] font-sans ${currentIndex !== 1
                  ? "text-[#8AAEC9]"
                  : "text-[#38857B] outline-1 outline-dashed outline-offset-1 outline-slate-900"
                  }`}>
                {i18n.t("round_ups")}
              </Text>
              {currentIndex === 1 && (
                <View className="border-t-2 border-[#38857B] mt-[5px]"></View>
              )}
            </View>
          </View>
          <SwiperFlatList
            style={{ width: screenWidth }}
            autoplay={false}
            autoplayLoop={false}
            scrollEnabled={true}
            ref={flatListRef}
            onChangeIndex={({ index }) => setCurrentIndex(index)}
            showPagination={false}>
            <View style={{ width: screenWidth, paddingTop: 20, paddingLeft: 1 }}>
              {cashBacks.length > 0 ? (
                <View>
                  <View
                    style={[styles.dropshadow, {
                      height: 300,
                      width: screenWidth - 50,
                      paddingTop: 10,
                      flexDirection: "row",
                    }]}>

                    <LineChart
                      data={data}
                      width={screenWidth - 60}
                      height={300}
                      chartConfig={chartConfig}
                      withVerticalLines={false}
                      withDots={false}
                      propsForVerticalLabels={{ fontSize: 12, position: 'right' }}
                      fromZero={true}
                      yAxisLabel="$"
                      segments={11}
                    />
                  </View>
                  <View style={{ width: screenWidth - 70 }} className="mt-6">
                    <Text className="font-semibold text-[18px]">
                      {i18n.t("cash_back_breakdown")}
                    </Text>
                    <FlatList
                      className="mt-3 ml-4"
                      data={cashBacks}
                      renderItem={({ item }) => (
                        <View className="flex border-b border-[#8AAEC9] pb-2 flex-row mb-3 items-center justify-between">
                          <View className="flex flex-col">
                            <Text className="font-semibold text-[16px] font-sans">
                              {item.name}
                            </Text>
                            <Text className="text-[12px] text-[#5A7894] font-sans">
                              {i18n.t('cashback', {visits : item.visits})}
                            </Text>
                          </View>
                          <Text className="font-semibold font-sans">
                            {renderMoney(item.amount) + ".00"}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              ) : (
                <View style={{width:screenWidth - 50}} className="flex items-center h-[69vh] justify-center flex-col">
                  <HistoryEmptyIcon/>
                  <Text className="text-[#25384D] text-[15px] pt-4 font-sans">
                    {i18n.t("history_cash_empty")}
                  </Text>
                </View>
              )}
              
            </View>
            <View style={{ width: screenWidth, paddingTop: 20, paddingLeft: 1 }}>
              {roundUps.length > 0 ? (
                <View>
                  <View
                    style={[styles.dropshadow, {
                      height: 300,
                      width: screenWidth - 50,
                      paddingTop: 10,
                      flexDirection: "row",
                    }]}>

                    <LineChart
                      data={data}
                      width={screenWidth - 60}
                      height={300}
                      chartConfig={chartConfig}
                      withVerticalLines={false}
                      withDots={false}
                      propsForVerticalLabels={{ fontSize: 12, position: 'right' }}
                      fromZero={true}
                      yAxisLabel="$"
                      segments={11}
                    />
                  </View>
                  <View className="mt-6" style={{ width: screenWidth - 70 }}>
                    <Text className="font-semibold text-[18px] font-sans">
                      {i18n.t("roundups_breakdown")}
                    </Text>
                    <FlatList
                      className="mt-3 ml-4"
                      data={roundUps}
                      renderItem={({ item }) => (
                        <View className="flex border-b border-[#8AAEC9] pb-2 flex-row mb-3 items-center justify-between">
                          <View className="flex flex-col">
                            <Text className="font-semibold text-[16px] font-sans">
                              {item.name}
                            </Text>
                            <Text className="text-[12px] text-[#5A7894] font-sans">
                              {i18n.t('cashback', {visits : item.visits})}
                            </Text>
                          </View>
                          <Text className="font-semibold font-sans">
                            {renderMoney(item.amount) + ".00"}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              ) : (
                <View style={{width:screenWidth - 50}} className="flex items-center h-[69vh] justify-center flex-col">
                  <HistoryEmptyIcon/>
                  <Text className="text-[#25384D] text-[15px] pt-4 font-sans">
                    {i18n.t("history_round_empty")}
                  </Text>
              </View>
              )}
            </View>
          </SwiperFlatList>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 200,
    marginHorizontal: 100,
  },
  child: { width: screenWidth, justifyContent: "center" },
  dropshadow: {
    backgroundColor: '#fff',

    // add shadows for Android
    // No options forshadow offset, shadow opacity like iOS
    elevation: 5,

    // shadow color
    shadowColor: 'black',
    shadowRadius: 8,
    // work for iOS only
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
});

export default History;
