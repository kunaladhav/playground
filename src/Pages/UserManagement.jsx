import { useEffect, useState } from "react";
import EditUserManagement from "../components/EditUserManagement";

const UserManagement = () => {
  // const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to Fetch User Data: ", error);
      alert("Failed To Load User Data");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <p>Users :</p>
        {editingUser ? (
          <EditUserManagement
            editUser={editingUser}
            setEditingUser={setEditingUser}
            setUserData={setUserData}
          />
        ) : (
          <div>
            {userData.map((item) => (
              <div>
                {item.name}
                {item.email}
                <button onClick={() => setEditingUser(item)}>Edit</button>{" "}
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
