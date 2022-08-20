import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconIon from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";

import { GeneralStyle } from "../components/GeneralStyles";
import Circle from "../components/Circle";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <View style={GeneralStyle.parentTop}>
      <View style={GeneralStyle.parentTop}>
        <View style={styles.favTransaction}>
          <TouchableOpacity>
            <IconAnt name="hearto" color="#FFF" size={20} />
          </TouchableOpacity>
        </View>

        <View style={GeneralStyle.container}>
          <View style={styles.homeSection}>
            <SpaceHorizontal space={30} />
            <Circle
              color="#FFF"
              size={60}
              component={<IconAnt name="adduser" color="#3CB8EB" size={30} />}
            />
            <SpaceHorizontal space={15} />
            <Text style={[GeneralStyle.mainText, GeneralStyle.titleScreen]}>
              Eka Fajhari Adwar
            </Text>
            <SpaceHorizontal space={15} />
            <Text style={[GeneralStyle.mainText, GeneralStyle.contentText]}>
              +62 821 69150233
            </Text>
            <SpaceHorizontal space={15} />
          </View>

          <View style={styles.homeSection}>
            <SpaceHorizontal space={15} />
            <View style={styles.saldoWrap}>
              <Text style={[GeneralStyle.mainText, GeneralStyle.contentText]}>
                Rp
              </Text>
              <Text
                style={[
                  GeneralStyle.mainText,
                  GeneralStyle.contentText,
                  styles.saldo,
                ]}
              >
                40.000.000
              </Text>
            </View>
            <SpaceHorizontal space={20} />
            <MainButton primary text="TOP UP" />
            <SpaceHorizontal space={20} />
            <TouchableOpacity>
              <Text style={[GeneralStyle.mainText, styles.transactionHistory]}>
                Transaction History
              </Text>
            </TouchableOpacity>
            <SpaceHorizontal space={10} />
          </View>
        </View>
      </View>

      <Navbar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  favTransaction: {
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  homeSection: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  saldoWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  saldo: {
    fontSize: 20,
    marginLeft: 10,
  },
  transactionHistory: {
    textDecoration: "underline",
  },
});
