import { render, screen ,fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
   return(     
    <BrowserRouter>
       <Todo  />
    </BrowserRouter>     
   )
}

const addTask = (tasks : Array<string>) => {
   const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
   const buttonElement = screen.getByRole('button' , {name : /Add/i})

   tasks.forEach(element => {
      fireEvent.change(inputElement , {target : {value : element}});
      fireEvent.click(buttonElement);
   });
}

test("should render task single", () => {
    render(<MockTodo/>);
    addTask(["Go Shop"]);
    const divElement = screen.getByText(/Go Shop/i) ;
    expect(divElement).toBeInTheDocument();
  });
  
test("should render all task single", () => {
   render(<MockTodo/>);
   addTask(["Go Shop" , "cat" , "wash hand"]);
   const divElement = screen.getAllByTestId("task-container") ;
   expect(divElement.length).toBe(3);
 });

