import { screen, render, fireEvent } from "@testing-library/react";
import { Todo } from "../../../Model/Todo";
import AddInput from "../AddInput";

const mockTodos: Array<Todo> = [
  {
    id: Math.floor(Math.random() * 1000000000 + 1),
    task: "sina",
    complete: false,
  },
];

const mockSetTodo = jest.fn();

test("should input work corectly", () => {
  render(<AddInput todos={mockTodos} setTodos={mockSetTodo} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type in to input", () => {
  render(<AddInput todos={mockTodos} setTodos={mockSetTodo} />);
  const inputElement = screen.getByPlaceholderText(
    /Add a new task here.../i
  ) as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: "Go Work" } });
  expect(inputElement.value).toBe("Go Work");
});

test("shuold have empoty input when add button is click", () => {
  render(<AddInput todos={mockTodos} setTodos={mockSetTodo} />);
  const inputElement = screen.getByPlaceholderText(
    /Add a new task here.../i
  ) as HTMLInputElement;
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  fireEvent.change(inputElement, { target: { value: "Go Work" } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe("");
});
