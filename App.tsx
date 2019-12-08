import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Navbar} from './src/Navbar'
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export interface iTodo{
  id : string,
  title : string
}

// let state = ['string']

const App: React.FC = () => {
  const [todos, setTodo] = useState([])

  const addTodo = (title) => {
    setTodo((prev)=> [...prev, {
      id : Date.now().toString(),
      title
    }] )
  }

  const remuveTodo = (id) => {
    setTodo(prev => prev.filter(el => el.id !== id))
  }

  return (
    <View >
      <Navbar title='Todo App' test='32'/>
      <View style={styles.container}>
        <AddTodo key={Date.now()} onSubmit={addTodo} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item})=>(
          <Todo todo={item} onRemTodo={remuveTodo}/>
        )}
      />
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
