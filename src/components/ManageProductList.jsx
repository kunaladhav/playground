const ManageProductList = ({ products, onAddToCart, cart }) => {
  const inStock = products.filter((item) => item.stock > 5);
  const outStock = products.filter((item) => item.stock === 0);

  return (
    <div>
      <div>
        Total Products : {products.length} <br />
        Products In Stock : {inStock.length} <br />
        Products Out of Stock : {outStock.length} <br />
        Cart Items: {cart.length === 0 ? "No Items in Cart" : cart.length}{" "}
        <br />
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.category} <br />
            {item.stock === 0
              ? "OUT OF STOCK"
              : item.stock <= 5
                ? "LOW STOCK"
                : "IN STOCK"}{" "}
            <br />
            <button onClick={() => onAddToCart(item.id)}>
              {cart.includes(item.id) ? "Added" : "Add To Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProductList;
