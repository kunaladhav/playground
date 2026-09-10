import { useState } from "react";
import InventorySearch from "../components/InventorySearch";
import InventoryFilter from "../components/InventoryFilter";
import InventoryList from "../components/InventoryList";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 60000,
    stock: 5,
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 3000,
    stock: 0,
  },
  {
    id: 3,
    name: "Keyboard",
    category: "Accessories",
    price: 2000,
    stock: 10,
  },
  {
    id: 4,
    name: "Mouse",
    category: "Accessories",
    price: 1000,
    stock: 2,
  },
];

const InventoryManager = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stockFilter, setStockFilter] = useState("");

  const categories = ["Electronics", "Accessories"];

  const filteredItems = products.filter((item) => {
    const matchedSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || selectedCategory === item.category;
    const matchedStockFilter =
      stockFilter === "" ||
      (stockFilter === "in-stock" && item.stock > 0) ||
      (stockFilter === "out-of-stock" && item.stock === 0);
    return matchedSearch && matchedCategory && matchedStockFilter;
  });

  const increaseStock = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            stock: item.stock + 1,
          };
        }
        return item;
      }),
    );
  };

  const decreaseStock = (id) => {
    setProducts(
      products.map((item) => {
        if (item.id === id && item.stock > 0) {
          return {
            ...item,
            stock: item.stock - 1,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <div>
        <InventorySearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <InventoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          stockFilter={stockFilter}
          setStockFilter={setStockFilter}
        />
        <InventoryList
          products={filteredItems}
          increaseStock={increaseStock}
          decreaseStock={decreaseStock}
        />
      </div>
    </div>
  );
};

export default InventoryManager;
