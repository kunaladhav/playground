import { useState } from "react";

const companies = [
  "Apple",
  "Samsung",
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
  "Atlassian",
  "Spotify",
];

const SearchTerm = () => {
  const [searchString, setSearchString] = useState("");

  const filteredCompanines = companies.filter((item) =>
    item.toLowerCase().includes(searchString.toLowerCase()),
  );

  return (
    <div>
      <input
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      ></input>
      <div>
        {filteredCompanines.length > 0
          ? filteredCompanines.map((item) => <div>{item}</div>)
          : "No Companies Found"}
      </div>
    </div>
  );
};

export default SearchTerm;
