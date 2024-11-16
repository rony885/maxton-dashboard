import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    // <footer className="page-footer d-flex justify-content-start align-items-start">
    <footer className="page-footer">
      <div className="copyright-column">
        <div className="copyright">
          <Link
            to="https://www.ekattorit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <small className="small" style={{ marginLeft: "22px" }}> */}
            <small className="small">
              <small className="footer text-white" style={{ fontSize: "11px" }}>
                &copy; Copyright {currentYear},
              </small>
              &nbsp;
              <span className="text-white">Designed & Developed By&nbsp;</span>
              <span style={{ color: "red" }}>EKATTOR</span>
              <span style={{ color: "green" }}> iT</span>
            </small>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
