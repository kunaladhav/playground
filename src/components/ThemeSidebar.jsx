import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "Light" ? "blue" : "white",
        }}
      >
        ThemeSidebar
      </div>
    </div>
  );
};

export default ThemeSidebar;
