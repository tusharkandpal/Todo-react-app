import React from "react";

const AddItem = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  function textHandler(e) {
    setInputText(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (inputText === "")
      alert("Please enter a TODO");

    else {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, desc: inputText, completed: false, createdDate: new Date() }
      ]);
      setInputText("");
    }

  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className='flex'>
      <div className="newTodo flex">
        <input
          type="text"
          className="todo-input"
          name="textInput"
          placeholder="Add a TODO"
          onChange={textHandler}
          value={inputText}
        />
        <p type="submit" onClick={submitHandler} className="btn">
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
