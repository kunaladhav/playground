import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "Light" ? "blue" : "white",
        }}
      >
        ThemeContent
      </div>
    </div>
  );
};

export default ThemeContent;
