import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { GeneralStyle } from "../components/GeneralStyles";
import { logoNoName } from "../assets";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Header from "../components/Header";

const RegisterPhone = ({ navigation }) => {
  return (
    <View style={GeneralStyle.parentTop}>
      <Header action={() => navigation.goBack()} />
      <View style={GeneralStyle.container}>
        <Image source={logoNoName} />
        <SpaceHorizontal space={30} />

        <Text style={GeneralStyle.titleScreen}>
          Enter your code we just sent you vie SMS.
        </Text>
        <SpaceHorizontal space={30} />

        <MainInput placeholder="6 Digit Code" />
        <SpaceHorizontal space={30} />

        <MainButton
          primary
          text="NEXT"
          onPress={() => navigation.navigate("RegisterAdvance")}
        />
        <SpaceHorizontal space={30} />

        <Text style={[GeneralStyle.mainText, styles.textCenter]}>
          Didn't receive the code
        </Text>
        <SpaceHorizontal space={30} />

        <MainButton text="RESEND" />
      </View>
    </View>
  );
};

export default RegisterPhone;

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
  },
});
