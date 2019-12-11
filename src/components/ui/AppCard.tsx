import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const AppCard  = (props) =>{
return <View style={ {...styles.default, ...props.style} }>{props.children}</View>
}

const styles = StyleSheet.create({
	default : {
		padding : 20,
		// borderWidth : 1,
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-between",
		// свойство shadow работает только на ios
		shadowColor : '#000',
		shadowRadius : 2,
		shadowOpacity : 0.3,
		shadowOffset : {width:2, height:2},
		// для android фиксированное значение теней
		elevation : 8,
		backgroundColor : '#fff',
		borderRadius : 10
	}
})