import { useEffect, useState } from "react";

const initial_users = [
  {
    id: 1,
    name: "Kunal",
    age: "24",
    work: "Developer",
  },
  {
    id: 2,
    name: "Karan",
    age: "26",
    work: "Analyst",
  },
  {
    id: 3,
    name: "Abhishek",
    age: "25",
    work: "Consultant",
  },
  {
    id: 4,
    name: "Palak",
    age: "25",
    work: "Architect",
  },
  {
    id: 5,
    name: "Aron",
    age: "26",
    work: "Developer",
  },
];

const DebounceRevision = () => {
  const user = initial_users;
  const [searchText, setSearchText] = useState("");
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setDebounceText(searchText);
    }, 500);

    return () => {
      clearTimeout(interval);
    };
  }, [searchText]);

  const filteredItems = user.filter((item) => {
    return item.name.toLowerCase().includes(debounceText.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            {item.name}
            <br />
            {item.age}
            <br />
            {item.work}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebounceRevision;
