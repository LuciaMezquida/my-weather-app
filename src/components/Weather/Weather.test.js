import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

describe("<Weather />", () => {
  render(<Weather />);
  const card = screen.findByRole("listbox");
  it("Should contain a Card component", () => {
    expect(card).toBeInTheDocument();
  });
});
