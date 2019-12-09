import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {iTodo} from "../../App";

interface iTodoProps {
  todo: iTodo
  onRemTodo(id : string): void
}

export const Todo: React.FC<iTodoProps> = ({todo, onRemTodo}) => {
  return (
    <TouchableOpacity
      onPress={()=>console.log('Press', todo.id)}
      onLongPress={()=>onRemTodo(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
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
