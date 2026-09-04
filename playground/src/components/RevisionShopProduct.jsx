const RevisionShopProduct = ({ products, onAddToCart }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} {item.price}
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevisionShopProduct;
