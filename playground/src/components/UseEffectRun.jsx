import { useEffect, useState } from "react";

const UseEffectRun = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("useEffect 1 Ran");
  });
  useEffect(() => {
    console.log("useEffect 2 Ran");
  }, []);
  useEffect(() => {
    console.log("useEffect 3 Ran");
  }, [count]);

  useEffect(() => {
    console.log("Text effect ran");
  }, [text]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <br />
        {count} <br />
        <button onClick={() => increment()}>[+]</button>{" "}
        <button onClick={() => decrement()}>[-]</button> <br />
      </div>
    </div>
  );
};

export default UseEffectRun;
