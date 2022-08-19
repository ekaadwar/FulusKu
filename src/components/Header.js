import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GeneralStyle } from "./GeneralStyles";

const Header = ({ action = () => {}, title = "" }) => {
  return (
    <View style={styles.canvas}>
      <View style={[GeneralStyle.container, styles.content]}>
        <TouchableOpacity onClick={action}>
          <Icon name="arrow-back" color="#FFF" size={20} />
        </TouchableOpacity>
        <View style={styles.headerWrap}>
          <Text style={GeneralStyle.titleScreen}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  canvas: {
    height: 40,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerWrap: {
    paddingLeft: 20,
  },
});
