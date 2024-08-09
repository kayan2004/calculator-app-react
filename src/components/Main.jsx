import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import Calculator from "./Calculator";
import Result from "./Result";

const Main = () => {
  const { theme } = useTheme();

  const [display, setDisplay] = useState("");

  const handlePrimaryButtonClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleReset = () => {
    setDisplay("");
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const handleDelete = () => {
    setDisplay(display.substring(0, display.length - 1));
  };

  return (
    <main className={`${theme}`}>
      <Result display={display}></Result>
      <Calculator
        onButtonClick={handlePrimaryButtonClick}
        onReset={handleReset}
        onDelete={handleDelete}
        onEqual={handleEqual}
      ></Calculator>
    </main>
  );
};

export default Main;
