const NotesSearch = ({ setSearchText, searchText }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Notes"
        />
      </div>
    </div>
  );
};

export default NotesSearch;
