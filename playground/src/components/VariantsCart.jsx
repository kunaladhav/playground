const VariantsCart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const subTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      <p>Cart :</p>
      <p>Different Items : {cart.length}</p>
      <p>Total Quantity: {totalQuantity}</p>
      <div>
        {cart.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.variant} <br />
            <button onClick={() => onDecreaseQuantity(item.id, item.variant)}>
              [-]
            </button>
            {item.quantity}{" "}
            <button onClick={() => onIncreaseQuantity(item.id, item.variant)}>
              [+]
            </button>
            <br />
            <button onClick={() => onRemoveFromCart(item.id, item.variant)}>
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

export default VariantsCart;
