import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { logo } from "../assets/index";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("RegisterPhone");
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3CB8EB",
    alignItems: "center",
    justifyContent: "center",
  },
});
