import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { GeneralStyle } from "../components/GeneralStyles";
import { logoNoName } from "../assets";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";

const RegisterPhone = () => {
  return (
    <View style={[GeneralStyle.parentTop, GeneralStyle.headerPadding]}>
      <View style={GeneralStyle.container}>
        <Image source={logoNoName} />
        <SpaceHorizontal space={30} />

        <Text style={GeneralStyle.titleScreen}>
          Enter your code we just sent you vie SMS.
        </Text>
        <SpaceHorizontal space={30} />

        <MainInput placeholder="6 Digit Code" />
        <SpaceHorizontal space={30} />

        <MainButton primary text="NEXT" />
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
