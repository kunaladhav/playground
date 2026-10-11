import { useEffect, useState } from "react";

const SettingsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("Frontend Developer");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = await response.json();
      console.log(data);
      setUserData(data);
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.log("Error in Fetching User Data, ", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = () => {
    alert("Successfully Submitted the Form");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SettingsForm;
