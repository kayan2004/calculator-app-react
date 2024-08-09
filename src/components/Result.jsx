import React from "react";
import { useTheme } from "../context/ThemeContext";
const Result = ({ display }) => {
  const { theme } = useTheme();

  return <div className={`result-container ${theme}`}>{display}</div>;
};

export default Result;
