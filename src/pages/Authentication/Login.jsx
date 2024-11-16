/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-3 mx-lg-0">
      <div className="card my-5 col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
        <div className="row g-4">
          <div className="col-lg-6 d-flex">
            <div className="card-body">
              <img
                src="assets/images/logo1.png"
                className="mb-4"
                width="145"
                alt=""
              />
              <h4 className="fw-bold">Get Started Now</h4>
              <p className="mb-0">
                Enter your credentials to login your account
              </p>
              <div className="row gy-2 gx-0 my-4">
                <div className="col-12 col-lg-12">
                  <button className="btn btn-filter py-2 px-4 font-text1 fw-bold d-flex align-items-center justify-content-center w-100">
                    <span className="">
                      <img
                        src="assets/images/apps/05.png"
                        width="20"
                        className="me-2"
                        alt=""
                      />
                      Sign in with Google
                    </span>
                  </button>
                </div>
                <div className="col-12 col-lg-12">
                  <button className="btn btn-filter py-2 px-4 font-text1 fw-bold d-flex align-items-center justify-content-center w-100">
                    <span className="">
                      <img
                        src="assets/images/apps/17.png"
                        width="20"
                        className="me-2"
                        alt=""
                      />
                      Sign in with Facebook
                    </span>
                  </button>
                </div>
                <div className="col-12 col-lg-12">
                  <button className="btn btn-filter py-2 px-4 font-text1 fw-bold d-flex align-items-center justify-content-center w-100">
                    <span className="">
                      <img
                        src="assets/images/apps/18.png"
                        width="20"
                        className="me-2"
                        alt=""
                      />
                      Sign in with LinkedIn
                    </span>
                  </button>
                </div>
              </div>

              <div className="separator">
                <div className="line"></div>
                <p className="mb-0 fw-bold">OR SIGN IN WITH</p>
                <div className="line"></div>
              </div>
              <div className="form-body mt-4">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="inputEmailAddress" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmailAddress"
                      placeholder="jhon@example.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputChoosePassword" className="form-label">
                      Password
                    </label>
                    <div className="input-group" id="show_hide_password">
                      <input
                        type="password"
                        className="form-control border-end-0"
                        id="inputChoosePassword"
                        value="12345678"
                        placeholder="Enter Password"
                      />
                      <a
                        href="javascript:;"
                        className="input-group-text bg-transparent"
                      >
                        <i className="bi bi-eye-slash-fill"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-end">
                    <a href="auth-boxed-forgot-password.html">
                      Forgot Password ?
                    </a>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-grd-primary">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-start">
                      <p className="mb-0">
                        Don't have an account yet?
                        <Link to="/auth-boxed-register">Sign up here</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-lg-flex d-none">
            <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-primary">
              <img
                src="assets/images/auth/login1.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </div>
  );
};

export default Login;
