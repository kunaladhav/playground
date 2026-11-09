import { useCallback, useMemo, useState } from "react";
import OptiProductList from "../components/OptiProductList";

const products = [
  { id: 1, name: "iPhone 16", price: 799 },
  { id: 2, name: "Samsung Galaxy S25", price: 899 },
  { id: 3, name: "Google Pixel 9", price: 699 },
  { id: 4, name: "OnePlus 13", price: 749 },
  { id: 5, name: "iPhone 16 Pro", price: 999 },
  { id: 6, name: "Samsung Galaxy S25 Ultra", price: 1199 },
];

const OptiProductDashboard = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [counter, setCounter] = useState(0);

  const filteredItems = useMemo(() => {
    const searchedItem = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return searchedItem;
  }, [searchTerm]);

  const addToCart = useCallback((product) => {
    console.log(product);
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

  return (
    <div>
      <div>
        <p>
          Cart - {cart.reduce((acc, item) => acc + item.quantity, 0)} <br />{" "}
          Counter - {counter} -{" "}
          <button onClick={() => setCounter((prev) => prev + 1)}>[+]</button>
        </p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <OptiProductList products={filteredItems} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default OptiProductDashboard;
