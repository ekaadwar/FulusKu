import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GeneralStyle } from "../components/GeneralStyles";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Navbar from "../components/Navbar";

const Transfer = ({ navigation }) => {
  return (
    <View style={GeneralStyle.parentTop}>
      <View style={[GeneralStyle.parentTop, GeneralStyle.container]}>
        <View style={styles.titleWrap}>
          <Text style={GeneralStyle.titleScreen}>TRANSFER</Text>
        </View>
        <SpaceHorizontal space={20} />
        <TouchableOpacity style={styles.transferItem}>
          <Octicons name="person" color="#FFF" size={20} />
          <Text style={[GeneralStyle.mainText, styles.itemText]}>
            Transfer to Friend
          </Text>
          <Octicons name="chevron-right" color="#FFF" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.transferItem}>
          <Octicons name="credit-card" color="#FFF" size={20} />
          <Text style={[GeneralStyle.mainText, styles.itemText]}>
            Transfer to Bank Account
          </Text>
          <Octicons name="chevron-right" color="#FFF" size={20} />
        </TouchableOpacity>
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  titleWrap: {
    height: 40,
    justifyContent: "center",
  },
  transferItem: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  itemText: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
