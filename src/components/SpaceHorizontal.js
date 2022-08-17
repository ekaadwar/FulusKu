import React from "react";
import { View, StyleSheet } from "react-native";

const SpaceHorizontal = ({ space = 5 }) => {
  const styles = StyleSheet.create({
    space: {
      marginBottom: space,
    },
  });
  return <View style={styles.space} />;
};

export default SpaceHorizontal;
