import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";

import { GeneralStyle } from "../components/GeneralStyles";
import Circle from "../components/Circle";

const Intro = ({ navigation }) => {
  return (
    <Swiper
      showsButtons={true}
      activeDotColor={"#FFF"}
      loop={false}
      nextButton={
        <Circle
          component={<Icon name="arrow-forward" color="#FFF" size={20} />}
        />
      }
      prevButton={() => {}}
      buttonWrapperStyle={{
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <View style={GeneralStyle.parent}>
        <View style={styles.textWrap}>
          <Text style={[styles.generalText, styles.secondText]}>
            Hello Friend Ready to be
          </Text>
          <Text style={[styles.generalText, styles.mainText]}>
            FUNancially Beter?
          </Text>
        </View>
      </View>

      <View style={GeneralStyle.parent}>
        <View style={styles.textWrap}>
          <Text style={[styles.generalText, styles.secondText]}>
            Hello Friend Ready to be 2
          </Text>
          <Text style={[styles.generalText, styles.mainText]}>
            FUNancially Beter?
          </Text>
        </View>
      </View>

      <View style={GeneralStyle.parent}>
        <View style={styles.textWrap}>
          <Text style={[styles.generalText, styles.secondText]}>
            Hello Friend Ready to be 3
          </Text>
          <Text style={[styles.generalText, styles.mainText]}>
            FUNancially Beter?
          </Text>
        </View>
      </View>

      <View style={GeneralStyle.parent}>
        <View style={styles.textWrap}>
          <Text style={[styles.generalText, styles.secondText]}>
            Hello Friend Ready to be 4
          </Text>
          <Text style={[styles.generalText, styles.mainText]}>
            FUNancially Beter?
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace("RegisterPhone")}
          style={styles.nextScreenButton}
        >
          <Circle
            component={<Icon name="checkmark" color="#FFF" size={20} />}
          />
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default Intro;

const styles = StyleSheet.create({
  controlButton: {
    backgroundColor: "#2A86AC",
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  generalText: {
    color: "#FFF",
    textAlign: "left",
  },
  textWrap: {
    width: "100%",
    maxWidth: 250,
  },
  mainText: {
    fontSize: 28,
  },
  secondText: {
    fontSize: 12,
  },
  nextScreenButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
