import { useState } from "react";

const LocalShopCart = ({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const [coupon, setCoupon] = useState("");

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

  const shippingCost = totalCost >= 5000 ? 0 : 500;

  return (
    <div>
      <div>
        <p>Cart :</p>
        {cart.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onDecreaseQuantity(item.id)}>
              [-]
            </button>{" "}
            {item.quantity}{" "}
            <button onClick={() => onIncreaseQuantity(item.id)}>[+]</button>{" "}
            <br />
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <div>
          <label>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </label>
        </div>
        Subtotal : {totalCost} <br />
        Discount :{" "}
        {coupon === "SAVE10"
          ? (totalCost * 10) / 100
          : coupon === "SAVE20"
            ? (totalCost * 20) / 100
            : 0}{" "}
        <br />
        Shipping : {totalCost === 0 ? 0 : shippingCost} <br />
        Total : {totalCost === 0 ? 0 : discountedPrice() + shippingCost}
        <br />
      </div>
    </div>
  );
};

export default LocalShopCart;
