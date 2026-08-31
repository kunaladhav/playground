import { useState } from "react";
import RevisionProducts from "../components/RevisionProducts";
import RevisionCart from "../components/RevisionCart";

const products_initial = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
];

const RevisionShop = () => {
  const [cart, setCart] = useState([]);

  const product = products_initial;

  const addToCart = (id) => {
    if (cart.includes(id)) {
      return;
    } else {
      setCart([...cart, id]);
    }
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item !== id));
  };

  const clearCart = (id) => {
    setCart(cart.filter((item) => item === id));
  };

  return (
    <div>
      <div>
        <RevisionProducts onAddToCart={addToCart} product={product} />
        <RevisionCart
          cart={cart}
          product={product}
          onDeleteFromCart={deleteFromCart}
          onClearCart={clearCart}
        />
      </div>
    </div>
  );
};

export default RevisionShop;
