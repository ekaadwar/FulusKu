import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { GeneralStyle } from "../components/GeneralStyles";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Circle from "../components/Circle";

const RegisterPhone = ({ navigation }) => {
  return (
    <View style={[GeneralStyle.parentTop, GeneralStyle.headerPadding]}>
      <View style={GeneralStyle.container}>
        <Circle
          component={<Icon name="checkmark" color="#3CB8EB" size={20} />}
          color="#FFF"
        />
        <SpaceHorizontal space={30} />

        <Text style={GeneralStyle.titleScreen}>Yay, you're on FULUSKU</Text>
        <SpaceHorizontal space={30} />

        <Text style={GeneralStyle.mainText}>
          Congratulations, you know have access to the safest and simplest
          mobile wallet.
        </Text>
        <SpaceHorizontal space={30} />

        <MainButton primary text="GET STARTED" />
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
