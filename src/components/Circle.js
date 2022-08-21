import React from "react";
import { StyleSheet, View } from "react-native";

const Circle = ({
  component = () => {},
  size = 40,
  color = "#2A86AC",
  border = 0,
  borderColor = "#FFF",
}) => {
  const styles = StyleSheet.create({
    parent: {
      backgroundColor: color,
      width: size,
      height: size,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 999,
      borderWidth: border,
      borderColor,
    },
  });
  return <View style={styles.parent}>{component}</View>;
};

export default Circle;
