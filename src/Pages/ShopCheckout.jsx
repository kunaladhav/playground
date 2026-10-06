import { useState } from "react";
import CheckoutProductList from "../components/CheckoutProductList";
import CheckoutCart from "../components/CheckoutCart";
import Checkout from "../components/Checkout";

const initialProducts = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
  { id: 5, name: "Monitor", price: 15000 },
];

const ShopCheckout = () => {
  const products = initialProducts;
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...product, quantity: item.quantity + 1 };
          }
          return item;
        }),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item.quantity === 1) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <div>
        <CheckoutProductList products={products} onAddToCart={addToCart} />
        <CheckoutCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
        <Checkout cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ShopCheckout;
