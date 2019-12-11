import React,{useState} from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";

import { iTodo } from "../../App";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen: React.FC<{ goBack;todo: iTodo, onRemove(id : string): void}> = ({
  goBack,
	todo,
	onRemove
}) => {
	const [modal, setModal] = useState(false)
  return (
    <View>
			<EditModal visible={modal} onCansal={()=>setModal(false)}></EditModal>
      <AppCard style={stylus.card}>
        <Text style={stylus.title}>{todo.title}</Text>
				<Button
					title='Ред.'
					onPress={()=>setModal(true)}
				></Button>
      </AppCard>
      <View style={stylus.button_wrapper}>
        <View style={stylus.button}>
          <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={stylus.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
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
	card : {
		marginBottom : 20,
		padding : 15
	},
  button: {
		width: "40%"
	},
	title : {
		fontSize : 20
	}
});
