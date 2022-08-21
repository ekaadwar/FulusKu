import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GeneralStyle } from "../components/GeneralStyles";
import Header from "../components/Header";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import PageIndicator from "../components/PageIndicator";

const ChangePin = ({ navigation }) => {
  return (
    <View style={GeneralStyle.parentTop}>
      <Header action={() => navigation.goBack()} />
      <SpaceHorizontal space={20} />
      <View style={[GeneralStyle.parentTop, GeneralStyle.container]}>
        <MainInput placeholder="Enter old PIN" />
        <MainInput placeholder="Enter new PIN" />
        <MainInput placeholder="Re-Enter new PIN" />
      </View>
      <MainButton
        primary
        text="NEXT"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "More",
              },
            ],
          })
        }
      />
      <SpaceHorizontal space={20} />
      <PageIndicator amount={2} order={1} />
      <SpaceHorizontal space={20} />
    </View>
  );
};

export default ChangePin;
