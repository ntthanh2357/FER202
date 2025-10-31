// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./contexts/ThemeContext";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          minHeight: "100vh",
          transition: "all 0.3s ease",
          textAlign: "center",
          paddingTop: "20px"
        }}
      >
        <CounterComponent />
        <LightSwitch />
      </div>
    </ThemeProvider>
  );
}

export default App;
