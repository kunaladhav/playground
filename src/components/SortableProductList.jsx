import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 2000 },
  { id: 4, name: "Mouse", category: "Accessories", price: 1000 },
  { id: 5, name: "Monitor", category: "Electronics", price: 15000 },
  { id: 6, name: "Backpack", category: "Accessories", price: 2500 },
];

const SortableProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const categories = [...new Set(products.map((item) => item.category))];

  const filteredItems = products.filter((item) => {
    const matchedSeacrhes = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || item.category === selectedCategory;
    return matchedSeacrhes && matchedCategory;
  });

  const getSortedOption = () => {
    if (sortOption === "price-low") {
      return [...filteredItems].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      return [...filteredItems].sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-az") {
      return [...filteredItems].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-za") {
      return [...filteredItems].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return filteredItems;
    }
  };

  const sortedItems = getSortedOption();

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div>
          <label>
            <input
              type="radio"
              name="group-category"
              checked={selectedCategory === ""}
              onChange={() => setSelectedCategory("")}
            />
            All
          </label>
        </div>
        {categories.map((item) => (
          <div key={item}>
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
          <select
            name="sortOptions"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-low">Price Low-High</option>
            <option value="price-high">Price High-Low</option>
            <option value="name-az">Name A-Z</option>
            <option value="name-za">Name Z-A</option>
          </select>
        </div>
      </div>
      <div>
        {sortedItems.map((item) => (
          <div>
            {item.name} {item.category} {item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortableProductList;
