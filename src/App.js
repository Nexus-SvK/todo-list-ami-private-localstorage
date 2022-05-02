import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import React, { useState } from "react";
import { useStateWithLocalStorage } from "./hooks/useStateWithLocalStorage";

function App() {
  const [todos, setTodos] = useStateWithLocalStorage("MyTodoList", []);
  const delTodo = (toids) => {
    const updated = todos.slice();
    updated.splice(toids, 1);
    setTodos(updated);
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
