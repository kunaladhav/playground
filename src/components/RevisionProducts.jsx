const RevisionProducts = ({ onAddToCart, product }) => {
  return (
    <div>
      <div>
        {product.map((item) => (
          <div>
            {item.name} {item.price}
            <button onClick={() => onAddToCart(item.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevisionProducts;
