import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import todoStyles from '../styles/todoStyles'
const TodoItems = ({ item, pressHandler }) => {

    return (
        <TouchableOpacity onPress={() => { pressHandler(item.key) }}>
            <Text style={todoStyles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoItems
