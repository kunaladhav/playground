const ProductList = ({ onAddToCart, products }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            {item.id} {item.name} {item.price}{" "}
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
