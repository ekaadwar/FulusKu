import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GeneralStyle } from "./GeneralStyles";
import Header from "./Header";
import SpaceHorizontal from "./SpaceHorizontal";

const ModalOptions = ({
  animationType = "fade",
  visibility = false,
  setVisibility = () => {},
  options = [],
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visibility}
    >
      <View style={GeneralStyle.parentTop}>
        <Header action={setVisibility} title="Select question" />
        <SpaceHorizontal space={30} />
        <View style={GeneralStyle.container}>
          {options.map((option, idx) => (
            <View>
              <TouchableOpacity key={idx}>
                <View style={styles.optionWrap}>
                  <Text style={GeneralStyle.mainText}>{option}</Text>
                </View>
              </TouchableOpacity>
              <SpaceHorizontal />
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ModalOptions;

const styles = StyleSheet.create({
  optionWrap: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
});
