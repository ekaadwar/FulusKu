import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-back" color="#FFF" size={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    height: 40,
  },
});
