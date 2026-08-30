const ProductListRating = ({
  productList,
  toUpdateRating,
  toAddToFavourites,
}) => {
  return (
    <div>
      <div>
        {productList.map((item) => (
          <div>
            {item.name} {item.price}
            {[1, 2, 3, 4, 5].map((startNumber) => (
              <button
                key={startNumber}
                onClick={() => toUpdateRating(item.id, startNumber)}
              >
                {startNumber <= item.rating ? "⭐" : "☆"}
              </button>
            ))}
            {
              <button onClick={() => toAddToFavourites(item)}>
                Add To Favourites
              </button>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListRating;
