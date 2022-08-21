import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GeneralStyle } from "../components/GeneralStyles";
import { panding, completed } from "../assets";
import Header from "../components/Header";
import SpaceHorizontal from "../components/SpaceHorizontal";

const TransactionHistory = ({ navigation }) => {
  const [pendingTrans, setPendingTrans] = useState(true);
  return (
    <View style={GeneralStyle.parentTop}>
      <Header action={() => navigation.goBack()} title="Balance Activity" />
      <View style={styles.historyMenuWrap}>
        <TouchableOpacity
          style={[
            styles.historyMenu,
            pendingTrans ? styles.activeMenu : styles.inactiveMenu,
          ]}
          onPress={() => setPendingTrans(true)}
        >
          <Text
            style={
              pendingTrans ? styles.activeTextMenu : styles.inactiveTextMenu
            }
          >
            PendingTrans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.historyMenu,
            pendingTrans ? styles.inactiveMenu : styles.activeMenu,
          ]}
          onPress={() => setPendingTrans(false)}
        >
          <Text
            style={
              pendingTrans ? styles.inactiveTextMenu : styles.activeTextMenu
            }
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historyContent}>
        {pendingTrans ? (
          <View style={styles.imageWrap}>
            <Image source={panding} style={styles.image} />
            <SpaceHorizontal space={20} />
            <Text>You have no pending transactions</Text>
          </View>
        ) : (
          <View style={styles.imageWrap}>
            <Image source={completed} style={styles.image} />
            <SpaceHorizontal space={20} />
            <Text style={styles.trasactionTextBold}>No Transaction Yet</Text>
            <SpaceHorizontal space={20} />
            <Text style={styles.trasactionText}>
              Any transaction paid with your balance will be shown here.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  historyMenuWrap: {
    height: 40,
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  historyMenu: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  activeMenu: {
    borderBottomWidth: 2,
    borderBottomColor: "#024175",
  },
  inactiveMenu: {
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  historyContent: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  activeTextMenu: {
    color: "#024175",
  },
  inactiveTextMenu: {
    color: "#3CB8EB",
  },
  imageWrap: {
    backgroundColor: "#F6F6F6",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    maxWidth: 200,
  },
  trasactionTextBold: {
    textAlign: "center",
    fontWeight: "bold",
  },

  trasactionText: {
    textAlign: "center",
  },
});
