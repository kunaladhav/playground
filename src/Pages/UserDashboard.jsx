import { useState } from "react";
import UserSearch from "../components/UserSearch";
import UserFilter from "../components/UserFilter";
import UserList from "../components/UserList";

const initialUsers = [
  {
    id: 1,
    name: "Kunal",
    email: "kunal@example.com",
    role: "Frontend Developer",
    active: true,
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    role: "Backend Developer",
    active: false,
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@example.com",
    role: "Full Stack Developer",
    active: true,
  },
];

const UserDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];

  const filteredItem = users.filter((item) => {
    const matchedTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedRole = selectedRole === "" || selectedRole === item.role;

    return matchedTerm && matchedRole;
  });

  const toggleActive = (id) => {
    setUsers(
      users.map((item) => {
        if (item.id === id) {
          return { ...item, active: !item.active };
        }
        return item;
      }),
    );
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  return (
    <div>
      <div>
        <UserSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <UserFilter
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          roles={roles}
        />
        <UserList
          users={filteredItem}
          onToggleActive={toggleActive}
          onDeleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
