import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Circle from "./Circle";

const PageIndicator = ({ amount = 1, order = 1 }) => {
  return (
    <View style={styles.canvas}>
      {[...Array(amount)].map((_i, idx) => (
        <View key={idx} style={styles.indicator}>
          <Circle
            size={15}
            color={order === idx + 1 ? "#FFF" : "#3CB8EB"}
            border={2}
          />
        </View>
      ))}
    </View>
  );
};

export default PageIndicator;

const styles = StyleSheet.create({
  canvas: {
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    marginHorizontal: 3,
  },
});
