import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { iTodo } from "../../App";
import { THEME } from "../theme";

export const TodoScreen: React.FC<{ goBack; todo: iTodo }> = ({
  goBack,
  todo
}) => {
  return (
    <View>
      <Text>{todo.id}</Text>
      <Text>{todo.title}</Text>
      <View style={stylus.button_wrapper}>
        <View style={stylus.button}>
					<Button title="Назад" 
					onPress={goBack}
					color={THEME.GREY_COLOR}
					 />
        </View>
        <View style={stylus.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => console.log("To remove")}
          />
        </View>
      </View>
    </View>
  );
};

const stylus = StyleSheet.create({
  button_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  }
});
