import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
  { id: 5, name: "Monitor", price: 15000 },
  { id: 6, name: "Backpack", price: 2500 },
];

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const filteredTerms = products.filter((item) => {
    return item.name.toLowerCase().includes(debounceTerm.toLowerCase());
  });

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button onClick={() => handleClear()}>Clear</button>
      <div>
        {debounceTerm === "" ? (
          products.map((item) => (
            <div>
              {item.name} {item.price}
            </div>
          ))
        ) : filteredTerms.length > 0 ? (
          filteredTerms.map((item) => (
            <div>
              {item.name} {item.price}
            </div>
          ))
        ) : (
          <div>No Products found</div>
        )}
      </div>
    </div>
  );
};

export default Debounce;
