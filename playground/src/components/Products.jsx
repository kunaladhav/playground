const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Keyboard", price: 2000 },
  { id: 3, name: "Mouse", price: 1000 },
  { id: 4, name: "Monitor", price: 15000 },
];

const Products = ({ onAddToCart, cart }) => {
  return (
    <div>
      {products.map((item) => (
        <div>
          {item.name} - {item.price} -{" "}
          <button onClick={() => onAddToCart(item.id)}>
            {cart.includes(item.id) ? "Added" : "Add"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
