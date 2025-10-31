// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from "react";

// 1️⃣ Tạo context
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

// 2️⃣ Tạo Provider để bao bọc ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // light là mặc định

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Giá trị truyền đi trong context
  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Custom hook giúp gọi context dễ hơn
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
