import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GeneralStyle } from "./GeneralStyles";

const Button = ({ primary = false, text = "Text", onPress = () => {} }) => {
  if (primary) {
  }
  const styles = StyleSheet.create({
    buttonWrap: {
      alignItems: "center",
    },
    primaryParent: {
      backgroundColor: "#FFF",
      shadowColor: "#2A86AC",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
    },
    secondParent: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#FFF",
    },
    primaryText: {
      color: "#3CB8EB",
    },
    secondText: {
      color: "#FFF",
    },
  });
  return (
    <View style={styles.buttonWrap}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            GeneralStyle.button,
            primary ? styles.primaryParent : styles.secondParent,
          ]}
        >
          <Text style={primary ? styles.primaryText : styles.secondText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
