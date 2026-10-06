import { useState } from "react";
import ProductRatingList from "../components/ProductRatingList";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    ratings: [],
    reviews: [],
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    ratings: [],
    reviews: [],
  },
  {
    id: 3,
    name: "Keyboard",
    price: 2000,
    ratings: [],
    reviews: [],
  },
];

const ProductRatingPage = () => {
  const [product, setProduct] = useState(initialProducts);

  const addRating = (id, newRating) => {
    setProduct(
      product.map((item) => {
        if (item.id === id) {
          return { ...item, ratings: [...item.ratings, newRating] };
        }
        return item;
      }),
    );
  };

  const addReview = (id, newReview) => {
    setProduct(
      product.map((item) => {
        if (item.id === id) {
          return { ...item, reviews: [...item.reviews, newReview] };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <div>
        <ProductRatingList
          products={product}
          onAddRating={addRating}
          onAddReview={addReview}
        />
      </div>
    </div>
  );
};

export default ProductRatingPage;
