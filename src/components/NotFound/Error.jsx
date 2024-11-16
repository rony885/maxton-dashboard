/* eslint-disable no-script-url */

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="pt-5">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-lg-12">
            <div className="text-center error-pages">
              <h1 className="error-title text-white mb-3">404</h1>
              <h2 className="error-sub-title text-white">404 NOT FOUND</h2>

              <p className="error-message text-white text-uppercase">
                SORRY, AN ERROR HAS OCCURRED, REQUESTED PAGE NOT FOUND!
              </p>

              <div className="mt-4 d-flex align-items-center justify-content-center gap-3">
                <Link to="/" className="btn btn-grd-danger rounded-5 px-4">
                  <i className="bi bi-house-fill me-2"></i>Go To Home
                </Link>
                <Link
                  to="javascript:history.back()"
                  className="btn btn-light rounded-5 px-4"
                >
                  <i className="bi bi-arrow-left me-2"></i>Previous Page
                </Link>
              </div>

              {/* Updated copyright section */}
              <div className="mt-4 ">
                <div className="copyright ">
                  <Link
                    to="https://www.ekattorit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <small>
                      <small
                        className="footer text-white"
                        style={{ fontSize: "11px" }}
                      >
                        &copy; Copyright {currentYear},
                      </small>
                      &nbsp;
                      <span className="text-white">
                        Designed & Developed By&nbsp;
                      </span>
                      <span style={{ color: "red" }}>EKATTOR</span>
                      <span style={{ color: "green" }}> iT</span>
                    </small>
                  </Link>
                </div>
              </div>

              <hr className="border-light border-2" />
              <div className="list-inline contacts-social mt-4">
                <Link
                  to="#"
                  className="list-inline-item bg-facebook text-white border-0"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  to="#"
                  className="list-inline-item bg-pinterest text-white border-0"
                >
                  <i className="bi bi-pinterest"></i>
                </Link>
                <Link
                  to="#"
                  className="list-inline-item bg-whatsapp text-white border-0"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
                <Link
                  to="#"
                  className="list-inline-item bg-linkedin text-white border-0"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </div>
  );
};

export default Error;
