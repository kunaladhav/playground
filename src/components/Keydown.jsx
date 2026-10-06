import { useEffect } from "react";

const Keydown = ({ keydown, setKeydown }) => {
  const handleKeyDown = (e) => {
    setKeydown(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div>
        <p>This is KeyDown event, Pressed key is: {keydown}</p>
      </div>
    </div>
  );
};

export default Keydown;
