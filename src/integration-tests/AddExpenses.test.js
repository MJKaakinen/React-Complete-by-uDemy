import { App } from "../App";
import { fireEvent, screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("ExpenseDisplay", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(<App />);
  });

  it("should add new expense", async () => {
    const toggleButton = screen.getByText(/Add Expense/i);
    fireEvent.click(toggleButton);

    const titleInput = getTitleInput();
    const amountInput = getAmountInput();
    const dateInput = getDateInput();
    user.type(titleInput, "test-title");
    user.type(amountInput, "1");
    user.type(dateInput, "2023-01-01");

    clickSubmitButton();

    screen.getByText(/test-title/i);
  });

  const getTitleInput = () => {
    return screen.getByRole("textbox", { name: /new-expense-title/i });
  };
  const getAmountInput = () => {
    return screen.getByRole("spinbutton", { name: /new-expense-amount/i });
  };
  const getDateInput = () => {
    return screen.getByRole("date", { name: /new-expense-date/i });
  };

  const clickSubmitButton = () => {
    const submitButton = screen.getByText(/Add Expense/i);
    fireEvent.click(submitButton);
  };

  it.todo("Invent another test");
});
