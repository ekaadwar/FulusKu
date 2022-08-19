import React from "react";
import { Image, Text, View } from "react-native";

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
          Register your mobile number
        </Text>
        <SpaceHorizontal space={10} />
        <Text style={GeneralStyle.mainText}>
          This will be use as your FULUSKU account number
        </Text>
        <SpaceHorizontal space={30} />
        <MainInput placeholder="Enter Here" />
        <SpaceHorizontal space={30} />
        <Text style={GeneralStyle.mainText}>
          We will send verification code to this number
        </Text>
        <SpaceHorizontal space={30} />
        <MainButton primary text="NEXT" />
      </View>
    </View>
  );
};

export default RegisterPhone;
