import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { GeneralStyle } from "../components/GeneralStyles";
import { logoNoName } from "../assets";
import { secretQuestion } from "../dummyData";
import MainInput from "../components/MainInput";
import MainButton from "../components/MainButton";
import SpaceHorizontal from "../components/SpaceHorizontal";
import Header from "../components/Header";
import ModalOption from "../components/ModalOptions";

const RegisterPhone = ({ navigation }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={GeneralStyle.parentTop}>
      <Header action={() => navigation.goBack()} />
      <View style={GeneralStyle.container}>
        <Image source={logoNoName} />
        <SpaceHorizontal space={30} />

        <Text style={GeneralStyle.titleScreen}>
          In case you forgot your PIN
        </Text>
        <SpaceHorizontal space={30} />

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
        <SpaceHorizontal space={30} />

        <MainButton
          onPress={() => navigation.navigate("RegisterFinish")}
          primary
          text="IM READY"
        />
      </View>

      <ModalOption
        visibility={modalVisibility}
        setVisibility={() => setModalVisibility(!modalVisibility)}
        options={secretQuestion}
      />
    </View>
  );
};

export default RegisterPhone;

const styles = StyleSheet.create({
  options: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
  },
  modal: {},
});
