import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const delTodo = (toids) => {
    setTodos((todos) => todos.splice(toids, 1));
  };
  const addTodo = (todoitem) => {
    setTodos([...todos, todoitem]);
  };
  return (
    <div className="App">
      <TodoForm add={addTodo} />
      <TodoList todos={todos} del={delTodo} />
    </div>
  );
}

export default App;
