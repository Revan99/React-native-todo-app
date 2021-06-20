import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import todoStyles from '../styles/todoStyles'
import { MaterialIcons } from '@expo/vector-icons'
const TodoItems = ({ item, pressHandler }) => {

    return (
        <TouchableOpacity >
            <View style={todoStyles.item}>
                <MaterialIcons name='delete' size={18} color='#333' onPress={() => { pressHandler(item.key) }} />
                <Text style={todoStyles.itemText} >{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TodoItems
