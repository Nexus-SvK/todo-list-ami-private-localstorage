import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [showBody, setShowBody] = useState(false);
  const [delTodo, setDelTodo] = useState(false);

  // const bodyid = "body" + props.id;
  // const bodyHandler = document.querySelector(bodyid);

  const show = () => {
    setShowBody(!showBody);
  };
  const delTodoHandler = () => {
    setDelTodo(!delTodo);
    props.delete(props.id);
  };
  return (
    <div className="todo">
      <div className={showBody ? "todo_header opened" : "todo_header"}>
        <div className="head">
          <div className="check">
            <input
              id={"rb" + props.id}
              type="checkbox"
              name={"rb" + props.id}
              onClick={delTodoHandler}
            />
            <label for={"rb" + props.id} id={"radiobox" + props.id}>
              <svg height="40" width="40">
                <path
                  className="radio"
                  d={
                    delTodo
                      ? "M17.583 27.625 29.375 15.833 27.292 13.792 17.583 23.542 12.667 18.625 10.625 20.625ZM20 36.667Q16.5 36.667 13.458 35.375Q10.417 34.083 8.167 31.833Q5.917 29.583 4.625 26.542Q3.333 23.5 3.333 20Q3.333 16.5 4.625 13.458Q5.917 10.417 8.167 8.167Q10.417 5.917 13.458 4.625Q16.5 3.333 20 3.333Q23.5 3.333 26.542 4.625Q29.583 5.917 31.833 8.167Q34.083 10.417 35.375 13.458Q36.667 16.5 36.667 20Q36.667 23.5 35.375 26.542Q34.083 29.583 31.833 31.833Q29.583 34.083 26.542 35.375Q23.5 36.667 20 36.667ZM20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20ZM20 33.875Q25.875 33.875 29.875 29.875Q33.875 25.875 33.875 20Q33.875 14.125 29.875 10.125Q25.875 6.125 20 6.125Q14.125 6.125 10.125 10.125Q6.125 14.125 6.125 20Q6.125 25.875 10.125 29.875Q14.125 33.875 20 33.875Z"
                      : "M20 36.667Q16.542 36.667 13.521 35.354Q10.5 34.042 8.229 31.771Q5.958 29.5 4.646 26.479Q3.333 23.458 3.333 20Q3.333 16.542 4.646 13.5Q5.958 10.458 8.229 8.208Q10.5 5.958 13.521 4.646Q16.542 3.333 20 3.333Q23.458 3.333 26.5 4.646Q29.542 5.958 31.792 8.208Q34.042 10.458 35.354 13.5Q36.667 16.542 36.667 20Q36.667 23.458 35.354 26.479Q34.042 29.5 31.792 31.771Q29.542 34.042 26.5 35.354Q23.458 36.667 20 36.667ZM20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20ZM20 33.875Q25.792 33.875 29.833 29.812Q33.875 25.75 33.875 20Q33.875 14.208 29.833 10.167Q25.792 6.125 20 6.125Q14.25 6.125 10.188 10.167Q6.125 14.208 6.125 20Q6.125 25.75 10.188 29.812Q14.25 33.875 20 33.875Z"
                  }
                />
              </svg>
            </label>
          </div>
          <h2 className="title">{props.title}</h2>
        </div>
        <div class="check">
          <input
            id={"cb" + props.id}
            type="checkbox"
            name={"cb" + props.id}
            onClick={show}
          />
          <label
            for={"cb" + props.id}
            id={"checkbox" + props.id}
            className={showBody ? "reverse" : ""}
          >
            <svg height="48" width="48">
              <path
                class="arrow"
                d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"
              />
            </svg>
          </label>
        </div>
      </div>
      <div
        id={"body" + props.id}
        className={showBody ? "todo_body" : "todo_body hidden"}
      >
        <pre>{props.body}</pre>
      </div>
    </div>
  );
};
export default Todo;
