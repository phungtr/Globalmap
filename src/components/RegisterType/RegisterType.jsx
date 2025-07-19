import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/RegisterType.css";
import userImg from "../../style/img/User.jpg";
import companyImg from "../../style/img/Company.jpg";

const RegisterType = () => {
  const navigate = useNavigate();

  return (
    <div className="register-choice-wrapper">
              <div className="dark-overlay"></div>
      <div className="register-choice-container">
        <h2>Bạn muốn đăng ký với vai trò:</h2>
        <div className="register-options">
          <div className="register-card" onClick={() => navigate("/register/user")}>
            <img src={userImg} alt="Người dùng" />
            <p>Du khách</p>
          </div>
          <div className="register-card" onClick={() => navigate("/register/company")}>
            <img src={companyImg} alt="Doanh nghiệp" />
            <p>Doanh nghiệp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterType;