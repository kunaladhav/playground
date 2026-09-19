const RecentlyViewProduct = ({ recent }) => {
  return (
    <div>
      <div>
        <p>Recently Viewed Products :</p>
        {recent.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewProduct;
