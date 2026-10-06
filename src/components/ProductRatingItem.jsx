import { useState } from "react";

const ProductRatingItem = ({ product, onAddRating, onAddReview }) => {
  const [review, setReview] = useState("");

  const totalRating = product.ratings.reduce((acc, rating) => {
    return acc + rating;
  }, 0);

  const averageRating =
    product.ratings.length > 0 ? totalRating / product.ratings.length : 0;

  return (
    <div>
      <div>
        {product.name}
        <br />
        {product.price}
        <br />
        Average Rating : {averageRating.toFixed(1)}
        {[1, 2, 3, 4, 5].map((item) => (
          <button onClick={() => onAddRating(product.id, item)}>
            {item <= averageRating ? "⭐" : "☆"}
          </button>
        ))}
        <div>
          <label>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              onClick={() => {
                if (review.trim() === "") return;

                onAddReview(product.id, review);
                setReview("");
              }}
            >
              Add Review
            </button>
          </label>
          <ul>
            {product.reviews.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductRatingItem;
