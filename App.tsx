import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { Todo } from "./src/components/Todo";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export interface iTodo {
  id: string;
  title: string;
}

// let state = ['string']

const App: React.FC = () => {
  const [todos, setTodo] = useState<Array<iTodo>>([
    { id: "1", title: "Выучить React Native" },
    { id: "2", title: "Написать приложение" }
  ]);
  const [todoId, setTodoId] = useState("2");

  const addTodo = (title: string) => {
    setTodo(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const remuveTodo = (id: string) => {
		setTodoId(null)
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены что хотите удалить "${todo.title}" ?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () => {
						setTodo(prev => prev.filter(todo => todo.id !== id))
					}
        }
      ],
      { cancelable: false }
    );
    setTodo(prev => prev.filter(el => el.id !== id));
  };

  // Создание функционала по переключению экранов
  let content = (
    <MainScreen
      openTodo={setTodoId}
      todos={todos}
      addTodo={addTodo}
      remuveTodo={remuveTodo}
    ></MainScreen>
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen onRemove={remuveTodo} goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }

  return (
    <View>
      <Navbar title="Todo App" test="32" />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30
  }
});
