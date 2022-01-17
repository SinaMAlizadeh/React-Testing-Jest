import React, { useEffect } from 'react';
import { Todo } from '../../Model/Todo';
import TodoFooter from '../TodoFooter/TodoFooter';

type TodoListProps = {
    todos : Array<Todo>,
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos , setTodos} : TodoListProps) => {
    const updateTasks = (id : number) => {
       let updateTasks = todos.map((todo) => {
           if(todo.id === id){
               todo.complete = !todo.complete;
               return todo
           }
           else{
               return todo;
           }
       })
      setTodos(updateTasks);
    }

    const calculateNumberOfCompeleteTask = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.complete) count++
        })
        return count;
    }

    return (
        <div>
            {
                todos.map((todo , index) => {
                   return <div data-testid="task-container" key={index} onClick={() => updateTasks(todo.id)}>
                      {todo.task}
                    </div>
                })
            }

            <div>
                <TodoFooter numberOfIncompleteTasks={calculateNumberOfCompeleteTask()}></TodoFooter>
            </div>
        </div>
    );
};

export default TodoList;