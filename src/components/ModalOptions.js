import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GeneralStyle } from "./GeneralStyles";
import Header from "./Header";

const ModalOptions = ({
  animationType = "fade",
  modalVisibility = false,
  options = [],
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={modalVisibility}
    >
      <View style={GeneralStyle.parentTop}>
        <TouchableOpacity>
          <Header />
        </TouchableOpacity>
        <View>
          {options.map((option, idx) => (
            <TouchableOpacity key={idx}>
              <View>
                <Text>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ModalOptions;

const styles = StyleSheet.create({
  options: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  modal: {},
});
