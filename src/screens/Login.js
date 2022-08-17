import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { logoNoName } from "../assets";
import MainButton from "../components/MainButton";
import { GeneralStyle } from "../components/GeneralStyles";
import MainInput from "../components/MainInput";

const Login = () => {
  return (
    <View style={GeneralStyle.parentTop}>
      <View style={GeneralStyle.container}>
        <Image source={logoNoName} />
        <Text>Welcome to FULUSKU.</Text>
        <View style={styles.buttonWrap}>
          <MainButton primary text="CREATE ACCOUNT" />
        </View>

        <Text>OR</Text>
        <MainInput placeholder="Your Mobile Number" />
        <View>
          <MainInput placeholder="PIN" />
          <View>
            <Text>Forgot?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonWrap: {
    alignItems: "center",
  },
});
