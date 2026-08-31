const RevisionCart = ({ cart, product, onDeleteFromCart, onClearCart }) => {
  const cartProducts = product.filter((item) => cart.includes(item.id));

  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <div>
        <p>My Cart - {cart.length}</p>
        <button onClick={() => onClearCart()}>Clear Cart</button>
        {cart.length === 0 ? (
          <div>No Products in Cart</div>
        ) : (
          cartProducts.map((item) =>
            cart.includes(item.id) ? (
              <div>
                {item.name} {item.price}
                <button onClick={() => onDeleteFromCart(item.id)}>
                  Delete Item
                </button>
              </div>
            ) : (
              <></>
            ),
          )
        )}
      </div>
      <p>Total - {totalPrice}</p>
    </div>
  );
};

export default RevisionCart;
