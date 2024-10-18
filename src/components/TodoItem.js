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
          todo.completed ? <button className="btn incomplete-btn" onClick={toggleTodoHandler} title="Incomplete">
            🔄
          </button> :
            <>
              <button className="btn edit-btn" onClick={() => toggleModeHandler("edit")} title="Edit">✏️</button>
              <button className="btn complete-btn" onClick={toggleTodoHandler} title="Complete">
                ✔️
              </button>
            </>
        }
        <button className="btn trash-btn" onClick={deleteHandler} title="Delete">
          ❌
        </button>
      </> : <>
        <button className="btn update-btn" onClick={updateTodoHandler} title="Update">✔️</button>
        <button className="btn cancel-btn" onClick={() => toggleModeHandler("read")} title="Cancel">🔙</button>
      </>
      }

    </div >
  );
};

export default TodoItem;
