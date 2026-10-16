const UseReducerProducts = ({ products, onAddToCart }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name}
            <br />
            {item.name}
            <br />
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseReducerProducts;
