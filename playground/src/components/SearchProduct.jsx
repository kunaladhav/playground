import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 2000 },
  { id: 4, name: "Mouse", category: "Accessories", price: 1000 },
  { id: 5, name: "Monitor", category: "Electronics", price: 15000 },
  { id: 6, name: "Backpack", category: "Accessories", price: 2500 },
];

const SearchProduct = () => {
  const [searchString, setSearchString] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = products.filter((item) => {
    return selectedCategory === ""
      ? item.name.toLowerCase().includes(searchString.toLowerCase())
      : item.name.toLowerCase().includes(searchString.toLowerCase()) &&
          item.category === selectedCategory;
  });

  const clearFilters = () => {
    setSearchString("");
    setSelectedCategory("");
  };

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        {categories.map((item) => (
          <div>
            <input
              type="checkBox"
              value={selectedCategory}
              onChange={() => setSelectedCategory(item)}
            />
            {item}
          </div>
        ))}
        <div>
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div>
              {item.name} {item.category} {item.price}
            </div>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
