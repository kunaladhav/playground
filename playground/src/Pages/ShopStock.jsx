import { useState } from "react";
import StockProductList from "../components/StockProductList";
import StockCart from "../components/StockCart";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    stock: 3,
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    stock: 5,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 2000,
    stock: 2,
  },
  {
    id: 4,
    name: "Mouse",
    price: 1000,
    stock: 10,
  },
  {
    id: 5,
    name: "Monitor",
    price: 15000,
    stock: 4,
  },
];

const ShopStock = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
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
          return {
            ...item,
            quantity: item.quantity + 1,
          };
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

  const remainingStock = (id) => {
    const product = products.find((item) => item.id === id);
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const remainingItem = product.stock - cartItem.quantity;
      return remainingItem;
    } else {
      return product.stock;
    }
  };

  return (
    <div>
      <div>
        <StockProductList
          products={products}
          onAddToCart={addToCart}
          onRemainingStock={remainingStock}
        />
        <StockCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemainingStock={remainingStock}
        />
      </div>
    </div>
  );
};

export default ShopStock;
