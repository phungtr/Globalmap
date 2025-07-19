import React, { useState } from "react";
import "../../style/Register.css"; // dùng chung CSS
import Footer from "../footer";

const CompanyRegisterForm = ({ onRegister }) => {
  const [form, setForm] = useState({
    companyname: "",
    taxcode: "",
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
    alert("Đăng ký doanh nghiệp thành công!");
    onRegister();
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Tạo tài khoản doanh nghiệp</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>Tên công ty :</label>
          <input name="companyname" placeholder="Tên công ty" value={form.companyname} onChange={handleChange} required />
          <label>Mã số thuế :</label>
          <input name="taxcode" placeholder="Mã số thuế" value={form.taxcode} onChange={handleChange} required />
          <label>Email :</label>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <label>Số điện thoại :</label>
          <input name="phone" value={form.phone} onChange={handleChange}  placeholder="Số điện thoại" required/>
          <label>Mật khẩu :</label>
          <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
          <label>Xác nhận mật khẩu :</label>
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

export default CompanyRegisterForm;
