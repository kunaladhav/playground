const ProductComparisonList = ({ products, toAddToCompare }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.category} <br />
            <button onClick={() => toAddToCompare(item)}>
              Add to Compare
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparisonList;
