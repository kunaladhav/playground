import { useState } from "react";

const ExpenseForm = ({ onAddExpense, categories }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Other");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense(title, amount, category);
    setTitle("");
    setAmount(0);
    setCategory("Other");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* <input type="text" value={} onChange={() => }/> */}
        <select
          name="group-category"
          value={category}
          onChange={handleCategory}
        >
          {categories.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
