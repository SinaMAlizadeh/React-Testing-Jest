import { render, screen } from "@testing-library/react";
import Followers from "../Followers";

test("should render same text passeddd into title props",async () => {
  render(<Followers />);   
  const followerDivElement = await screen.findAllByTestId(/follower-item/i)
  expect(followerDivElement.length).toBe(5);
  //const headingTest = screen.getByText(/my header/i);
  //expect(headingTest).toBeInTheDocument();
});