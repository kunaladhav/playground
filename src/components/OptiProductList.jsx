import { memo } from "react";

const OptiProductList = memo(({ products, onAddToCart }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <button onClick={() => onAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default OptiProductList;
