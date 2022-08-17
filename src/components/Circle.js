import React from "react";
import { StyleSheet, View } from "react-native";

const Circle = ({ component = () => {}, size = 40, color = "#2A86AC" }) => {
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
    },
  });
  return <View style={styles.parent}>{component}</View>;
};

export default Circle;
