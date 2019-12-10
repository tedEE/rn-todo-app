import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Navbar} from './src/components/Navbar'
import {AddTodo} from "./src/components/AddTodo";
import {Todo} from "./src/components/Todo";
import {MainScreen} from './src/screens/MainScreen'
import {TodoScreen} from './src/screens/TodoScreen'

export interface iTodo{
  id : string,
  title : string
}

// let state = ['string']

const App: React.FC = () => {
	const [todos, setTodo] = useState<Array<iTodo>>([
		{id : '1', title : 'Выучить React Native'},
		{id : '2', title : 'Написать мобильное приложение'},
	])
	const [todoId, setTodoId] = useState('2')
  

  const addTodo = (title: string) => {
    setTodo((prev)=> [...prev, {
      id : Date.now().toString(),
      title
    }] )
	}

  const remuveTodo = (id : string) => {
		setTodo(prev => prev.filter(el => el.id !== id))
	}
	
	// Создание функционала по переключению экранов
	let content = (
    <MainScreen
			openTodo={setTodoId}
      todos={todos}
      addTodo={addTodo}
      remuveTodo={remuveTodo}
    ></MainScreen>
	);
	
	if(todoId){
		const selectedTodo = todos.find(todo => todo.id === todoId)
		content = <TodoScreen goBack={()=>setTodoId(null)} todo={selectedTodo}/>
	}

  return (
    <View >
      <Navbar title='Todo App' test='32'/>
      <View style={styles.container}>
				{content}
			</View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal : 30
  },

});
