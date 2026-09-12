const ProductWishlistList = ({ products, wishlist, onAddToWishlist }) => {
  const inWishlist = (id) => {
    const exists = wishlist.some((item) => item.id === id);
    return exists;
  };

  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.category} <br />
            <button onClick={() => onAddToWishlist(item)}>
              {inWishlist(item.id) ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductWishlistList;
