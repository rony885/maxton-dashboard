import React from "react";
import { Link } from "react-router-dom";

const WidgetsData = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* <!--breadcrumb--> */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Widgets</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="#">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data Widgets
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

        <div className="row row-cols-1 row-cols-xl-3">
          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h3 className="mb-0">$9,568</h3>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-danger text-danger bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_downward
                      </span>
                      8.6%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Total Sales</p>
                <div id="chart1"></div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h3 className="mb-0">85,247</h3>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_downward
                      </span>
                      23.7%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Total Accounts</p>
                <div id="chart2"></div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h3 className="mb-0">$69,452</h3>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-danger text-danger bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_downward
                      </span>
                      8.6%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Average Weekly Sales</p>
                <div id="chart3"></div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h2 className="mb-0">$65,129</h2>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_upward
                      </span>
                      24.7%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Sale This Year</p>
                <div className="mt-4">
                  <p className="mb-2 d-flex align-items-center justify-content-between">
                    285 left to Goal<span className="">68%</span>
                  </p>
                  <div className="progress w-100" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-grd-purple"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h2 className="mb-0">$88,367</h2>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-danger text-danger bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_upward
                      </span>
                      18.6%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Sale This Month</p>
                <div className="mt-4">
                  <p className="mb-2 d-flex align-items-center justify-content-between">
                    285 left to Goal<span className="">78%</span>
                  </p>
                  <div className="progress w-100" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-grd-danger"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="">
                    <h2 className="mb-0">$55,674</h2>
                  </div>
                  <div className="">
                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10">
                      <span className="material-icons-outlined fs-6">
                        arrow_upward
                      </span>
                      42.6%
                    </p>
                  </div>
                </div>
                <p className="mb-0">Sale This Week</p>
                <div className="mt-4">
                  <p className="mb-2 d-flex align-items-center justify-content-between">
                    285 left to Goal<span className="">88%</span>
                  </p>
                  <div className="progress w-100" style={{ height: "6px" }}>
                    <div
                      className="progress-bar bg-grd-success"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}

        <div className="row row-cols-1 row-cols-xl-6">
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">97.4K</h5>
                    <p className="mb-0">Total Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart4"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <span className="text-success me-1">12.5%</span> from last
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-1">
                  <div className="">
                    <h5 className="mb-0">42.5K</h5>
                    <p className="mb-0">Active Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart5"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">24K users increased from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">97.4K</h5>
                    <p className="mb-0">Total Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart6"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <span className="text-success me-1">12.5%</span> from last
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-1">
                  <div className="">
                    <h5 className="mb-0">42.5K</h5>
                    <p className="mb-0">Active Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart7"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">24K users increased from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">97.4K</h5>
                    <p className="mb-0">Total Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart8"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <span className="text-success me-1">12.5%</span> from last
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-1">
                  <div className="">
                    <h5 className="mb-0">42.5K</h5>
                    <p className="mb-0">Active Users</p>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-container2">
                  <div id="chart9"></div>
                </div>
                <div className="text-center">
                  <p className="mb-0">24K users increased from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}

        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="">
                      <h5 className="mb-0">Order Status</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle-nocaret options dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <span className="material-icons-outlined fs-5">
                          more_vert
                        </span>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="position-relative">
                    <div className="piechart-legend">
                      <h2 className="mb-1">68%</h2>
                      <h6 className="mb-0">Total Sales</h6>
                    </div>
                    <div id="chart11"></div>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25">
                        <span className="material-icons-outlined fs-6 text-primary">
                          fiber_manual_record
                        </span>
                        Sales
                      </p>
                      <div className="">
                        <p className="mb-0">68%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25">
                        <span className="material-icons-outlined fs-6 text-danger">
                          fiber_manual_record
                        </span>
                        Product
                      </p>
                      <div className="">
                        <p className="mb-0">25%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25">
                        <span className="material-icons-outlined fs-6 text-success">
                          fiber_manual_record
                        </span>
                        Income
                      </p>
                      <div className="">
                        <p className="mb-0">14%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Sales & Views</h5>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle-nocaret options dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span className="material-icons-outlined fs-5">
                        more_vert
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="chart10"></div>
                <div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span data-peity='{ "fill": ["#98ec2d", "rgb(0 0 0 / 12%)"], "innerRadius": 32, "radius": 40 }'>
                          5/7
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-1 fs-6 fw-bold">Monthly</p>
                      <h2 className="mb-0">65,127</h2>
                      <p className="mb-0">
                        <span className="text-success me-2 fw-medium">
                          16.5%
                        </span>
                        <span>55.21 USD</span>
                      </p>
                    </div>
                  </div>
                  <div className="vr"></div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span data-peity='{ "fill": ["#ff6a00", "rgb(0 0 0 / 12%)"], "innerRadius": 32, "radius": 40 }'>
                          5/7
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-1 fs-6 fw-bold">Yearly</p>
                      <h2 className="mb-0">984,246</h2>
                      <p className="mb-0">
                        <span className="text-success me-2 fw-medium">
                          24.9%
                        </span>
                        <span>267.35 USD</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}

        <div className="row">
          <div className="col-12 col-xl-4 d-flex">
            <div className="card overflow-hidden w-100 rounded-4">
              <div className="card-body">
                <div className="text-center">
                  <h6 className="mb-0">Monthly Revenue</h6>
                </div>
                <div className="mt-4" id="chart12"></div>
                <p>Avrage monthly sale for every author</p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="">
                    <h1 className="mb-0 text-primary">68.9%</h1>
                  </div>
                  <div className="d-flex align-items-center align-self-end">
                    <p className="mb-0 text-success">34.5%</p>
                    <span className="material-icons-outlined text-success">
                      expand_less
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 d-flex">
            <div className="card overflow-hidden w-100 rounded-4">
              <div className="p-3 bg-grd-purple">
                <div className="text-center">
                  <h6 className="mb-0 text-white">Trending Products</h6>
                </div>
                <div className="mt-4" id="chart13"></div>
              </div>
              <div className="p-4">
                <p>Avrage monthly sale for every author</p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="">
                    <h1 className="mb-0 text-danger">48.2%</h1>
                  </div>
                  <div className="d-flex align-items-center align-self-end">
                    <p className="mb-0 text-success">34.5%</p>
                    <span className="material-icons-outlined text-success">
                      expand_less
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 d-flex">
            <div className="card overflow-hidden w-100 rounded-4">
              <div className="card-body">
                <div className="text-center">
                  <h6 className="mb-0">Yearly Income</h6>
                </div>
                <div className="mt-4" id="chart14"></div>
                <p>Avrage monthly sale for every author</p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="">
                    <h1 className="mb-0 text-success">68.9%</h1>
                  </div>
                  <div className="d-flex align-items-center align-self-end">
                    <p className="mb-0 text-success">34.5%</p>
                    <span className="material-icons-outlined text-success">
                      expand_less
                    </span>
                  </div>
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

export default WidgetsData;
