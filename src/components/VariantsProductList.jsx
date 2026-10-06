const VariantsProductList = ({
  products,
  onAddToCart,
  onSelectVariant,
  selectedVariant,
}) => {
  return (
    <div>
      <div>
        {products.map((product) => (
          <div>
            {product.name} <br />
            {product.price} <br />
            {product.variants.map((item) => (
              <label>
                <input
                  type="radio"
                  value={item}
                  name={item}
                  checked={selectedVariant[product.id] === item}
                  onChange={(e) => onSelectVariant(product.id, e.target.value)}
                />
                {item}
              </label>
            ))}{" "}
            <br />
            <button onClick={() => onAddToCart(product)}>
              Add To Cart
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantsProductList;
