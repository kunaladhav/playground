import { useEffect, useState } from "react";

const UserDelete = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error while Fetching Users: ", error);
    }
  };

  const deleteUser = async (id) => {
    const originalIndex = users.findIndex((item) => item.id === id);
    const deletedUser = users[originalIndex];

    if (!deleteUser) return;

    setUsers((prev) => prev.filter((item) => item.id !== id));

    try {
      // throw new Error("Simulated delete failure");

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        },
      );

      // throw new Error("Simulated Server Failure");

      if (!response.ok) {
        throw new Error("Failed to Delete User");
      }
    } catch (error) {
      setUsers((prev) => {
        const restored = [...prev];

        if (restored.some((item) => item.id === id)) {
          return restored;
        }

        restored.splice(
          Math.min(originalIndex, restored.length),
          0,
          deletedUser,
        );

        return restored;
      });

      console.error("Error while Deleting a User", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {users.map((item) => (
          <div>
            {item.name} <br />
            {item.email} <br />
            <button onClick={() => deleteUser(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDelete;
