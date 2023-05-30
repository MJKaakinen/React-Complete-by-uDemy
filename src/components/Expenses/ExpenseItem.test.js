import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { ExpenseItem } from "./ExpenseItem";
import { getByText } from "@testing-library/react";

global.IS_REACT_ACT_ENVIRONMENT = true;

test("renders the correct title", () => {
  const container = document.createElement("div");
  const test_title = "test_item";
  act(() =>
    createRoot(container).render(
      <ExpenseItem date={new Date()} title={test_title} amount={1} />
    )
  );
  getByText(container, test_title);
});

test("renders the correct amount", () => {
  const container = document.createElement("div");
  const test_amount = 1;
  act(() =>
    createRoot(container).render(
      <ExpenseItem date={new Date()} title={"test_item"} amount={test_amount} />
    )
  );
  getByText(container, test_amount);
});
