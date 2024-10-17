import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const toggleTodoHandler = () => {
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
        <p className="date-label">- {todo.createdDate.toDateString()}</p>
      </li>
      {todo.completed ? <p className="btn complete-btn" onClick={toggleTodoHandler}>
        ❌
      </p> : <p className="btn complete-btn" onClick={toggleTodoHandler}>
        ✔️
      </p>}
      <p className="btn trash-btn" onClick={delHandler}>
        🗑️
      </p>
    </div>
  );
};

export default TodoItem;
