import { useState } from "react";
import RecentProductList from "../components/RecentProductList";
import RecentShopCart from "../components/RecentShopCart";
import RecentProductDetails from "../components/RecentProductDetails";
import RecentlyViewProduct from "../components/RecentlyViewProduct";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    description: "A powerful laptop for development and everyday work.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 3000,
    description: "Wireless headphones with clear sound.",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 2000,
    description: "A comfortable mechanical keyboard.",
  },
  {
    id: 4,
    name: "Mouse",
    price: 1000,
    description: "An ergonomic wireless mouse.",
  },
];

const RecentShop = () => {
  const products = initialProducts;
  const [cart, setCart] = useState([]);
  const [recent, setRecent] = useState([]);

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
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

  const recentProducts = (product) => {
    const filteredItems = recent.filter((item) => {
      return item.id !== product.id;
    });

    if (recent.length === 0) {
      setRecent([product]);
    } else {
      setRecent([product, ...filteredItems].slice(0, 3));
    }
  };

  return (
    <div>
      <div>
        <RecentProductList
          products={products}
          onAddToCart={addToCart}
          onRecentProduct={recentProducts}
        />
        <RecentShopCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
        <RecentProductDetails recent={recent} />
        <RecentlyViewProduct recent={recent} />
      </div>
    </div>
  );
};

export default RecentShop;
