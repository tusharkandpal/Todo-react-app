import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Components
import AddItem from "./components/AddItem";
import TodosList from "./components/TodosList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

    //Get from Local
    const getFromLocal = () => {
     if (localStorage.getItem('todos') === null)
     {
       localStorage.setItem('todos', JSON.stringify([]));
     }
     else
     {
       let localTodos = JSON.parse(localStorage.getItem('todos'));
       setTodos(localTodos);
     }
   }

   getFromLocal();
 }, []);

  // useEffect - filtering the todos
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    //Save to Local
    const saveToLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    saveToLocal();
    filterHandler();

  }, [todos, status]); // when these variable changes

  return (
    <div className="app">
      <header className='flex'>
        <i className="fas fa-clipboard-list fa-2x"></i>
        <h2> Todo App</h2>
      </header>
      <AddItem
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodosList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
