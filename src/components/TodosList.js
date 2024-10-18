import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, setTodos, filteredTodos }) => {

  const completeTodos = filteredTodos.filter(todo => todo.completed);

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed);

  return (
    <ul className="todo-list flex flex-direction-column">
      {incompleteTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      {completeTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default TodosList;
