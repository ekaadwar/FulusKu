import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Button = ({ primary = false, secondary = false, text = "Text" }) => {
  if (primary) {
  }
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: "#FFF",
      shadowColor: "#2A86AC",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      height: 40,
      paddingHorizontal: 40,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "auto",
      borderRadius: 5,
    },
  });
  return (
    <View style={styles.parent}>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;
