import UseReducerCart from "../components/UseReducerCart";
import ReducerProducts from "../components/ReducerProducts";
import { useReducer } from "react";

const initial_products = [
  { id: 1, name: "Keyboard", price: 1500 },
  { id: 2, name: "Mouse", price: 700 },
  { id: 3, name: "Headphones", price: 2500 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.some((item) => item.id === action.payload.id);

      if (exists) {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "INCREASE_QTY": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    }

    case "DECREASE_QTY": {
      const product = state.find((item) => item.id === action.payload);

      if (!product) {
        return state;
      }

      if (product.quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }

      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    }

    case "CLEAR_CART": {
      return [];
    }

    default: {
      return state;
    }
  }
};

const UseReducerShop = () => {
  const products = initial_products;
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <div>
        <ReducerProducts products={products} onAddToCart={dispatch} />
        <UseReducerCart
          cart={cart}
          onIncreaseQuantity={dispatch}
          onDecreaseQuantity={dispatch}
          onRemoveItem={dispatch}
          onClearCart={dispatch}
        />
      </div>
    </div>
  );
};

export default UseReducerShop;
