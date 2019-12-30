import React from 'react'
import {StyleSheet, View, FlatList, Image} from 'react-native'
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

	let content =       <FlatList
	keyExtractor={item => item.id}
	data={todos}
	renderItem={({ item }) => <Todo todo={item} onRemTodo={remuveTodo} onOpen={openTodo} />}
/>

	if(todos.length === 0){
		content = <View style={stylus.imageWrap}><Image style={stylus.image} source={require('../../assets/no-items.png')}></Image></View>
	}

	return (
    <View>
      <AddTodo onSubmit={addTodo} />
			{content}
    </View>
  );
}

const stylus = StyleSheet.create({
	imageWrap : {
		alignItems : 'center',
		justifyContent : 'center',
		padding : 10,
		height: 300
	},
	image : {
		width : '100%',
		height : '100%',
		resizeMode : "contain"
	}
})