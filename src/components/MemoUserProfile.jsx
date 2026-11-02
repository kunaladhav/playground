import { memo } from "react";

const MemoUserProfile = memo(({ name, email }) => {
  return (
    <div>
      <div>
        <p>
          Name: {name}, Email: {email}
        </p>
        {console.log("MemoUserProfile is rendered")}
      </div>
    </div>
  );
});

export default MemoUserProfile;
