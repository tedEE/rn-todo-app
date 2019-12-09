import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from "react-native"
import {iTodo} from "../../App";


interface iProps {
  onSubmit(value : string): void
}

export const AddTodo: React.FC<iProps> = ({onSubmit}) => {

  const [value, setValue] = useState<string>('')

  function onInputHandler() {
    if (value.trim()){
      onSubmit(value)
      setValue('')
    }else {
      Alert.alert('Поле ввода не должно быть пустым')
    }


  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
                 onChangeText={text => setValue(text)}
                 value={value}
                 placeholder='Введте название дела'
      />
      <Button
        onPress={onInputHandler}
        title={'Добавить'}/>
    </View>
  )
}



const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom : 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  }
})
