import { useEffect, useRef, useState } from "react";

const EffectRef = () => {
  const [counter, setCounter] = useState(0);

  const prevCount = useRef(0);

  const increaseCounter = () => {
    return setCounter((prev) => prev + 1);
  };

  const decreaseCounter = () => {
    return setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    prevCount.current = counter;
  }, [counter]);

  return (
    <div>
      <div>
        <p>Previous Count: {prevCount.current}</p> <br />
        <p>Current Count: {counter}</p> <br />
        <button onClick={() => increaseCounter()}>[+]</button>
        <button onClick={() => decreaseCounter()}>[-]</button>
      </div>
    </div>
  );
};

export default EffectRef;
