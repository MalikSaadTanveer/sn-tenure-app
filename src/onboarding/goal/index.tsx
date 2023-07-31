import { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import { showToast } from "../../const/toast";
import ButtonLoading from "../../component/buttonloading";

const Goal = ({ route }) => {
  const navigation = useNavigation();

  const goal = {
    title: "",
    goal: "",
    percentage: "",
  };

  const [goals, setGoals] = useState([goal]);

  useFocusEffect(
    useCallback(() => {
      const { item } = route.params ? route.params : "";
      if (item !== undefined && item !== "") {
        setGoals([item]);
      }
    }, [route.params]),
  );

  const handleGoal = () => {
    setGoals(goals => [...goals, goal]);
  };

  const handleRemoveGoal = index => {
    let data = [...goals];
    data.splice(index, 1);
    setGoals(data);
  };

  return (
    <View className="bg-[#38857B] h-[100vh] py-[32px]">
      <View className="h-[15vh] px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[8px] font-sans">
            {i18n.t("savings_goal")}
          </Text>
          <Text
            className="text-white text-[16px] leading-[24px] font-sans"
            numberOfLines={2}>
            {i18n.t("savings_goal_content")}
          </Text>
        </View>
      </View>
      <View className="h-[85vh] bg-white px-[32px] rounded-[24px]">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="font-bold text-[20px] text-[#010101] py-[24px] font-sans">
            {i18n.t("set_your_savings_goal")}
          </Text>

          {goals.map((item, index) => {
            return (
              <View key={index}>
                <View>
                  <Text
                    key={`text-${index}`}
                    className="text-[16px] font-medium pb-[8px] font-sans">
                    {i18n.t("saving_for")}
                  </Text>
                  <TextInput
                    key={`input-title-${index}`}
                    value={item?.title}
                    onChangeText={(text)=>{ 
                      let dummy = [...goals]
                      dummy[index].title = text
                      setGoals(dummy)
                      }}
                    label="Enter the title of your goal"
                    name="saving_for"
                    placeholder="Enter the title of your goal"
                    placeholderTextColor={'grey'}
                    className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
                  />
                </View>

                <View key={`goal_${index}`}>
                  <Text className="text-[16px] font-medium pb-[8px] font-sans">
                    {i18n.t("your_goal")}
                  </Text>
                  <TextInput
                    value={item?.goal}
                    onChangeText={(text)=>{ 
                      let dummy = [...goals]
                      dummy[index].goal = text
                      setGoals(dummy)
                      }}
                    label="What is your goal?"
                    name="your_goal"
                    placeholder="Enter an amount"
                    placeholderTextColor={'grey'}
                    className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
                  />
                </View>

                <View key={`percentage_${index}`}>
                  <Text className="text-[16px] font-medium pb-[8px] font-sans">
                    {i18n.t("percentage_of_spending_to_save")}
                  </Text>
                  <TextInput
                    value={item?.percentage}
                    onChangeText={(text)=>{ 
                      let dummy = [...goals]
                      dummy[index].percentage = text
                      setGoals(dummy)
                      }}
                    label="Percentage of spending to save"
                    name="percentage_of_spending_to_save"
                    placeholder="Enter number between 1 and 100"
                    placeholderTextColor={'grey'}
                    className="border border-2 h-[40px] rounded-lg border-[#8AAEC9] px-2 mb-[16px] font-sans"
                  />
                </View>

                {goals.length === 1 ? (
                  <View className="flex-row justify-end mb-[32px]">
                    <Pressable className="flex-row ml-3" onPress={handleGoal}>
                      <Entypo
                        name="circle-with-plus"
                        size={24}
                        color="#38857B"
                      />
                      <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                        {i18n.t("add_another_goal")}
                      </Text>
                    </Pressable>
                  </View>
                ) : (
                  <View className="flex-row justify-end mb-[32px]">
                    {index !== goals.length - 1 ? (
                      <Pressable
                        className="flex-row"
                        onPress={() => handleRemoveGoal(index)}>
                        <MaterialCommunityIcons
                          name="delete"
                          size={24}
                          color="#D24252"
                        />
                        <Text className="text-[#D24252] text-[16px] font-bold font-sans">
                          {i18n.t("romove_goal")}
                        </Text>
                      </Pressable>
                    ) : (
                      <View className="flex-row justify-end ">
                        <Pressable
                          className="flex-row"
                          onPress={() => handleRemoveGoal(index)}>
                          <MaterialCommunityIcons
                            name="delete"
                            size={24}
                            color="#D24252"
                          />
                          <Text className="text-[#D24252] text-[16px] font-bold font-sans">
                            {i18n.t("romove_goal")}
                          </Text>
                        </Pressable>
                        <Pressable
                          className="flex-row ml-3"
                          onPress={handleGoal}>
                          <Entypo
                            name="circle-with-plus"
                            size={24}
                            color="#38857B"
                          />
                          <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                            {i18n.t("add_another_goal")}
                          </Text>
                        </Pressable>
                      </View>
                    )}
                  </View>
                )}
              </View>
            );
          })}

          <View className="mb-[16px]" style={{ marginTop: 20 }}>
            <ButtonLoading
              title={i18n.t("add_goal")}
              titleLoading={i18n.t("creating_account")}
              onPress={() => {
                showToast("New goal successfully created.");
                navigation.navigate("HomeStack");
              }}
              className="bg-[#38857B] flex-row items-center justify-center rounded-lg font-sans"
            />
          </View>

          {/* <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#38857B] h-[40px] rounded-lg mb-[16px]"
            onPress={() => {
              showToast("New goal successfully created.");
              navigation.navigate("HomeStack");
            }}>
            <Text className="text-white text-[16px] font-bold font-sans">
              {i18n.t("add_goal")}
            </Text>
          </Pressable> */}
          <View className="w-[100%] flex-row justify-between items-center pb-[60px]">
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("RoundUp")}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color="#38857B"
              />
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("previous_step")}
              </Text>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("HomeStack")}>
              <Text className="text-[#38857B] text-[16px] font-bold font-sans">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1RowStyle: {
    backgroundColor: "bule",
    borderBottomColor: "transparent",
    paddingHorizontal: 10,
  },
  dropdown1RowTxtStyle: { color: "#010101", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown2BtnStyle: {
    height: 40,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8AAEC9",
  },
  dropdown2BtnTxtStyle: {
    color: "#8AAEC9",
  },
});

export default Goal;
