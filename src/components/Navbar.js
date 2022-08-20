import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { GeneralStyle } from "./GeneralStyles";

const Navbar = () => {
  return (
    <View style={styles.canvas}>
      <TouchableOpacity>
        <View style={styles.menu}>
          <IconSimple name="home" color="#3CB8EB" size={20} />
          <Text style={[GeneralStyle.contentText, styles.textMenu]}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <IconMaterial name="swap-horiz" color="#3CB8EB" size={20} />
          <Text style={[GeneralStyle.contentText, styles.textMenu]}>
            Transfer
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menu}>
          <IconMaterial name="more-horiz" color="#3CB8EB" size={20} />
          <Text style={[GeneralStyle.contentText, styles.textMenu]}>More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
const styles = StyleSheet.create({
  canvas: {
    backgroundColor: "#FFF",
    paddingHorizontal: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  menu: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: 40,
  },
  textMenu: {
    color: "#3CB8EB",
    fontSize: 12,
  },
});
