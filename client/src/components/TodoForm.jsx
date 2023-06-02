import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="input-container">
        <input
          placeholder="Enter new task..."
          className="input"
          onChange={onInputChange}
          value={text}
        />
        <button type="submit" className="plus-button">
          <span>➕</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
