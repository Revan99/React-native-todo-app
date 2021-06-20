import React from 'react'
import { Text, View } from 'react-native'
import headerStyles from '../styles/headerStyles';
const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.title}>
                My Todos
            </Text>
        </View>
    )
}

export default Header