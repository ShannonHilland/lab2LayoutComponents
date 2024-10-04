/**
 * Lab 2: Layout Components
 * @author Shannon Hilland
 * @date 04-10-2024
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;