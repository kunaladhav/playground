import { useState } from "react";
import VariantsProductList from "../components/VariantsProductList";
import VariantsCart from "../components/VariantsCart";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    variants: ["8gb", "16 gb"],
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 2000,
    variants: ["Small", "Medium", "Large"],
  },
  {
    id: 3,
    name: "Phone",
    price: 50000,
    variants: ["128GB", "256GB"],
  },
];

const ShopVariants = () => {
  const products = initialProducts;
  const [cart, setCart] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState({});

  const handleVariantSelect = (productId, vaiantValue) => {
    setSelectedVariant((...prev) => ({
      ...prev,
      [productId]: vaiantValue,
    }));
  };

  const addToCart = (product) => {
    const chosenVariant = selectedVariant[product.id];

    if (!chosenVariant) {
      alert("Please select a variant");
      return;
    }

    const exists = cart.some(
      (item) => item.id === product.id && item.variant === chosenVariant,
    );

    if (exists) {
      setCart(
        cart.map((item) => {
          if (
            item.id === product.id &&
            selectedVariant[product.id] === item.variant
          ) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1, variant: chosenVariant }]);
    }
  };

  const removeFromCart = (id, variant) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id || item.variant !== variant;
      }),
    );
  };

  const increaseQuantity = (id, variant) => {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.variant === variant) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decreaseQuantity = (id, variant) => {
    const item = cart.find(
      (item) => item.id === id && item.variant === variant,
    );

    if (item.quantity === 1) {
      removeFromCart(id, variant);
      return;
    }

    setCart(
      cart.map((item) => {
        if (item.id === id && item.variant === variant) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <div>
        <VariantsProductList
          products={products}
          onAddToCart={addToCart}
          selectedVariant={selectedVariant}
          onSelectVariant={handleVariantSelect}
        />
        <VariantsCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default ShopVariants;
