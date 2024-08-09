import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-container ${theme}`}>
      <h2 className={`${theme}`}>theme</h2>
      <div className={`numbers-switcher-container ${theme}`}>
        <div className={`numbers-container ${theme}`}>
          <span id="first-theme" onClick={() => toggleTheme("theme1")}>
            1
          </span>
          <span id="second-theme" onClick={() => toggleTheme("theme2")}>
            2
          </span>
          <span id="third-theme" onClick={() => toggleTheme("theme3")}>
            3
          </span>
        </div>
        <div className={`theme-switcher ${theme}`}>
          <div className={`ball ${theme}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
