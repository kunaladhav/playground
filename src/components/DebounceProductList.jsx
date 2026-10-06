const DebounceProductList = ({
  searchTerm,
  setSearchTerm,
  filteredItems,
  debounceTerm,
  onHandleClear,
}) => {
  return (
    <div>
      <div>
        <label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={onHandleClear}>Clear</button>
        </label>
      </div>
      <div>
        {debounceTerm === "" || filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div>
              {item.name} <br />
              {item.price} <br />
              {item.category} <br />
            </div>
          ))
        ) : (
          <div>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default DebounceProductList;
