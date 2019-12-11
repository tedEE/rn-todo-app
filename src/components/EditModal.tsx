import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { THEME } from "../theme";

export const EditModal = ({ visible, onCansal }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput style={styles.input}></TextInput>
        <View style={styles.buttons}>
          <Button title="Отменить" onPress={onCansal} color={THEME.DANGER_COLOR}></Button>
          <Button title="Сохранить" onPress={() => console.log(1)} ></Button>
        </View>
      </View>
    </Modal>
  ); 
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%"
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
