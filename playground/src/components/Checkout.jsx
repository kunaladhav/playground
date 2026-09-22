import { useState } from "react";

const initial_form = {
  name: "",
  email: "",
  address: "",
};

const Checkout = ({ cart, setCart }) => {
  const [formData, setFormData] = useState(initial_form);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.address.trim() !== ""
    ) {
      setOrderPlaced(true);
    } else {
      alert("Please Fill the Form Correctly");
    }
  };

  return (
    <div>
      <div>
        {orderPlaced ? (
          <div>
            <h2>Order Placed Successfully!</h2>

            <p>Thank you, {formData.name}.</p>

            <button
              onClick={() => {
                setOrderPlaced(false);
                setFormData({ ...initial_form });
                setCart([]);
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : cart.length > 0 ? (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>Empty Cart</div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
