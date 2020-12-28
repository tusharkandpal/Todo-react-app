import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) return { ...item, completed: !item.completed };
        else return item;
      })
    );
  };

  const delHandler = () => {
    setTodos(todos.filter((item) => todo.id !== item.id));
  };

  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#d4d4d4"
  };

  return (
    <div className="todo">
      <li className="todo-item" style={todo.completed ? completedStyle : null}>
        {todo.desc}
      </li>
      <button className="complete-btn" onClick={completeHandler} style={todo.completed ? completedStyle : null}>
        <i className="fas fa-check fa-2x"></i>
      </button>
      <button className="trash-btn" onClick={delHandler}>
        <i className="fas fa-trash fa-2x"></i>
      </button>
    </div>
  );
};

export default TodoItem;
