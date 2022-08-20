import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GeneralStyle } from "../components/GeneralStyles";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Navbar from "../components/Navbar";
import ItemList from "../components/ItemList";
import Circle from "../components/Circle";

const Transfer = () => {
  return (
    <View style={styles.canvas}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[GeneralStyle.container, styles.paddingBottom]}
      >
        <View style={styles.titleWrap}>
          <Text style={GeneralStyle.titleScreen}>MORE</Text>
        </View>
        <SpaceHorizontal space={20} />
        <Text style={[GeneralStyle.mainText, styles.sectionLabel]}>
          Setting
        </Text>
        <ItemList
          icon={
            <MaterialCom
              name="clipboard-check-multiple-outline"
              color="#FFF"
              size={20}
            />
          }
          text="Upgrade Account"
        />
        <ItemList
          icon={
            <MaterialCom name="account-edit-outline" color="#FFF" size={20} />
          }
          text="Edit Profile"
        />
        <ItemList
          icon={
            <MaterialCom
              name="application-edit-outline"
              color="#FFF"
              size={20}
            />
          }
          text="Change PIN"
        />
        <ItemList
          icon={<MaterialCom name="email-outline" color="#FFF" size={20} />}
          text="Change Email"
        />
        <ItemList
          icon={<MaterialCom name="key-outline" color="#FFF" size={20} />}
          text="Change Security Question"
        />
        <SpaceHorizontal space={20} />

        <Text style={[GeneralStyle.mainText, styles.sectionLabel]}>Help</Text>
        <ItemList
          icon={
            <MaterialCom name="wallet-plus-outline" color="#FFF" size={20} />
          }
          text="How to Top Up"
        />
        <ItemList
          icon={<AntDesign name="customerservice" color="#FFF" size={20} />}
          text="Contact Us"
        />
        <ItemList
          icon={<MaterialCom name="book-outline" color="#FFF" size={20} />}
          text="Terms and Conditions"
        />
        <ItemList
          icon={
            <MaterialCom name="account-lock-outline" color="#FFF" size={20} />
          }
          text="Privacy and Policy"
        />
        <ItemList
          icon={<IonIcons name="log-out-outline" color="#FFF" size={20} />}
          text="Log Out"
        />

        <SpaceHorizontal space={50} />
        <Text style={[GeneralStyle.mainText, styles.textCenter]}>
          Don't miss any updates by following us bellow
        </Text>
        <SpaceHorizontal space={20} />
        <View style={styles.socialMediaWrap}>
          <TouchableOpacity style={styles.socialMedia}>
            <MaterialCom name="facebook" color="#FFF" size={36} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMedia}>
            <Circle
              size={36}
              color="#FFF"
              component={
                <MaterialCom name="instagram" color="#3CB8EB" size={28} />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMedia}>
            <Circle
              size={36}
              color="#FFF"
              component={
                <MaterialCom name="twitter" color="#3CB8EB" size={28} />
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMedia}>
            <Circle
              size={36}
              color="#FFF"
              component={<Fontisto name="line" color="#3CB8EB" size={20} />}
            />
          </TouchableOpacity>
        </View>
        <SpaceHorizontal space={20} />
        <Text style={[GeneralStyle.mainText, styles.textCenter]}>v1.0.0</Text>
        <SpaceHorizontal space={20} />
      </ScrollView>
      <View style={styles.navbarWrap}>
        <Navbar />
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: "#3CB8EB",
    height: "100vh",
  },
  titleWrap: {
    height: 40,
    justifyContent: "center",
  },
  sectionLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  paddingBottom: {
    paddingBottom: 60,
  },
  socialMediaWrap: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialMedia: {
    marginHorizontal: 5,
  },
  navbarWrap: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  textCenter: {
    textAlign: "center",
  },
});
