import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        <div className="mx-3 mx-lg-0">
          <div className="card my-5 col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 d-flex">
                <div className="card-body">
                  <img
                    src="assets/images/logo1.png"
                    className="mb-4"
                    width="145"
                    alt=""
                  />
                  <h4 className="fw-bold">Forgot Password?</h4>
                  <p className="mb-0">
                    Enter your registered email ID to reset the password
                  </p>

                  <div className="form-body mt-4">
                    <form className="row g-3">
                      <div className="col-12">
                        <label className="form-label">Email id</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="example@user.com"
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid gap-2">
                          <button type="button" className="btn btn-grd-warning">
                            Send
                          </button>
                          <Link
                            to="/auth-boxed-login"
                            className="btn btn-light"
                          >
                            Back to Login
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-lg-flex d-none">
                <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-grd-warning">
                  <img
                    src="assets/images/auth/forgot-password1.png"
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

export default ForgotPassword;
