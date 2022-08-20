import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GeneralStyle } from "../components/GeneralStyles";
import Header from "../components/Header";

const TransactionHistory = () => {
  return (
    <View style={GeneralStyle.parentTop}>
      <Header title="Balance Activity" />
      <View style={styles.historyMenuWrap}>
        <TouchableOpacity style={styles.historyMenu}>
          <Text style={styles.activeTextMenu}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyMenu}>
          <Text style={styles.activeTextMenu}>Pending</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historyContent}></View>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  historyMenuWrap: {
    height: 40,
    flexDirection: "row",
  },
  historyMenu: {
    justifyContent: "center",
    alignItems: "center",
  },
  historyContent: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  activeTextMenu: {
    color: "#2A86AC",
  },
  inactiveTextMenu: {
    color: "#3CB8EB",
  },
});
