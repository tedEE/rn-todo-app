import React from 'react'
import {View, Text, StyleSheet} from "react-native";

export const Navbar : React.FC<{title : string , test : string}> = ({title, test}) =>{
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar : {
    height : 70,
    backgroundColor : '#3949ab',
    justifyContent : 'flex-end',
    alignItems : 'center',
    paddingBottom : 10
  },
  text : {
    color : 'white',
    fontSize : 20
  }
})
