import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "Light" ? "blue" : "white",
        }}
      >
        ThemeHeader{" "}
        <button
          onClick={() =>
            setTheme((prev) => (prev === "Light" ? "Dark" : "Light"))
          }
        >
          {theme === "Light" ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default ThemeHeader;
