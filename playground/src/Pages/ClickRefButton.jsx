import { useRef, useState } from "react";

const ClickRefButton = () => {
  // const [renderCount, setRenderCount] = useState(1);
  const [count, setCount] = useState(0);

  const clickButton = useRef(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    clickButton.current += 1;
    console.log(clickButton.current);
  };

  return (
    <div>
      <div>
        <p>Render Count: {}</p>

        <button onClick={handleClick}>Click me</button>

        <p>Button Click Count: {count}</p>
      </div>
    </div>
  );
};

export default ClickRefButton;
