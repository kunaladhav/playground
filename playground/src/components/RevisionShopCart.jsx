const RevisionShopCart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <div>
        {cart.map((item) => (
          <div>
            {item.name} {item.price} {item.quantity}
            <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
            <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        {totalPrice}
      </div>
    </div>
  );
};

export default RevisionShopCart;
