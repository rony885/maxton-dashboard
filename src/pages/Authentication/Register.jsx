/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        <div className="mx-3 mx-lg-0">
          <div className="card my-5 col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden border-3 p-4">
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
                          Sign up with Google
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
                          Sign up with Facebook
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
                          Sign up with LinkedIn
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="separator">
                    <div className="line"></div>
                    <p className="mb-0 fw-bold">OR SIGN UP WITH</p>
                    <div className="line"></div>
                  </div>
                  <div className="form-body mt-4">
                    <form className="row g-3">
                      <div className="col-12">
                        <label htmlFor="inputUsername" className="form-label">
                          Username
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputUsername"
                          placeholder="Jhon"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputEmailAddress"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmailAddress"
                          placeholder="example@user.com"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputChoosePassword"
                          className="form-label"
                        >
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
                      <div className="col-12">
                        <label
                          htmlFor="inputSelectCountry"
                          className="form-label"
                        >
                          Country
                        </label>
                        <select
                          className="form-select"
                          id="inputSelectCountry"
                          aria-label="Default select example"
                        >
                          <option selected="">India</option>
                          <option value="1">United Kingdom</option>
                          <option value="2">America</option>
                          <option value="3">Dubai</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            I read and agree to Terms &amp; Conditions
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-grd-info">
                            Register
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="text-start">
                          <p className="mb-0">
                            Already have an account?
                            <Link to="/auth-boxed-login">Sign in here</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex d-none">
                <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-info">
                  <img
                    src="assets/images/auth/register1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!--end row--> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
