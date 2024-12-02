import React from "react";
import { Link } from "react-router-dom";

const From = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* <!--breadcrumb--> */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Components</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="#">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Form Layouts
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Settings
              </button>
              <button
                type="button"
                className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Separated link
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end breadcrumb--> */}

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-xl-6">
            <div className="card">
              <div className="card-body p-4">
                <h5 className="mb-4">Vertical Icon</h5>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="input13" className="form-label">
                      First Name
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input13"
                        placeholder="First Name"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">
                          person_outline
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="input14" className="form-label">
                      Last Name
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input14"
                        placeholder="Last Name"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">
                          person_outline
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input15" className="form-label">
                      Phone
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input15"
                        placeholder="Phone"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">call</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input16" className="form-label">
                      Email
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input16"
                        placeholder="Email"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">email</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input17" className="form-label">
                      Password
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="password"
                        className="form-control"
                        id="input17"
                        placeholder="Password"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">
                          lock_open
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input18" className="form-label">
                      DOB
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input18"
                        placeholder="DOB"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">event</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input19" className="form-label">
                      Country
                    </label>
                    <select id="input19" className="form-select">
                      <option selected="">Choose...</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="input20" className="form-label">
                      City
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input20"
                        placeholder="City"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">
                          location_city
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="input21" className="form-label">
                      State
                    </label>
                    <select id="input21" className="form-select">
                      <option selected="">Choose...</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="input22" className="form-label">
                      Zip
                    </label>
                    <div className="position-relative input-icon">
                      <input
                        type="text"
                        className="form-control"
                        id="input22"
                        placeholder="Zip"
                      />
                      <span className="position-absolute top-50 translate-middle-y">
                        <i className="material-icons-outlined fs-5">
                          location_on
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="input23" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="input23"
                      placeholder="Address ..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="input24"
                      />
                      <label className="form-check-label" htmlFor="input24">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-md-flex d-grid align-items-center gap-3">
                      <button
                        type="button"
                        className="btn btn-grd-primary px-4"
                      >
                        Submit
                      </button>
                      <button type="reset" className="btn btn-grd-royal px-4">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </main>
  );
};

export default From;
