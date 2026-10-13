import { useEffect, useState } from "react";

const SearchRace = () => {
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("Error while Fetching Users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const searchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();
        setFilteredItem(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error while Fetching Users: ", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    searchUsers();

    return () => {
      controller.abort();
    };
  }, [searchTerm]);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isLoading ? (
          <p>Searching users...</p>
        ) : filteredItem.length === 0 ? (
          <p>No users found.</p>
        ) : (
          filteredItem.map((user) => <div key={user.id}>{user.name}</div>)
        )}
      </div>
    </div>
  );
};

export default SearchRace;
