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

        <Text style={GeneralStyle.titleScreen}>Almost there...</Text>
        <SpaceHorizontal space={30} />

        <MainInput placeholder="Name" />
        <SpaceHorizontal space={10} />

        <MainInput placeholder="Email" />
        <SpaceHorizontal space={10} />

        <MainInput placeholder="PIN (6 Digits)" />
        <SpaceHorizontal space={10} />

        <MainInput placeholder="Re-Type PIN" />
        <SpaceHorizontal space={30} />

        <Text style={[GeneralStyle.mainText, styles.textCenter]}>
          By clicking this button you're agreeing to FULUSKU term & condition
        </Text>
        <SpaceHorizontal space={30} />

        <MainButton
          onPress={() => navigation.navigate("RegisterQuestion")}
          primary
          text="NEXT"
        />
        <SpaceHorizontal space={30} />
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
