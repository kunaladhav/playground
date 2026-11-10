import { useCallback, useMemo, useState } from "react";
import CartSummary from "../components/CartSummary";

const products = [
  { id: 1, name: "iPhone 16", price: 799 },
  { id: 2, name: "Samsung Galaxy S25", price: 899 },
  { id: 3, name: "Google Pixel 9", price: 699 },
  { id: 4, name: "OnePlus 13", price: 749 },
  { id: 5, name: "iPhone 16 Pro", price: 999 },
  { id: 6, name: "Samsung Galaxy S25 Ultra", price: 1199 },
];

const CartDashboard = () => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === product.id);

      if (exists) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const totalItem = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const uniqueItem = useMemo(() => {
    return cart.length;
  }, [cart]);

  return (
    <div>
      <div>
        <p>
          Counter - {counter} <br />
          <button onClick={() => setCounter((prev) => prev + 1)}>[+]</button>
        </p>
        <CartSummary
          products={products}
          onAddToCart={addToCart}
          totalItem={totalItem}
          totalPrice={totalPrice}
          uniqueItem={uniqueItem}
        />
      </div>
    </div>
  );
};

export default CartDashboard;
