import React from "react";
import Theme from "./Theme";
import { useTheme } from "../context/ThemeContext";
const Header = () => {
  const { theme } = useTheme();
  return (
    <header>
      <h1 className={`${theme}`}>calc</h1>
      <Theme></Theme>
    </header>
  );
};

export default Header;
