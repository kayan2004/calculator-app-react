import React from "react";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

const Calculator = ({ onButtonClick, onDelete, onEqual, onReset }) => {
  const { theme } = useTheme();
  return (
    <div className={`calculator-container ${theme}`}>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("7");
        }}
      >
        7
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("8");
        }}
      >
        8
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("9");
        }}
      >
        9
      </Button>
      <Button
        className="secondary "
        onClick={() => {
          onDelete();
        }}
      >
        DEL
      </Button>

      <Button
        className="primary "
        onClick={() => {
          onButtonClick("4");
        }}
      >
        4
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("5");
        }}
      >
        5
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("6");
        }}
      >
        6
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("+");
        }}
      >
        +
      </Button>

      <Button
        className="primary "
        onClick={() => {
          onButtonClick("1");
        }}
      >
        1
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("2");
        }}
      >
        2
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("3");
        }}
      >
        3
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("-");
        }}
      >
        -
      </Button>

      <Button
        className="primary "
        onClick={() => {
          onButtonClick(".");
        }}
      >
        .
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("0");
        }}
      >
        0
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("/");
        }}
      >
        /
      </Button>
      <Button
        className="primary "
        onClick={() => {
          onButtonClick("*");
        }}
      >
        ×
      </Button>

      <Button
        className="secondary "
        id="reset-button"
        onClick={() => {
          onReset();
        }}
      >
        RESET
      </Button>
      <Button
        className="equal "
        id="equal-button"
        onClick={() => {
          onEqual();
        }}
      >
        =
      </Button>
    </div>
  );
};

export default Calculator;
