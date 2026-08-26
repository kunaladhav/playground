import { useState } from "react";

const Security = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <p>Password</p>
      <p>{hidden ? "••••••" : 12345}</p>
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? "Show Password" : "Hide Password"}
      </button>
    </div>
  );
};

export default Security;
