import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Octicons from "react-native-vector-icons/Octicons";
import { GeneralStyle } from "./GeneralStyles";

const ItemList = ({
  text = "your text",
  icon = <View />,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={styles.transferItem} onPress={onPress}>
      {icon}
      <Text style={[GeneralStyle.mainText, styles.itemText]}>{text}</Text>
      <Octicons name="chevron-right" color="#FFF" size={20} />
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  transferItem: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
