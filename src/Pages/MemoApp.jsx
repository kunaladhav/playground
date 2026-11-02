import { useState } from "react";
import MemoUserProfile from "../components/MemoUserProfile";

const MemoApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>Count - {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>[+]</button>
      </div>
      <MemoUserProfile name={"Kunal"} email={"kunal@example.com"} />
      {console.log("MemoApp is rendered")}
    </div>
  );
};

export default MemoApp;
