import { useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 16", price: 799, category: "Electronics" },
  { id: 2, name: "Samsung Galaxy S25", price: 899, category: "Electronics" },
  { id: 3, name: "Google Pixel 9", price: 699, category: "Electronics" },
  { id: 4, name: "MacBook Air", price: 1099, category: "Electronics" },
  { id: 5, name: "Wireless Mouse", price: 29, category: "Accessories" },
  { id: 6, name: "Mechanical Keyboard", price: 89, category: "Accessories" },
];

const ProductsQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = ["Electronics", "Accessories"];

  const searchTerm = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";
  const sortOption = searchParams.get("sort") || "";

  const updateParam = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value) {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    setSearchParams(updatedParams);
  };

  const filteredItems = products.filter((item) => {
    const matchedSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory =
      selectedCategory === "" || selectedCategory === item.category;

    return matchedSearch && matchedCategory;
  });

  const getSortOptions = () => {
    if (sortOption === "price-low") {
      return [...filteredItems].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      return [...filteredItems].sort((a, b) => b.price - a.price);
    } else {
      return filteredItems;
    }
  };

  const sortedItems = getSortOptions();

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => updateParam("search", e.target.value)}
        />
      </div>
      <div>
        <select
          name="group-category"
          value={selectedCategory}
          onChange={(e) => updateParam("category", e.target.value)}
        >
          <option value="">All</option>
          {categories.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="group-sort"
          value={sortOption}
          onChange={(e) => updateParam("sort", e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-low">Price - Low to High</option>
          <option value="price-high">Price - High to Low</option>
        </select>
      </div>
      <div>
        {sortedItems.length === 0 ? (
          <div>No Products Found</div>
        ) : (
          sortedItems.map((item) => (
            <div>
              {item.name} <br />
              {item.price} <br />
              {item.category} <br />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsQuery;
