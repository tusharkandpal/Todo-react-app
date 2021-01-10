import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, setTodos, filteredTodos }) => {
  return (
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
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
