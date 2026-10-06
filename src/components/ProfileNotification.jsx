import { useState } from "react";

const ProfileNotification = () => {
  const [emailToggle, setEmailToggle] = useState(true);
  const [pushToggle, setPushToggle] = useState(true);

  return (
    <div>
      Email Notification :{" "}
      <button onClick={() => setEmailToggle(!emailToggle)}>
        {emailToggle === true ? "on" : "off"}
      </button>
      Push Notification :{" "}
      <button onClick={() => setPushToggle(!pushToggle)}>
        {pushToggle === true ? "on" : "off"}
      </button>
    </div>
  );
};

export default ProfileNotification;
