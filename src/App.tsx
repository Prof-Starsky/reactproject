import React from "react";
import Header from "./components/Header";
import SidebarAccordion from "./components/SidebarAccordian";
import Content from "./components/Content";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header>React Website Development Presentation!</Header>
      <div className="main-content">
        <SidebarAccordion></SidebarAccordion>
        <Content></Content>
      </div>
    </div>
  );
};

export default App;
