import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { ExpenseDate } from "./ExpenseDate";

global.IS_REACT_ACT_ENVIRONMENT = true;

test("renders correct year", () => {
  const container = document.createElement("div");
  act(() => {
    createRoot(container).render(<ExpenseDate date={new Date()} />);
  });
  const year = container.querySelector(".expense-date-year").innerHTML;
  expect(year).toBe(new Date().getFullYear().toString());
});

test("renders correct month", () => {
  const container = document.createElement("div");
  act(() => {
    createRoot(container).render(<ExpenseDate date={new Date()} />);
  });
  const month = container.querySelector(".expense-date-month").innerHTML;
  expect(month).toBe(new Date().toLocaleString("fi-FI", { month: "long" }));
});

test("renders correct day", () => {
  const container = document.createElement("div");
  act(() => {
    createRoot(container).render(<ExpenseDate date={new Date()} />);
  });
  const day = container.querySelector(".expense-date-day").innerHTML;
  expect(day).toBe(new Date().toLocaleString("fi-FI", { day: "2-digit" }));
});
