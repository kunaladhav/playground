const InventoryList = ({ products, increaseStock, decreaseStock }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.category} <br />
            {item.price} <br />
            Stock: <button onClick={() => increaseStock(item.id)}>
              [+]
            </button>{" "}
            {item.stock}{" "}
            <button onClick={() => decreaseStock(item.id)}>[-]</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
