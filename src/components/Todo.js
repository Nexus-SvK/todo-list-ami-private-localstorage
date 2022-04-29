import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [showBody, setShowBody] = useState(false);

  const show = () => {
    setShowBody(!showBody);
  };

  const checkBoxHandler = (e) => {
    console.log(e.target.checked);
  };
  return (
    <div className="todo">
      <div className={showBody ? "todo_header opened" : "todo_header"}>
        <div className="head">
          <input className="check" type="checkbox" onClick={checkBoxHandler} />
          <h2 className="title">{props.title}</h2>
        </div>
        <div class="check">
          <input id="cb" type="checkbox" name="cb" onClick={show} />
          <label for="cb" id="checkbox" className={showBody ? "reverse" : ""}>
            <svg height="48" width="48">
              <path
                class="arrow"
                d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className={showBody ? "todo_body" : "todo_body hidden"}>
        {}
        <pre>{props.body}</pre>
      </div>
    </div>
  );
};
export default Todo;
