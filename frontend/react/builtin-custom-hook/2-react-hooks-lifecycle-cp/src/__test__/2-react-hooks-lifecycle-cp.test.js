import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RandomQuote } from "../App";
import React from "react";

describe("Render Quote", () => {
  it("should render the Get another quote Button", async () => {
    render(<RandomQuote />);
    const button = screen.getByText("Get another quote");
    expect(button).toBeInTheDocument();
  });

  it("should render the title", () => {
    render(<RandomQuote />);
    const brand = screen.getByText("Random Quote");
    expect(brand).toBeInTheDocument();
  });

  it("shows Loading and data quote", async () => {
    render(<RandomQuote />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByTestId("quote")).toBeInTheDocument();
    expect(screen.getByTestId("quote")).not.toBe(null);
  });
});
