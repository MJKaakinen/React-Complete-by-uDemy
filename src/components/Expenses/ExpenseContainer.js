import "./ExpenseContainer.css";
import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseContent } from "./ExpenseContent";
import { ExpensesFilter } from "./ExpensesFilter";

export const ExpenseContainer = (props) => {
  const expenses = props.expenses;

  const onChooseYearHandler = (chosenYear) => {
    props.setYear(chosenYear);
  };

  return (
    <Card className="expense-container-div">
      <ExpensesFilter
        selected={props.year}
        onChooseYear={onChooseYearHandler}
      />
      <ExpenseContent expenses={expenses} year={props.year} />
    </Card>
  );
};
