import React from "react";
import IconAnt from "react-native-vector-icons/AntDesign";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Circle from "../components/Circle";
import Header from "../components/Header";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import { GeneralStyle } from "../components/GeneralStyles";

const EditProfile = ({ navigation }) => {
  return (
    <View style={GeneralStyle.parentTop}>
      <Header title="Edit Profile" action={() => navigation.goBack()} />
      <SpaceHorizontal space={20} />
      <View style={GeneralStyle.container}>
        <TouchableOpacity style={styles.alignSelfCenter}>
          <Circle
            size={100}
            color="#FFF"
            component={<IconAnt name="adduser" color="#3CB8EB" size={50} />}
          />
        </TouchableOpacity>
        <SpaceHorizontal space={20} />
        <Text style={[GeneralStyle.mainText, styles.alignSelfCenter]}>
          Change Photo
        </Text>
        <SpaceHorizontal space={20} />
        <MainInput placeholder="Name" />
        <SpaceHorizontal space={20} />
        <MainButton
          primary
          text="SAVE"
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
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  alignSelfCenter: {
    alignSelf: "center",
  },
});
