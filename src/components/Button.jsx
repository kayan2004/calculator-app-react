import React from "react";
import { useTheme } from "../context/ThemeContext";
const Button = ({ className, children, ...props }) => {
  const { theme } = useTheme();
  return (
    <button className={`${theme} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
