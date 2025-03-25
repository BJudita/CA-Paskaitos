import React, { useContext } from "react";
import {ThemeContext} from "../Context/ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Tamsi tema" : "Šviesi tema"}
    </button>
  );
};

export default ThemeToggleButton;