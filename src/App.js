import { ExpenseContainer } from "./components/Expenses/ExpenseContainer";
import { expenses_data } from "./data/expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { useState } from "react";

export const App = () => {
  const [expenses, setExpenses] = useState(expenses_data);
  const [year, setYear] = useState(new Date().getFullYear());

  const onAddNewExpenseHandler = (enteredExpenseData) => {
    setYear(enteredExpenseData.date.getFullYear());
    setExpenses((old_expenses) => {
      return [enteredExpenseData, ...old_expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler} />
      <ExpenseContainer expenses={expenses} year={year} setYear={setYear} />
    </div>
  );
};
