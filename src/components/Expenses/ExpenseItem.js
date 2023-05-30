import "./ExpenseItem.css";
import "./ExpenseDate.js";
import { ExpenseDate } from "./ExpenseDate.js";
import { Card } from "../UI/Card.js";

export const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};
