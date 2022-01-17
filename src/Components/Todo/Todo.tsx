import React, { useState } from "react";
import { Todo } from "../../Model/Todo";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

function TodoComponent() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  return (
    <div>
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoComponent;
