const StockCart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemainingStock,
}) => {
  const subTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      <p>
        Total Different Products in Cart : {cart.length}
        Total Quantity of Products in Cart : {totalQuantity}
      </p>
      <div>
        {cart.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onDecreaseQuantity(item.id)}>[-]</button>
            {item.quantity}{" "}
            <button
              disabled={onRemainingStock(item.id) <= 0}
              onClick={() => onIncreaseQuantity(item.id)}
            >
              [+]
            </button>
            <br />
            {onRemainingStock(item.id) <= 0 ? "Maximum amount Reached" : ""}
            <button onClick={() => onRemoveFromCart(item.id)}>
              Remove
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
      <p>SubTotal : {subTotal}</p>
    </div>
  );
};

export default StockCart;
