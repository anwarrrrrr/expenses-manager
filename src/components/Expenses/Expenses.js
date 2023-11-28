import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Chaart from "../Chart/Chaart";

function Expenses({ items }) {
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const expensesPerMonth = labels.map((label) => ({ label: label, value:0 }));

  for (const item of filteredExpenses) {
    const month = item.date.getMonth()
    expensesPerMonth[month].value += item.amount;
  
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <Chaart dataPoints={expensesPerMonth} />

      {filteredYear === "----" ? (
        items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={"$" + expense.amount}
            date={expense.date}
          />
        ))
      ) : filteredExpenses.length === 0 ? (
        <p> No expenses found ! </p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={"$" + expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
