const ReducerProducts = ({ products, onAddToCart }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name}
            <br />
            {item.price}
            <br />
            <button
              onClick={() => onAddToCart({ type: "ADD_ITEM", payload: item })}
            >
              Add To Cart
            </button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReducerProducts;
