import { useCallback, useState } from "react";
import CallbackUserProfile from "../components/CallbackUserProfile";

const CallbackApp = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleProfileClick = useCallback(() => {
    console.log("Profile button Clicked");
  }, []);

  return (
    <div>
      {console.log("Parent is rendered")}
      <div>
        <p>Count - {counter}</p>
        <button onClick={handleClick}>[+]</button>
      </div>
      <CallbackUserProfile
        name={"Kunal"}
        email={"kunal@example.com"}
        handleProfileClick={handleProfileClick}
      />
    </div>
  );
};

export default CallbackApp;
