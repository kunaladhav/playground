const RecentProductDetails = ({ recent }) => {
  return (
    <div>
      <div>
        <p>Product Details:</p>
        {recent.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.description} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProductDetails;
