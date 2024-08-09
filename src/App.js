import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useTheme } from "./context/ThemeContext";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
