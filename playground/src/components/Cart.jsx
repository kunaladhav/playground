const Cart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      <div>
        <p>Cart - {totalQuantity}</p>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} {item.price}{" "}
            <button onClick={() => onIncreaseQuantity(item.id)}>+</button>{" "}
            {item.quantity}{" "}
            <button onClick={() => onDecreaseQuantity(item.id)}>-</button>{" "}
            <button onClick={() => onRemoveFromCart(item.id)}>remove</button>
          </div>
        ))}
        <p>Total : {total}</p>
      </div>
    </div>
  );
};

export default Cart;
