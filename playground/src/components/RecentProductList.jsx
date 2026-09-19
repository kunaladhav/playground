const RecentProductList = ({ products, onAddToCart, onRecentProduct }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
            <button onClick={() => onRecentProduct(item)}>View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProductList;
