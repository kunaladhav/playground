import { useEffect, useRef, useState } from "react";

const TimerPage = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  const intervalId = useRef(null);

  useEffect(() => {
    if (start) {
      intervalId.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [start]);

  const handleReset = () => {
    setTimer(0);
    setStart(false);
  };

  return (
    <div>
      <div>
        Time : {timer} seconds <br />
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerPage;
