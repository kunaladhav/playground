import { useState } from "react";

const ExpenseItem = ({ expenses, onDeleteExpense, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = expenses.filter((item) => {
    const matchedSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || item.category === selectedCategory;

    return matchedCategory && matchedSearch;
  });

  const totalExpense = expenses.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const higgestExpense = expenses.reduce((acc, item) => {
    return Math.max(acc, item.amount);
  }, 0);

  return (
    <div>
      <p>Expenses - {filteredItems.length}</p>
      <label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          name="group-category"
          checked={selectedCategory === ""}
          onChange={() => setSelectedCategory("")}
        />
        All
      </label>
      {categories.map((item) => (
        <div>
          <label>
            <input
              type="radio"
              name="group-category"
              value={item}
              checked={selectedCategory === item}
              onChange={() => setSelectedCategory(item)}
            />
            {item}
          </label>
        </div>
      ))}
      <div>
        {filteredItems.length === 0 ? (
          <div>No Expenses</div>
        ) : (
          filteredItems.map((item) => (
            <div>
              {item.title} {item.amount} {item.category}
              <button onClick={() => onDeleteExpense(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
      <p>Total Amount - {totalExpense}</p>
      <p>Highest Expense - {Math.max(higgestExpense)}</p>
    </div>
  );
};

export default ExpenseItem;
