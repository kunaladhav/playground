import { useRef } from "react";

const UseRefFocus = () => {
  const inputField = useRef();

  const handleClick = () => {
    inputField.current.focus();
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputField} />
        <button onClick={handleClick}>Focus</button>
      </div>
    </div>
  );
};

export default UseRefFocus;
