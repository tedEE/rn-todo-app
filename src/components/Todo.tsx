import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {iTodo} from "../../App";
import {AppText} from "./ui/AppText";

interface iTodoProps {
  todo: iTodo
  onRemTodo(id : string): void,
  onOpen(id : string): void
}

export const Todo: React.FC<iTodoProps> = ({todo, onRemTodo, onOpen}) => {
  return (
    <TouchableOpacity
      onPress={()=>onOpen(todo.id)}
      onLongPress={()=>onRemTodo(todo.id)}>
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 5
	}
})
