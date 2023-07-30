import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-blue-900 text-base-content">
      <div>
        <p>
          Copyright &copy; {new Date().getFullYear()} Code by{" "}
          <strong>Siam Sheikh</strong>
        </p>
        <p>
          Powered by The <strong>MEALDB</strong> API
        </p>
      </div>
    </footer>
  );
};

export default Footer;
