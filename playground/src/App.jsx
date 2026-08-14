import { useCallback, useEffect, useMemo, useState } from "react";

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

function App() {
  const [selectedCompany, setSelectedCompany] = useState("apple");

  const handleClick = (company) => {
    setSelectedCompany(company);
  };

  const summation = () => {
    console.log(2 + 3);
  };

  useEffect(() => {
    console.log("This is the use effect hook running...");
  }, []);

  useMemo(() => {}, []);

  useCallback(() => {
    summation();
    console.log("This is the use callback hook running..");
  }, []);

  return (
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
  );
}

export default App;
