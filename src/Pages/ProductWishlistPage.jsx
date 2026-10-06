import { useState } from "react";
import ProductWishlistSearch from "../components/ProductWishlistSearch";
import ProductWishlistFilter from "../components/ProductWishlistFilter";
import ProductWishlistList from "../components/ProductWishlistList";
import Wishlist from "../components/Wishlist";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 60000,
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    price: 3000,
  },
  {
    id: 3,
    name: "Keyboard",
    category: "Accessories",
    price: 2000,
  },
  {
    id: 4,
    name: "Mouse",
    category: "Accessories",
    price: 1000,
  },
  {
    id: 5,
    name: "Monitor",
    category: "Electronics",
    price: 15000,
  },
];

const ProductWishlistPage = () => {
  const products = initialProducts;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [wishlist, setWishlist] = useState([]);

  const categories = ["Electronics", "Accessories"];

  const filteredItem = products.filter((item) => {
    const matchedSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || selectedCategory === item.category;
    return matchedSearch && matchedCategory;
  });

  const addToWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div>
      <div>
        <ProductWishlistSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <ProductWishlistFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductWishlistList
          products={filteredItem}
          wishlist={wishlist}
          onAddToWishlist={addToWishlist}
        />
        <Wishlist data={wishlist} />
      </div>
    </div>
  );
};

export default ProductWishlistPage;
