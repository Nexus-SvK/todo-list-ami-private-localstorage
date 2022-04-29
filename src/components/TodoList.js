import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo_list">
      {props.todos.map((todo) => (
        <Todo title={todo.title} body={todo.body} />
      ))}
    </div>
  );
};
export default TodoList;
