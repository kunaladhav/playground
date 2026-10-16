const UseReducerCart = ({
  cart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div>
      <div>
        <p>
          Cart:{" "}
          <button onClick={() => onClearCart({ type: "CLEAR_CART" })}>
            Clear
          </button>
        </p>{" "}
        {cart.map((item) => (
          <div>
            {item.name}
            <br />
            {item.price}
            <br />
            <button
              onClick={() =>
                onDecreaseQuantity({ type: "DECREASE_QTY", payload: item.id })
              }
            >
              [-]
            </button>
            {item.quantity}{" "}
            <button
              onClick={() =>
                onIncreaseQuantity({ type: "INCREASE_QTY", payload: item.id })
              }
            >
              [+]
            </button>
            <br />
            <button
              onClick={() =>
                onRemoveItem({ type: "REMOVE_ITEM", payload: item.id })
              }
            >
              Remove
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
      <div>Total Price: {totalPrice}</div>
    </div>
  );
};

export default UseReducerCart;
