import ProductRatingItem from "./ProductRatingItem";

const ProductRatingList = ({ products, onAddRating, onAddReview }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            <ProductRatingItem
              product={item}
              onAddRating={onAddRating}
              onAddReview={onAddReview}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRatingList;
