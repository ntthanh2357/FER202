import { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Cấu hình mặc định cho axios
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.timeout = 5000; // timeout sau 5 giây
axios.defaults.headers.common['Accept'] = 'application/json';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    const maxRetries = 2;
    let retryCount = 0;

    while (retryCount <= maxRetries) {
      try {
        // Kiểm tra tài khoản
        const accountRes = await axios.get('/accounts');
        const accounts = accountRes.data;
        
        const matchedAccount = accounts.find(
          acc => acc.username === username && acc.password === password
        );

        if (matchedAccount) {
          // Nếu tìm thấy tài khoản hợp lệ
          const loggedInUser = {
            ...matchedAccount,
            lastLoginTime: new Date().toISOString()
          };
          setUser(loggedInUser);
          localStorage.setItem("user", JSON.stringify(loggedInUser));
          navigate("/movies");
          return true;
        } else {
          throw new Error("Tên đăng nhập hoặc mật khẩu không chính xác!");
        }
      } catch (error) {
        console.error(`Login attempt ${retryCount + 1} failed:`, error);

        // Xử lý các loại lỗi
        if (error.message === "Tên đăng nhập hoặc mật khẩu không chính xác!") {
          throw error;
        } else if (error.response) {
          throw new Error(error.response.data.message || "Lỗi server khi đăng nhập!");
        } else if (error.code === 'ECONNABORTED') {
          throw new Error("Server phản hồi quá chậm, vui lòng thử lại!");
        } else if (error.request) {
          throw new Error("Không thể kết nối đến server! Vui lòng kiểm tra lại kết nối internet hoặc thử lại sau.");
        } else {
          throw new Error("Lỗi hệ thống khi đăng nhập! Vui lòng thử lại sau.");
        }
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
