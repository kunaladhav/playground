import { useState, useEffect, useRef } from "react";

const companies = ["Apple", "Samsung", "Google", "Microsoft"];

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <button onClick={() => setIsVisible(!isVisible)}>☰ Companies</button>
      {isVisible && (
        <div>
          {companies.map((item) => (
            <div
              onClick={() => handleClick(item)}
              className={item === selectedCompany ? "selected" : "company"}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
