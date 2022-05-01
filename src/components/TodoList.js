import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (props) => {
  const delTodoFunc = (todoid) => {
    props.del(todoid);
  };
  return (
    <div className="todo_list">
      {props.todos.map((todo, i) => (
        <Todo
          key={i}
          id={i}
          title={todo.title}
          body={todo.body}
          delete={delTodoFunc}
        />
      ))}
    </div>
  );
};
export default TodoList;
