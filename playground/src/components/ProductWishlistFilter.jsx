const ProductWishlistFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
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
    </div>
  );
};

export default ProductWishlistFilter;
