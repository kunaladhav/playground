import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 3000 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 2000 },
  { id: 4, name: "Mouse", category: "Accessories", price: 1000 },
  { id: 5, name: "Monitor", category: "Electronics", price: 15000 },
  { id: 6, name: "Backpack", category: "Accessories", price: 2500 },
  { id: 7, name: "Webcam", category: "Electronics", price: 5000 },
  { id: 8, name: "USB Cable", category: "Accessories", price: 500 },
  { id: 9, name: "Tablet", category: "Electronics", price: 25000 },
  { id: 10, name: "Mouse Pad", category: "Accessories", price: 800 },
];

const Pagination = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItem = products.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  const toDisplay = filteredItem.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredItem.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
      <div>
        {toDisplay.length > 0 ? (
          toDisplay.map((item) => (
            <div>
              {item.name} {item.category} {item.price}
            </div>
          ))
        ) : (
          <div>No Products Found</div>
        )}
        <div>
          <button onClick={() => prevPage()}>Previous</button>
          <p>Page {currentPage}</p>
          <button onClick={() => nextPage()}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
