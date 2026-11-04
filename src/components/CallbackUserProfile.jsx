import { memo } from "react";

const CallbackUserProfile = memo(({ name, email, handleProfileClick }) => {
  return (
    <div>
      {console.log("Child is rendered")}
      <div>
        <p>
          Name - {name}, Email - {email}
          <button onClick={handleProfileClick}>Profile</button>
        </p>
      </div>
    </div>
  );
});

export default CallbackUserProfile;
