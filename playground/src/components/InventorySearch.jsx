const InventorySearch = ({ searchTerm, setSearchTerm }) => {
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
    </div>
  );
};

export default InventorySearch;
