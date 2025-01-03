

import React from "react";
import { Link } from "react-router-dom";

const ComponentCarousels = () => {
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
                  Carousels
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

        <div className="row row-cols-1 row-cols-lg-12 row-cols-xl-12">
          <div className="col">
            <h6 className="mb-0 text-uppercase">Slides only</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/carousels/01.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/02.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/03.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h6 className="mb-0 text-uppercase">With controls</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/carousels/04.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/05.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/06.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleControls"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleControls"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h6 className="mb-0 text-uppercase">With controls</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/carousels/07.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/08.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/09.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleIndicators"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h6 className="mb-0 text-uppercase">With captions</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                    ></li>
                    <li
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/carousels/10.png"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, Link pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/11.png"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/12.png"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleCaptions"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleCaptions"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h6 className="mb-0 text-uppercase">With Crossfade</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/images/carousels/13.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/14.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/carousels/15.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <Link
                    className="carousel-control-prev"
                    to="#carouselExampleFade"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#carouselExampleFade"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </main>
  );
};

export default ComponentCarousels;
