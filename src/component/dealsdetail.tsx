import React, { FC, useCallback, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import i18n from "../locales/localization";
import { imageUrls } from "./dealslist";
import ArrowSolid from "../../assets/svg/location-arrow-solid.svg";
import { showToast } from "../const/toast";
import { geocodeURL } from "../const/url";
import ButtonLoading from "./buttonloading";

interface dealsdetailProps {
  detailDealsData: any;
  requireMap: boolean;
  isTravelMaps: boolean;
  location: string;
  subTitle: string;
  imageType: number;
  bookURL: string;
}
const DealsDetail: FC<dealsdetailProps> = (props) => {
  const navigation = useNavigation();

  const detailData = props.detailDealsData;
  const requireMap = props.requireMap ? props.requireMap : false;
  const isTravelDeals = props.isTravelDeals ? props.isTravelDeals : false;
  const location = props.location;

  const [region, setRegion] = useState({
    latitude: 33.69378,
    longitude: -88.75211,
    latitudeDelta: 0.275,
    longitudeDelta: 0.255,
  });

  useFocusEffect(
    useCallback(() => {
      requireMap && onGetAddress(location);
    }, []),
  );

  const onGetAddress = async (location: string) => {
    await fetch(geocodeURL(location),)
      .then(response => response.json())
      .then(({ results, status, error_message }) => {
        if (status == "REQUEST_DENIED") {
          showToast(error_message);
        } else {
          const { lat, lng } =
            results[0] !== undefined && results[0].geometry.location;
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          setRegion({ ...region, latitude: lat, longitude: lng });
        }
      })
      .catch(error => console.error(error));
  };

  const onBookNow = () => {
    Linking.openURL(detailData.bookURL);
  };
  function TravelInclusion() {
    return detailData.inclusion?.map((a: any, index: number) => {
      return (
        <View key={index} className="flex flex-row items-start gap-2">
          <Text className="font-bold text-base font-sans">•</Text>
          <Text className="font-sans">{a}</Text>
        </View>
      );
    });
  }

  function TermConditions() {
    return detailData.termsAndConditions?.map((a: any, index: number) => {
      return (
        <View key={index} className="flex flex-row items-start gap-2">
          <Text className="font-bold text-base font-sans">•</Text>
          <Text className="font-sans">{a}</Text>
        </View>
      );
    });
  }

  return (
    <SafeAreaView className="bg-[#38857B] v-[100vh] pt-[24px]">
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

      <View>
        <ScrollView className="h-[90vh]  bg-white px-[20px] rounded-t-[24px] py-[24px]">
          <View className="flex flex-row  items-center justify-between align-bottom gap-3 mt-1">
            <View className="flex flex-row justify-center items-center">
              <Pressable onPress={() => navigation.goBack()}>
                <FontAwesome5 color="#38857B" size={20} name="arrow-left" />
              </Pressable>
              <Text className="font-semibold text-[17px] pl-2 font-sans">
                {props.subTitle}
              </Text>
            </View>
            {isTravelDeals ? (
               <ButtonLoading
               title={i18n.t("book_now")}
               titleLoading={i18n.t("creating_account")}
               
               onPress={() => onBookNow()}
               className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
             />
            ) : null}
            {/* {isTravelDeals ? (
              <Pressable
                className="flex-row w-[100px] justify-center items-center bg-[#38857B] h-[30px] rounded-lg"
                onPress={() => onBookNow()}>
                <Text className="text-white text-[14px] font-bold font-sans">
                  {i18n.t("book_now")}
                </Text>
              </Pressable>
            ) : null} */}
          </View>
          <View className="mb-40">
            <View className="mt-5 ">
              <View className="flex flex-row items-center gap-4">
                <Image
                  source={imageUrls[props.imageType]}
                  style={{ width: 40, height: 40 }}
                  className="rounded-full"
                />
                <View className="flex flex-col">
                  <Text className="font-bold text-[20px] font-sans">
                    {detailData.title}
                  </Text>
                  {isTravelDeals ? null : (
                    <View className="flex flex-row mt-3 items-center">
                      <ArrowSolid />
                      <Text className="text-[12px] text-[#5A7894] ml-1 font-sans">
                        {detailData.location}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <Text className="mt-6 text-[15px] text-[#25384D] font-sans">
                {detailData.status}
              </Text>
            </View>
            <Text className="mt-2 font-semibold text-[13px] font-sans">
              {detailData.discountDescription}
              {detailData.location}
            </Text>
            <Text className="my-2 text-[13px] text-[#5A7894] font-sans">
              {detailData.expiryDate}
            </Text>
            {requireMap ? (
              <MapView
                style={styles.map}
                initialRegion={region}
                region={region}>
                <Marker coordinate={region} />
              </MapView>
            ) : null}
            <Text className="font-sans">
              {detailData.description} {i18n.t("this_deal_includes")}
            </Text>

            <TravelInclusion />

            <Text className="font-sans">{i18n.t("terms_and_conditions")}</Text>
            <TermConditions />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    position: "relative",
    width: "100%",
    height: 300,
    flex: 1,
    marginVertical: 10,
  },
});

export default DealsDetail;
