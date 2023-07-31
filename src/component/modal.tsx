import { Ionicons } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { Text, View, Pressable, Modal } from "react-native";
// import Modal from "react-native-modal";
import i18n from "../locales/localization";

interface modalProps {
  isModalVisible : boolean;
  setModalVisible : (isVisible : boolean) => void;
  confirmModal : () => void;
}
const CustomizeModal: FC<modalProps> = (props) => {
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };

  return (
    <Modal visible={props.isModalVisible} transparent={true}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}>
        <View className="w-[86vw] bg-white rounded-xl h-[180px] flex-colum justify-around">
          <Pressable
            className="flex-row justify-end px-4"
            onPress={toggleModal}>
            <Ionicons name="md-close-circle" size={24} color="black" />
          </Pressable>
          <Text className="text-[15px] text-center font-sans px-10 -mt-5">
            {i18n.t("goal_delete_content")}
          </Text>
          <View className="flex-row justify-center">
            <Pressable
              onPress={props.confirmModal}
              className="flex-row justify-center items-center rounded-lg border-[#D24252] border border-1 h-[35px] px-2 mr-6">
              <Text className="text-[#D24252] text-[14px] leading-[24px] font-sans">
                {i18n.t("yes_delete")}
              </Text>
            </Pressable>
            <Pressable className="flex-row justify-center items-center rounded-lg bg-[#38857B] h-[35px] px-2"
              onPress={toggleModal}>
              <Text className="text-white text-[14px] leading-[24px] font-sans">
                {i18n.t("no_delete")}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default CustomizeModal;
