import React from "react";
import { Link } from "react-router-dom";

type todoFooter = {
  numberOfIncompleteTasks: number;
};

function TodoFooter({ numberOfIncompleteTasks }: todoFooter) {
  return (
    <div>
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

export default TodoFooter;
