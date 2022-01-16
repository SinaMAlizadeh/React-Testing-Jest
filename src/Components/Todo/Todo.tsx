import React, { useState } from "react";
import { Todo } from "../../Model/Todo";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";

function TodoComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default TodoComponent;
