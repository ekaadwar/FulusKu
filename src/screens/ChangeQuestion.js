import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import MainInput from "../components/MainInput";
import ModalOption from "../components/ModalOptions";
import PageIndicator from "../components/PageIndicator";
import SpaceHorizontal from "../components/SpaceHorizontal";
import { GeneralStyle } from "../components/GeneralStyles";
import { secretQuestion } from "../dummyData";

const ChangeQuestion = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <View style={GeneralStyle.parentTop}>
      <Header title="Change Email" action={() => navigation.goBack()} />
      <SpaceHorizontal space={20} />
      <View style={[GeneralStyle.parentTop, GeneralStyle.container]}>
        <TouchableOpacity onPress={() => setModalVisibility(!modalVisibility)}>
          <View style={styles.options}>
            <Text style={GeneralStyle.mainText}>
              Choose your secret question
            </Text>
            <Icon name="navigate-next" color="#FFF" size={20} />
          </View>
        </TouchableOpacity>
        <SpaceHorizontal space={10} />
        <MainInput placeholder="Your answer" />
        <MainInput placeholder="Re-Enter your answer" />
        <MainInput placeholder="PIN" />
      </View>
      <MainButton
        primary
        text="NEXT"
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
      <SpaceHorizontal space={20} />
      <PageIndicator amount={2} order={1} />
      <SpaceHorizontal space={20} />
      <ModalOption
        visibility={modalVisibility}
        setVisibility={() => setModalVisibility(!modalVisibility)}
        options={secretQuestion}
      />
    </View>
  );
};

export default ChangeQuestion;

const styles = StyleSheet.create({
  options: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
});
