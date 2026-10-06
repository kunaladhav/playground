import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";

const initialExpenses = [
  {
    id: 1,
    title: "Grocery",
    amount: 2500,
    category: "Food",
  },
  {
    id: 2,
    title: "Netflix",
    amount: 649,
    category: "Entertainment",
  },
  {
    id: 3,
    title: "Petrol",
    amount: 3000,
    category: "Transport",
  },
];

const ExpenseTracker = () => {
  const [expense, setExpense] = useState(initialExpenses);

  const addExpense = (title, amount, category) => {
    const new_expense = {
      id: Date.now(),
      title: title,
      amount: amount,
      category: category,
    };

    return setExpense([...expense, new_expense]);
  };

  const category = ["Food", "Transport", "Entertainment", "Shopping", "Other"];

  const deleteExpense = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div>
        <ExpenseForm onAddExpense={addExpense} categories={category} />
        <ExpenseItem
          expenses={expense}
          onDeleteExpense={deleteExpense}
          categories={category}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
