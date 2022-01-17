import React, { useState } from "react";
import { Todo } from "../../Model/Todo";

type AddInputProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};

function AddInput({ todos, setTodos }: AddInputProps) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000000000 + 1),
        task: todo,
        complete: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button onClick={addTodo} disabled={todo == ""}>Add</button>
    </div>
  );
}

export default AddInput;
