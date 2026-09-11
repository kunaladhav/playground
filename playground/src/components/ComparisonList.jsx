const ComparisonList = ({ compareList, toRemoveFromCompare }) => {
  return (
    <div>
      <div>
        <p>Comparison List: {compareList.length}</p>
        {compareList.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            {item.category} <br />
            <button onClick={() => toRemoveFromCompare(item.id)}>
              Remove
            </button>{" "}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonList;
