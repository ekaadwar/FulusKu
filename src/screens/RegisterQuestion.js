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

const RegisterPhone = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={[GeneralStyle.parentTop, GeneralStyle.headerPadding]}>
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

        <MainButton primary text="IM READY" />
      </View>

      {/* <Modal animationType="fade" transparent={true} visible={modalVisibility}>
        <View style={[styles.modal, GeneralStyle.parentTop]}>
          <TouchableOpacity>
            <Header />
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <View>
                <Text>Siapa nama gadis ibu kandung Anda?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      <ModalOption
        header={() => (
          <TouchableOpacity>
            <Header />
          </TouchableOpacity>
        )}
        modalVisibility={modalVisibility}
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
