import { useState } from "react";

const CheckoutCart = ({
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
    if (totalCost >= 10000) {
      return (totalCost * 10) / 100;
    } else {
      return 0;
    }
  };

  const couponDiscount = () => {
    if (coupon === "SAVE10") {
      return (totalCost * 10) / 100;
    } else if (coupon === "SAVE20") {
      return (totalCost * 20) / 100;
    } else {
      return 0;
    }
  };

  const shippingCost = totalCost === 0 ? 0 : totalCost >= 5000 ? 0 : 100;

  const total = totalCost - discountedPrice() - couponDiscount() + shippingCost;

  return (
    <div>
      <div>
        <p>Cart : </p>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onDecreaseQuantity(item.id)}>[-]</button>
            {item.quantity}{" "}
            <button onClick={() => onIncreaseQuantity(item.id)}>[+]</button>{" "}
            <br />
            <button onClick={() => onRemoveFromCart(item.id)}>
              Remove
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
      <div>
        <label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        </label>
      </div>
      <div>
        Subtotal : {totalCost} <br />
        Discount : {totalCost >= 10000 ? (totalCost * 10) / 100 : 0}, Coupon
        Discount -{" "}
        {coupon === "SAVE10"
          ? (totalCost * 10) / 100
          : coupon === "SAVE20"
            ? (totalCost * 20) / 100
            : 0}{" "}
        <br />
        Shipping : {shippingCost} <br />
        Total : {total}
        <br />
      </div>
    </div>
  );
};

export default CheckoutCart;
