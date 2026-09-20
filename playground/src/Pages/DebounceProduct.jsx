import { useEffect, useState } from "react";
import DebounceProductList from "../components/DebounceProductList";

const initialProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 2000 },
  { id: 4, name: "Mouse", category: "Accessories", price: 1000 },
  { id: 5, name: "Monitor", category: "Electronics", price: 15000 },
  { id: 6, name: "Webcam", category: "Electronics", price: 5000 },
  { id: 7, name: "Mouse Pad", category: "Accessories", price: 500 },
  { id: 8, name: "USB Hub", category: "Accessories", price: 1200 },
];

const DebounceProduct = () => {
  const products = initialProducts;
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const filteredItems = products.filter((item) => {
    return item.name.toLowerCase().includes(debounceTerm.toLowerCase());
  });

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <div>
        <DebounceProductList
          products={products}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          debounceTerm={debounceTerm}
          filteredItems={filteredItems}
          onHandleClear={handleClear}
        />
      </div>
    </div>
  );
};

export default DebounceProduct;
