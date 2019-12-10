import React from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import {iTodo} from '../../App'


interface iMainScreenProps{
	addTodo (title : string) : void,
	todos : Array<iTodo>,
	remuveTodo (id : string) : void,
	openTodo (id : string) : void
}

export const MainScreen : React.FC<iMainScreenProps> = ({addTodo, todos, remuveTodo, openTodo}) => {
	return (
    <View>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemTodo={remuveTodo} onOpen={openTodo} />}
      />
    </View>
  );
}

const stylus = StyleSheet.create({})