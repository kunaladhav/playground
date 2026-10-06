const CheckoutProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProductList;
