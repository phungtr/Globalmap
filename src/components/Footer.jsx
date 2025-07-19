import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          © 2025 Hệ thống định hướng du lịch cá nhân · Phát triển bởi sinh viên Phùng Quang Trà - CMC University
        </p>
        <p>
          Giúp bạn tìm đường nhanh chóng, đề xuất điểm đến hấp dẫn, và nâng cao trải nghiệm du lịch thông minh.
        </p>
        <p>
          Email hỗ trợ: <a href="mailto:traquangphung@gmail.com">traquangphung@gmail.com</a> | SĐT: 0867 460 906
        </p>
      </div>
    </footer>
  );
};

export default Footer;