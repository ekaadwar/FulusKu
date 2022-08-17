import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

import { logo } from "../assets/index";
import { GeneralStyle } from "../components/GeneralStyles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Intro");
    }, 3000);
  });

  return (
    <View style={GeneralStyle.parent}>
      <Image source={logo} />
    </View>
  );
};

export default SplashScreen;
