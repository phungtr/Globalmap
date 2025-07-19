import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterChoice from "./components/RegisterType/RegisterType";
import UserRegisterForm from "./components/RegisterType/UserRegisterForm";
import CompanyRegisterForm from "./components/RegisterType/CompanyRegisterForm";
import MapPage from "./components/Map/MapPage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    const { email, password } = credentials;
    if (email === "user@example.com" && password === "123456") {
      setUser({ email, fullName: "Phùng Quang Trà" });
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  const handleRegister = () => {
    alert("Đăng ký thành công (dữ liệu cố định)");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/map" /> : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/register/user" element={<UserRegisterForm onRegister={() => alert("Đăng ký người dùng thành công!")} />} />
        <Route path="/register/company" element={<CompanyRegisterForm onRegister={() => alert("Đăng ký doanh nghiệp thành công!")} />} />
        <Route
          path="/map"
          element={
            user ? (
              <MapPage user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
