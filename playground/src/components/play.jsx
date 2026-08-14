import { useState } from "react";

const companies = {
  apple: {
    employees: 100,
    location: "California",
  },
  samsung: {
    employees: 200,
    location: "Seoul",
  },
};

const Play = () => {
  const [selectedCompany, setSelectedCompany] = useState("apple");

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <div>
        <div>
          <div className="" onClick={() => handleClick("apple")}>
            Apple
          </div>
          <div className="" onClick={() => handleClick("samsung")}>
            Samsung
          </div>
        </div>

        <div>
          {companies[selectedCompany].employees} -{" "}
          {companies[selectedCompany].location}
        </div>
      </div>
    </div>
  );
};

export default Play;
