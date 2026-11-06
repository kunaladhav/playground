import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "iPhone 16", price: 799 },
  { id: 2, name: "Samsung Galaxy S25", price: 899 },
  { id: 3, name: "Google Pixel 9", price: 699 },
  { id: 4, name: "OnePlus 13", price: 749 },
  { id: 5, name: "iPhone 16 Pro", price: 999 },
];

const MemoCalculations = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    console.log("filtering Products");

    return products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div>
      <div>
        <p>Counter - {counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>[+]</button>
      </div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredItems.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoCalculations;
