import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoBody, setTodoBody] = useState("");

  const titleHandler = (e) => {
    setTodoTitle(e.target.value);
  };
  const bodyHandler = (e) => {
    setTodoBody(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todo = {
      title: todoTitle,
      body: todoBody,
    };
    props.add(todo);
    setTodoTitle("");
    setTodoBody("");
  };
  return (
    <form className="form_layer" onSubmit={submitHandler}>
      <div className="todo_form">
        <div className="form">
          <label>Title</label>
          <input
            type="text"
            className="input"
            onChange={titleHandler}
            value={todoTitle}
          />
        </div>
        <div className="form">
          <label>Body</label>
          <textarea
            className="input_body"
            onChange={bodyHandler}
            value={todoBody}
          ></textarea>
        </div>
        <button type="submit" className="subbtn">
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
