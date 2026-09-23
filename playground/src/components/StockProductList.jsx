const StockProductList = ({ products, onAddToCart, onRemainingStock }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {onRemainingStock(item.id)} <br />
            <button
              disabled={onRemainingStock(item.id) < 0}
              onClick={() => onAddToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockProductList;
