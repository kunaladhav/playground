import { useState } from "react";
import RevisionShopProduct from "../components/RevisionShopProduct";
import RevisionShopCart from "../components/RevisionShopCart";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // To check if the item is in cart to increase its quantity
    const exist = cart.some((item) => item.id === product.id);

    //Increase the quantity of the product
    if (exist) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }; //using curly brac here is beacuse we are changing the product
          }
          return item;
        }),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      }),
    );
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
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <div>
        <RevisionShopProduct products={products} onAddToCart={addToCart} />
        <RevisionShopCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
