import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import Footer from "./footer";
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="login-wrapper">
    <div className="login-left">
    <div className="intro-box">
      <h1>Hệ thống định hướng du lịch cá nhân</h1>
      <p>
        Hệ thống định hướng du lịch cá nhân của chúng tôi giúp bạn nhanh chóng xác định vị trí hiện tại, tìm đường đi tối ưu đến các điểm đến hấp dẫn, đồng thời cung cấp những gợi ý địa danh phù hợp với nhu cầu, sở thích cá nhân của bạn. Dù bạn là người lần đầu đến thành phố hay một người yêu thích khám phá, hệ thống sẽ đồng hành cùng bạn trên mọi hành trình.
      </p>
      <ul>
        <li>📍 Định vị vị trí hiện tại</li>
        <li>🗺️ Chỉ đường tối ưu</li>
        <li>🧭 Gợi ý địa danh nổi bật</li>
        <li>📌 Giao diện trực quan, dễ sử dụng</li>
      </ul>
  </div>
   </div>
    <div className="login-container">
      <h2>Đi đến nơi bạn muốn</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email đăng nhập :</label>
        <div className="input-group">
          <span className="icon">👤</span>
          <input
            type="email"
            placeholder="e.g. elon@tesla.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label>Mật khẩu :</label>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="e.g. ilovemangools123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Đăng nhập</button>

        <div className="login-links">
        <a href="/register">Chưa có tài khoản?</a>
          <a href="#">Quên mật khẩu?</a>
        </div>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
