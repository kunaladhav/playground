const Wishlist = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.category} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
