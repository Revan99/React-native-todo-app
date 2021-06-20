import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import addTodoStyles from "../styles/addTodoStyles"
const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={addTodoStyles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title="add todo" color='coral' />
        </View>
    )
}

export default AddTodo
