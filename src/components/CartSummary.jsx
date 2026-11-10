import { memo } from "react";

const CartSummary = memo(
  ({ products, onAddToCart, totalItem, totalPrice, uniqueItem }) => {
    return (
      <div>
        <div>
          <p>
            Cart <br />
            Unique Products - {uniqueItem} <br />
            Total Products - {totalItem} <br />
            Total Price - {totalPrice} <br />
            <br />
          </p>
          {products.map((item) => (
            <div key={item.id}>
              {item.name} <br />
              {item.price} <br />
              <button onClick={() => onAddToCart(item)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default CartSummary;
