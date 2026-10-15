import { useEffect, useRef, useState } from "react";

const UserPersistent = () => {
  const [users, setUsers] = useState(null);
  const [isDeleting, setIsDeleting] = useState([]);
  const deletingId = useRef(new Set());

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Network error while Fetching Users: ", error);
    }
  };

  const handleDelete = async (id) => {
    const originalIndex = users.findIndex((item) => item.id === id);
    const deletedUser = users[originalIndex];

    if (deletingId.current.has(id)) {
      return;
    }

    if (!deletedUser) return;

    deletingId.current.add(id);
    setIsDeleting((prev) => [...prev, id]);
    setUsers((prev) => prev.filter((item) => item.id !== id));

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        },
      );

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

      console.error("Error While Deleting an User: ", error);
    } finally {
      deletingId.current.delete(id);
      setIsDeleting((prev) => prev.filter((item) => item !== id));
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
          <div key={item.id}>
            {item.name} <br />
            {item.email} <br />
            <button
              disabled={isDeleting.includes(item.id)}
              onClick={() => handleDelete(item.id)}
            >
              {isDeleting.includes(item.id) ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPersistent;
