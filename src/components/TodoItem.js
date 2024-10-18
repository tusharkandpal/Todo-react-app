import React, { useState } from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [todoDesc, setTodoDesc] = useState(todo.description)

  const toggleTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) return { ...item, completed: !item.completed };
        else return item;
      })
    );
  };

  const toggleModeHandler = (mode) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) return { ...item, mode };
        else return item;
      })
    );
  };

  const updateTodoHandler = () => {
    console.log("Inside updateTodoHandler")

    if (todoDesc === "")
      alert("TODO can't be empty");
    else {
      setTodos(
        todos.map((item) => {
          if (todo.id === item.id) return { ...item, description: todoDesc, mode: "read", createdDate: new Date().toDateString() };
          else return item;
        })
      );
    }
  };

  const deleteHandler = () => {
    setTodos(todos.filter((item) => todo.id !== item.id));
  };

  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#d4d4d4"
  };

  return (
    <div className="todo">
      <div className="todo-details">
        {todo.mode === "read" ? <li className="todo-item" style={todo.completed ? completedStyle : null}>
          {todo.description}
        </li> : todo.mode === "edit" && <input className="todo-input" value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)}
          type="text"
          name="updateTodo" />}
        <p className="date-label">- {todo.createdDate}</p>
      </div>
      {todo.mode === "read" ? <>
        {
          todo.completed ? <p className="btn incomplete-btn" onClick={toggleTodoHandler} title="Incomplete">
            ❌
          </p> :
            <>
              <p className="btn edit-btn" onClick={() => toggleModeHandler("edit")} title="Edit">✏️</p>
              <p className="btn complete-btn" onClick={toggleTodoHandler} title="Complete">
                ✔️
              </p>
            </>
        }
        < p className="btn trash-btn" onClick={deleteHandler} title="Delete">
          🗑️
        </p>
      </> : <>
        <p className="btn complete-btn" onClick={updateTodoHandler} title="Update">✔️</p>
        <p className="btn complete-btn" onClick={() => toggleModeHandler("read")} title="Cancel">❌</p>
      </>
      }

    </div >
  );
};

export default TodoItem;
