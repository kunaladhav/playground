const LocalCart2 = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const subTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalProducts = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      <div>
        <p>Cart :</p>
        <p>Different Item : {cart.length}</p>
        <p>Total Quantity : {totalProducts}</p>
        {cart.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.variant} <br />
            <button onClick={() => onDecreaseQuantity(item.id, item.variant)}>
              [-]
            </button>{" "}
            {item.quantity}{" "}
            <button onClick={() => onIncreaseQuantity(item.id, item.variant)}>
              [+]
            </button>{" "}
            <br />
            <button onClick={() => onRemoveFromCart(item.id, item.variant)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <p>Subtotal : {subTotal}</p>
    </div>
  );
};

export default LocalCart2;
