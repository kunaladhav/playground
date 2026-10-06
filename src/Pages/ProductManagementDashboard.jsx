import { useState } from "react";
import ManageProductList from "../components/ManageProductList";
import SearchSortFilter from "../components/SearchSortFilter";

const initialProducts = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 12 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000, stock: 5 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 2000, stock: 0 },
  { id: 4, name: "Mouse", category: "Accessories", price: 1000, stock: 18 },
  { id: 5, name: "Monitor", category: "Electronics", price: 15000, stock: 3 },
  { id: 6, name: "Webcam", category: "Electronics", price: 5000, stock: 8 },
];

const ProductManagementDashboard = () => {
  const products = initialProducts;
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const categories = ["Electronics", "Accessories"];

  const addToCart = (id) => {
    const exists = cart.some((item) => item === id);

    if (!exists) {
      return setCart([...cart, id]);
    }
  };

  const filteredItem = products.filter((item) => {
    const matchedSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || selectedCategory === item.category;
    return matchedSearch && matchedCategory;
  });

  const getSortedOption = () => {
    if (sortOption === "price-low") {
      return [...filteredItem].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      return [...filteredItem].sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-az") {
      return [...filteredItem].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-za") {
      return [...filteredItem].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return filteredItem;
    }
  };

  const sortedItems = getSortedOption();

  return (
    <div>
      <div>
        <SearchSortFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <ManageProductList
          products={sortedItems}
          onAddToCart={addToCart}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default ProductManagementDashboard;
