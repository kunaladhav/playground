import { useState } from "react";

const EditUserManagement = ({ editUser, setEditingUser, setUserData }) => {
  const [name, setName] = useState(editUser.name);
  const [email, setEmail] = useState(editUser.email);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${editUser.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      setUserData((prev) =>
        prev.map((user) =>
          user.id === editUser.id
            ? { ...user, name: data.name, email: data.email }
            : user,
        ),
      );

      setEditingUser(null);
    } catch (error) {
      console.error("Error in Updating User: ", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={saving}>
          {saving ? "Saving.." : "Save"}
        </button>
        <button onClick={() => setEditingUser(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUserManagement;
