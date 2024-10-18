import React from "react";

const AddItem = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  function inputHandler(e) {
    setInputText(e.target.value);
  }

  function submitHandler() {
    if (inputText === "")
      alert("Please enter a TODO");

    else {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, description: inputText, completed: false, createdDate: new Date().toDateString(), mode: "read" }
      ]);
      setInputText("");
    }

  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className='todo-form flex'>
      <div className="new-todo flex">
        <input
          type="text"
          className="todo-input"
          name="textInput"
          placeholder="Add a TODO"
          onChange={inputHandler}
          value={inputText}
        />
        <p onClick={submitHandler} className="btn">
          ➕
        </p>
      </div>
      <select name="todos" className="filter" onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default AddItem;
