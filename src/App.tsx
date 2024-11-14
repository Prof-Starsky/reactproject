import React, { useState } from "react";
import Header from "./components/Header";
import SidebarAccordion from "./components/SidebarAccordian";
import Content from "./components/Content";
import "./App.css";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header onToggleTheme={toggleTheme} isDarkMode={isDarkMode}>
        React Website Development Presentation!
      </Header>
      <div className="main-content">
        <SidebarAccordion></SidebarAccordion>
        <Content></Content>
      </div>
    </div>
  );
};

export default App;
