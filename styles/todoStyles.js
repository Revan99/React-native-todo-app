import { StyleSheet } from "react-native";

const todoStyles = StyleSheet.create({
    item: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 16,
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    itemText: {
        marginLeft: 10,
    }
})
export default todoStyles