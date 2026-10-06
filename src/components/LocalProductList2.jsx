const LocalProductList2 = ({
  products,
  onAddToCart,
  selectedVariant,
  onSelectVariant,
}) => {
  return (
    <div>
      <div>
        {products.map((product) => (
          <div>
            {product.name} <br />
            {product.price} <br />
            {product.variants.map((variant) => (
              <label>
                <input
                  type="radio"
                  value={variant}
                  checked={selectedVariant[product.id] === variant}
                  onChange={(e) => onSelectVariant(product.id, e.target.value)}
                />
                {variant}
              </label>
            ))}{" "}
            <br />
            <button onClick={() => onAddToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalProductList2;
