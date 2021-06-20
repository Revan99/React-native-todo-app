import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, FlatList, Keyboard, Alert, TouchableWithoutFeedback } from 'react-native';
import styles from './styles/styles';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])
  const pressHandler = (key) => {
    setTodos((p) => p.filter(item => item.key !== key))
  }
  const submitHandler = (text) => {
    text = text.trim()
    if (text.length > 3) {
      setTodos(p => { return [...p, { text: text, key: Math.random().toString() }] })
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 chars long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed')
        }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }} >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItems
                item={item}
                pressHandler={pressHandler}
              />}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}
