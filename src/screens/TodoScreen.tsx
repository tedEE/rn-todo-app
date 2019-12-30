import React,{useState} from "react";
import { StyleSheet, View, Button } from "react-native";

import { iTodo } from "../../App";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";

interface PropsTodoScreen{
	goBack: any,
	todo : iTodo,
	onRemove(id : string): void,
	onSave: any
}

export const TodoScreen: React.FC<PropsTodoScreen> = ({
  goBack,
	todo,
	onRemove,
	onSave
}) => {

	const saveHandler =(title)=>{
		onSave(todo.id, title)
		setModal(false)
	}
	const [modal, setModal] = useState(false)

  return (
    <View>
			<EditModal 
				onSave={saveHandler}
				value={todo.title}
				 visible={modal} 
				 onCansal={()=>setModal(false)}></EditModal>
      <AppCard style={stylus.card}>
        <AppTextBold style={stylus.title}>{todo.title}</AppTextBold>
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
