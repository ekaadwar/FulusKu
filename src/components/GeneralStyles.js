import { StyleSheet } from "react-native";

export const GeneralStyle = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#3CB8EB",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#FFF",
  },
  parentTop: {
    flex: 1,
    backgroundColor: "#3CB8EB",
  },
  headerPadding: {
    paddingTop: 60,
  },
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    borderRadius: 5,
  },
  titleScreen: {
    color: "#FFF",
    fontSize: 20,
  },
});
