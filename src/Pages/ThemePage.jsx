import { useState } from "react";
import ThemeContent from "../components/ThemeContent";
import ThemeHeader from "../components/ThemeHeader";
import ThemeSidebar from "../components/ThemeSidebar";
import { ThemeContext } from "../context/ThemeContext";

const ThemePage = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <div>
      <div>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeHeader />
          <ThemeSidebar />
          <ThemeContent />
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default ThemePage;
