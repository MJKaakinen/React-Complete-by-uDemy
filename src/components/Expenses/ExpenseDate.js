import "./ExpenseDate.css";

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("fi-FI", { month: "long" });
  const day = props.date.toLocaleString("fi-FI", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
};
