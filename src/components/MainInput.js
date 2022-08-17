import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MainInput = ({ numeric = false, placeholder = "Input your data" }) => {
  const styles = StyleSheet.create({
    input: {
      color: "#FFF",
      height: 40,
      justifyContent: "center",
      borderBottomWidth: 2,
      borderBottomColor: "#FFF",
    },
  });
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={numeric ? "numeric" : "default"}
    />
  );
};

export default MainInput;
