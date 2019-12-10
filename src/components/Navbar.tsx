import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import { THEME } from '../theme';


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
    backgroundColor : THEME.MAIN_COLOR,
    justifyContent : 'flex-end',
    alignItems : 'center',
    paddingBottom : 10
  },
  text : {
    color : 'white',
    fontSize : 20
  }
})
