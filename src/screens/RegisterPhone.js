import React from "react";
import { Image, Text, View } from "react-native";

import { GeneralStyle } from "../components/GeneralStyles";
import { logoNoName } from "../assets";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";

const RegisterPhone = () => {
  return (
    <View style={[GeneralStyle.parentTop, GeneralStyle.headerPadding]}>
      <View style={GeneralStyle.container}>
        <Image source={logoNoName} />
        <Text>Register your mobile number</Text>
        <Text>This will be use as your FULUSKU account number</Text>
        <MainInput placeholder="Enter Here" />
        <Text>We will send verification code to this number</Text>
        <MainButton primary text="NEXT" />
      </View>
    </View>
  );
};

export default RegisterPhone;
