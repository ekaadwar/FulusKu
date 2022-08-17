import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { logoNoName } from "../assets";
import MainButton from "../components/MainButton";
import { GeneralStyle } from "../components/GeneralStyles";
import MainInput from "../components/MainInput";
import SpaceHorizontal from "../components/SpaceHorizontal";

const Login = () => {
  return (
    <View style={GeneralStyle.parentTop}>
      <View style={GeneralStyle.container}>
        <SpaceHorizontal space={40} />
        <Image source={logoNoName} />
        <SpaceHorizontal space={16} />

        <Text style={GeneralStyle.mainText}>Welcome to FULUSKU.</Text>
        <SpaceHorizontal space={40} />

        <MainButton primary text="CREATE ACCOUNT" />
        <SpaceHorizontal space={16} />

        <Text style={[GeneralStyle.mainText, styles.or]}>OR</Text>
        <SpaceHorizontal space={40} />

        <MainInput placeholder="Your Mobile Number" />
        <SpaceHorizontal space={16} />

        <View>
          <MainInput numeric placeholder="PIN" />
          <View style={styles.forgotWrap}>
            <TouchableOpacity>
              <Text style={GeneralStyle.mainText}>Forgot?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SpaceHorizontal space={40} />

        <MainButton text="SIGN IN" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotWrap: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  or: {
    textAlign: "center",
  },
});
