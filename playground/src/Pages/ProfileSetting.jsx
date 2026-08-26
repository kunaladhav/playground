import Profile from "../components/Profile";
import Security from "../components/Security";
import ProfileNotification from "../components/ProfileNotification";
import { useState } from "react";

const ProfileSetting = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  return (
    <div>
      <div>
        <div>
          <p onClick={() => setSelectedComponent("profile")}>Profile</p>
          <p onClick={() => setSelectedComponent("security")}>Security</p>
          <p onClick={() => setSelectedComponent("notification")}>
            Notifications
          </p>
        </div>
        {selectedComponent === "profile" ? (
          <Profile />
        ) : selectedComponent === "security" ? (
          <Security />
        ) : selectedComponent === "notification" ? (
          <ProfileNotification />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProfileSetting;
