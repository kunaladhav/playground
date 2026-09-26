import { useEffect, useState } from "react";
import LocalProductList2 from "../components/LocalProductList2";
import LocalCart2 from "../components/LocalCart2";

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

const LocalShop2 = () => {
  const products = initialProducts;
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleVariantSelect = (productId, variantValue) => {
    setSelectedVariant((prev) => ({
      ...prev,
      [productId]: variantValue,
    }));
  };

  const addToCart = (product) => {
    const chosenVariant = selectedVariant[product.id];

    if (!chosenVariant) {
      alert("Please Select a Variant Before you Add to Cart.");
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
            item.variant === selectedVariant[product.id]
          ) {
            return { ...item, quantity: item.quantity + 1 };
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
        <LocalProductList2
          products={products}
          onAddToCart={addToCart}
          selectedVariant={selectedVariant}
          onSelectVariant={handleVariantSelect}
        />
        <LocalCart2
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default LocalShop2;
