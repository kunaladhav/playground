const SearchSortFilter = ({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
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
        </label>
      </div>
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
          name="group-sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price-low">Price Low-High</option>
          <option value="price-high">Price High-Low </option>
          <option value="name-az">Alphabetically A-Z</option>
          <option value="name-za">Alphabetically Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSortFilter;
