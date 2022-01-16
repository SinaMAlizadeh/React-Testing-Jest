import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingTest = screen.getByText(/my header/i);
  expect(headingTest).toBeInTheDocument();
});

// test("should page has a heading tag", () => {
//   render(<Header title="My Header" />);
//   const headingTest = screen.getByRole("heading", { name: "My Header" });
//   expect(headingTest).toBeInTheDocument();
// });

// test("should the number of element 2", () => {
//   render(<Header title="My Header" />);
//   const headingTest = screen.getAllByRole("heading");
//   expect(headingTest.length).toBe(2);
// });
