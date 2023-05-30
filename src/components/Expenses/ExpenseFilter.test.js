import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { ExpensesFilter } from "./ExpensesFilter";
import { cleanup, fireEvent, getByDisplayValue } from "@testing-library/react";

global.IS_REACT_ACT_ENVIRONMENT = true;

afterEach(cleanup);

test("should select correct year", () => {
  const container = document.createElement("div");
  const year = new Date().getFullYear();
  act(() =>
    createRoot(container).render(
      <ExpensesFilter selected={year} onChooseYear={() => {}} />
    )
  );
  getByDisplayValue(container, year);
});

test("should change year", () => {
  const container = document.createElement("div");
  const year = new Date().getFullYear();
  let new_year = 2019;
  act(() =>
    createRoot(container).render(
      <ExpensesFilter selected={year} onChooseYear={() => {}} />
    )
  );
  fireEvent.select(getByDisplayValue(container, year), {
    target: { value: new_year },
  });
  getByDisplayValue(container, new_year);
});
