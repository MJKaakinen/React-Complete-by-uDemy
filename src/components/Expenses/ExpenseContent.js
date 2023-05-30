import { ExpenseItem } from "./ExpenseItem";

const compareYear = (expense, year) => {
  return expense.date.getFullYear() === year;
};
const isEmpty = (arr) => {
  return arr.length === 0;
};
export const ExpenseContent = (props) => {
  const filteredExpenses = props.expenses.filter((expense) =>
    compareYear(expense, props.year)
  );
  if (isEmpty(filteredExpenses)) {
    return <h2>No expenses found.</h2>;
  }
  return (
    <ul className="expenses-container">
      {filteredExpenses.map((ex) => (
        <ExpenseItem
          key={ex.id}
          date={ex.date}
          title={ex.title}
          amount={ex.amount}
          filter={props.year}
        />
      ))}
    </ul>
  );
};
