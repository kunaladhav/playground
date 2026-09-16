const CouponCart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  coupon,
  setCoupon,
}) => {
  const totalCost = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const discountedPrice = () => {
    if (coupon === "SAVE10") {
      return totalCost - (totalCost * 10) / 100;
    } else if (coupon === "SAVE20") {
      return totalCost - (totalCost * 20) / 100;
    } else {
      return totalCost;
    }
  };

  return (
    <div>
      <div>
        <p>Cart :</p>
        {cart.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onDecreaseQuantity(item.id)}>[-]</button>
            {item.quantity}{" "}
            <button onClick={() => onIncreaseQuantity(item.id)}>[+]</button>{" "}
            <br />
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </label>
        {coupon === "" ? (
          <p>No coupon entered</p>
        ) : coupon === "SAVE10" ? (
          <p> You have 10% discount </p>
        ) : coupon === "SAVE20" ? (
          <p> You have 20% discount</p>
        ) : (
          <p>Please Enter valid discount coupon</p>
        )}
        {discountedPrice()}
      </div>
    </div>
  );
};

export default CouponCart;
