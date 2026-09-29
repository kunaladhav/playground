import { useState } from "react";

import Timer from "../components/Timer";

const TimerUse = () => {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>Hide</button>
        {showTimer && <Timer />}
      </div>
    </div>
  );
};

export default TimerUse;
