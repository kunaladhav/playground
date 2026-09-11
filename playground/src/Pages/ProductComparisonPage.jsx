import { useState } from "react";
import ProductComparisonList from "../components/ProductComparisonList";
import ComparisonList from "../components/ComparisonList";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 2000,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Mouse",
    price: 1000,
    category: "Accessories",
  },
];

const ProductComparisonPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (product) => {
    if (compareList.length < 3) {
      const exists = compareList.some((item) => item.id === product.id);

      if (!exists) {
        setCompareList([...compareList, product]);
      }
    }
  };

  const removeFromCompare = (id) => {
    setCompareList(
      compareList.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  return (
    <div>
      <div>
        <ProductComparisonList
          products={products}
          toAddToCompare={addToCompare}
        />
        <ComparisonList
          compareList={compareList}
          toRemoveFromCompare={removeFromCompare}
        />
      </div>
    </div>
  );
};

export default ProductComparisonPage;
