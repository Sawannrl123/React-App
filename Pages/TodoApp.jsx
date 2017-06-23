import React from 'react';
import TodoList from '../Components/Todo/TodoList.jsx';

var todos = JSON.parse(localStorage.getItem('todos')) || [];

class TodoApp extends React.Component {
   render() {
      return (
         <TodoList todos={todos} />
      )
   }
}

export default TodoApp;