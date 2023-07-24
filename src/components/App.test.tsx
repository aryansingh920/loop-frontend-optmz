/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Mock the child components used in App (Sidebar, Header, ProductBox) to isolate the App component for testing.
jest.mock("./Sidebar/Sidebar", () => () => <div data-testid="mock-sidebar" />);
jest.mock("./Header", () => () => <div data-testid="mock-header" />);
jest.mock("./Products/ProductBox", () => () => (
  <div data-testid="mock-productbox" />
));

describe("App Component", () => {
  test("renders App component with child components", () => {
    render(<App />);
    const appElement = screen.getByTestId("app-component");
    const sidebarElement = screen.getByTestId("mock-sidebar");
    const headerElement = screen.getByTestId("mock-header");
    const productBoxElement = screen.getByTestId("mock-productbox");

    expect(appElement).toBeInTheDocument();
    expect(sidebarElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(productBoxElement).toBeInTheDocument();
  });

  test("triggers dropdownChange when Sidebar is interacted with", () => {
    const setDropdownChangeMock = jest.fn();
    const modDataMock = [];
    const currentPageMock = 1;
    render(<App />);

    const sidebarElement = screen.getByTestId("mock-sidebar");

    // Simulate the interaction with Sidebar to trigger dropdownChange.
    fireEvent.click(sidebarElement);

    expect(setDropdownChangeMock).toHaveBeenCalled();
  });

  // Add more test cases as needed to cover other interactions and functionalities of the App component.
});
