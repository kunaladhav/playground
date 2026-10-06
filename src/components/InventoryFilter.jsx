const InventoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  stockFilter,
  setStockFilter,
}) => {
  return (
    <div>
      <div>
        <select
          name="group-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="group-stock-filter"
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
      </div>
    </div>
  );
};

export default InventoryFilter;
