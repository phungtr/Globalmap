import React, { useState } from "react";
import "../../style/Register.css";
import Footer from "../footer";
const UserRegisterForm = ({ onRegister }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirm: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Mật khẩu không khớp");
    alert("Đăng ký thành công (dữ liệu cố định)");
    onRegister();
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Tạo tài khoản của bạn</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>Tên đăng ký:</label>
          <input name="fullName" placeholder="Họ tên" value={form.fullName} onChange={handleChange} required />
          <label>Email đăng ký:</label>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <label>Số điện thoại</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Số điện thoại" required/>
          <label>Mật khẩu đăng ký:</label>
          <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
          <label>Xác nhận mật khẩu:</label>
          <input name="confirm" type="password" placeholder="Xác nhận mật khẩu" value={form.confirm} onChange={handleChange} required />
          <button type="submit" className="register-btn">Đăng ký</button>
        </form>
        <p className="register-link">
          Đã có tài khoản? <a href="/">Đăng nhập</a>
        </p>
      </div>
       <Footer />
    </div>
  );
};

export default UserRegisterForm ;

