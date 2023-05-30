import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm.js";
import { useState } from "react";

export const NewExpense = (props) => {
  const [buttonOn, setButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const addButtonHandler = () => {
    setButton(true);
  };

  const cancelAdd = () => {
    setButton(false);
  };

  return (
    <div className="new-expense">
      {buttonOn && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAdd}
        />
      )}
      {!buttonOn && (
        <div className="new-expense">
          <button onClick={addButtonHandler}>Add Expense</button>
        </div>
      )}
    </div>
  );
};
