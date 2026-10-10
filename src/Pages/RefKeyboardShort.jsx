import { useEffect, useState } from "react";
import RefKeyShort from "../components/RefKeyShort";

const RefKeyboardShort = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handleKeyPress = (e) => {
    const element = e.target.tagName;
    const inputElement = element === "INPUT" || element === "TEXTAREA";

    if (inputElement) return;

    if (e.key === "Escape") {
      setShowHelp(false);
    } else if (e.key === "/") {
      e.preventDefault();
      setShowHelp((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div>
        <h2>This is KeyBoard Shortcut Assignment : press / to see magic!!!</h2>
        <input type="text" />
        {showHelp && <RefKeyShort />}
      </div>
    </div>
  );
};

export default RefKeyboardShort;
