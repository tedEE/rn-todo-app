import React from 'react'
import {View, StyleSheet} from "react-native";
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';


export const Navbar : React.FC<{title : string , test : string}> = ({title, test}) =>{
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
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
		fontSize : 20,
  }
})
