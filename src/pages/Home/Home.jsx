import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";

const Home = () => {
  // Customers chart
  const chartOptions = {
    chart: {
      type: "area",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        name: "Customers",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ["#28a745"],
  };

  // Suppliers chart
  const chartSuppliers = {
    chart: {
      type: "bar",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    series: [
      {
        name: "Suppliers",
        data: [10, 20, 15, 25, 22, 30, 28, 35],
      },
    ],
    colors: ["#28a745"],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 1,
    },
  };

  // Products chart
  const chartProducts = {
    chart: {
      type: "line",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Products",
        data: [15, 25, 35, 45, 30, 50, 40, 60],
      },
    ],
    colors: ["#17a2b8"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  // Sells chart
  const chartSells = {
    chart: {
      type: "area",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Sells",
        data: [30, 45, 32, 50, 40, 55, 60],
      },
    ],
    colors: ["#ffc107"], // Using warning color (#ffc107)
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.7,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* <!--breadcrumb--> */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Dashboard</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="#">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Analysis
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

        <div className="row">
          <div className="col-12 col-lg-4 col-xxl-4 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <h5 className="mb-0">
                      Congratulations <span className="fw-600">Jhon</span>
                    </h5>
                    <img
                      src="assets/images/apps/party-popper.png"
                      width="24"
                      height="24"
                      alt=""
                    />
                  </div>
                  <p className="mb-4">You are the best seller of this monnth</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                      <h3 className="mb-0 text-indigo">$168.5K</h3>
                      <p className="mb-3">58% of sales target</p>
                      <button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
                        View Details
                      </button>
                    </div>
                    <img
                      src="assets/images/apps/gift-box-3.png"
                      width="100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-lg-4 col-xxl-2 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
                    <span className="material-icons-outlined fs-5">
                      shopping_cart
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +24%<i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">248k</h4>
                  <p className="mb-3">Total Orders</p>
                  <div id="chart1"></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-lg-4 col-xxl-2 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
                    <span className="material-icons-outlined fs-5">
                      shopping_cart
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +24%<i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">248k</h4>
                  <p className="mb-3">Today Sell</p>
                  <div id="chart1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-xxl-2 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success">
                    <span className="material-icons-outlined fs-5">
                      attach_money
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +14%<i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">$47.6k</h4>
                  <p className="mb-3">Today Purchase</p>
                  <div id="chart2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-2 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info">
                    <span className="material-icons-outlined fs-5">
                      visibility
                    </span>
                  </div>
                  <div>
                    <span className="text-danger d-flex align-items-center">
                      -35%<i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">189K</h4>
                  <p className="mb-3">Today Costs</p>
                  <div id="chart3"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-2 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 text-warning">
                    <span className="material-icons-outlined fs-5">
                      leaderboard
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +18%<i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">24.6%</h4>
                  <p className="mb-3">Today Profits</p>
                  <div id="chart4"></div>
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
                    <div>
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
                    <div id="chart6"></div>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 d-flex align-items-center gap-2 w-25">
                        <span className="material-icons-outlined fs-6 text-primary">
                          fiber_manual_record
                        </span>
                        Sales
                      </p>
                      <div>
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
                      <div>
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
                      <div>
                        <p className="mb-0">14%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Customers */}
          <div
            className="col-12 col-lg-4 col-xxl-2 d-flex"
            style={{ height: "40%" }}
          >
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
                    <span className="material-icons-outlined fs-5">
                      shopping_cart
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +24%{" "}
                      <i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">248k</h4>
                  <p className="mb-3">Today Customers</p>
                  <div id="chart1" className="">
                    <Chart
                      options={chartOptions}
                      series={chartOptions.series}
                      type="area"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Supliers */}
          <div
            className="col-12 col-lg-4 col-xxl-2 d-flex"
            style={{ height: "40%" }}
          >
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success">
                    <span className="material-icons-outlined fs-5">
                      attach_money
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +14%{" "}
                      <i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">$47.6k</h4>
                  <p className="mb-3">Today Supliers</p>
                  <div id="chart2">
                    <Chart
                      options={chartSuppliers}
                      series={chartSuppliers.series}
                      type="bar"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Products */}
          <div
            className="col-12 col-lg-6 col-xxl-2 d-flex"
            style={{ height: "40%" }}
          >
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info">
                    <span className="material-icons-outlined fs-5">
                      visibility
                    </span>
                  </div>
                  <div>
                    <span className="text-danger d-flex align-items-center">
                      -35%{" "}
                      <i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">189K</h4>
                  <p className="mb-3">Today Products</p>
                  <div id="chart3">
                    <Chart
                      options={chartProducts}
                      series={chartProducts.series}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Sells */}
          <div
            className="col-12 col-lg-6 col-xxl-2 d-flex"
            style={{ height: "40%" }}
          >
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 text-warning">
                    <span className="material-icons-outlined fs-5">
                      leaderboard
                    </span>
                  </div>
                  <div>
                    <span className="text-success d-flex align-items-center">
                      +18%{" "}
                      <i className="material-icons-outlined">expand_less</i>
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="mb-0">24.6%</h4>
                  <p className="mb-3">Today Sells</p>
                  <div id="chart4">
                    <Chart
                      options={chartSells}
                      series={chartSells.series}
                      type="area"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-xl-8">
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
                <div id="chart5"></div>
                <div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
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
                        <span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
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
          </div> */}
        </div>
        {/* <!--end row--> */}

        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div>
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

                <div id="chart5"></div>
                <div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
                  <div className="d-flex align-items-center gap-4">
                    {/* <div>
                      <p className="mb-0 data-attributes">
                        <span data-peity='{"fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40}'>
                          5/7
                        </span>
                      </p>
                    </div> */}
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{"fill":["#2196f3","rgb(255 255 255 / 12%)"],"innerRadius":32,"radius":40}'
                          style={{ display: "none" }}
                        >
                          5/7
                        </span>
                        <svg className="peity" height="80" width="80">
                          <path
                            d="M 40 0 A 40 40 0 1 1 1.0028835127270526 48.90083735825258 L 8.802306810181644 47.120669886602066 A 32 32 0 1 0 40 8"
                            data-value="5"
                            fill="#2196f3"
                          />
                          <path
                            d="M 1.0028835127270526 48.90083735825258 A 40 40 0 0 1 39.99999999999999 0 L 39.99999999999999 8 A 32 32 0 0 0 8.802306810181644 47.120669886602066"
                            data-value="2"
                            fill="rgb(255 255 255 / 12%)"
                          />
                        </svg>
                      </p>
                    </div>

                    <div>
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
                    {/* <div>
                      <p className="mb-0 data-attributes">
                        <span data-peity='{"fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40}'>
                          5/7
                        </span>
                      </p>
                    </div> */}
                    <div className="">
                      <p className="mb-0 data-attributes">
                        <span
                          data-peity='{"fill":["#ffd200","rgb(255 255 255 / 12%)"],"innerRadius":32,"radius":40}'
                          style={{ display: "none" }}
                        >
                          5/7
                        </span>
                        <svg className="peity" height="80" width="80">
                          <path
                            d="M 40 0 A 40 40 0 1 1 1.0028835127270526 48.90083735825258 L 8.802306810181644 47.120669886602066 A 32 32 0 1 0 40 8"
                            data-value="5"
                            fill="#ffd200"
                          />
                          <path
                            d="M 1.0028835127270526 48.90083735825258 A 40 40 0 0 1 39.99999999999999 0 L 39.99999999999999 8 A 32 32 0 0 0 8.802306810181644 47.120669886602066"
                            data-value="2"
                            fill="rgb(255 255 255 / 12%)"
                          />
                        </svg>
                      </p>
                    </div>

                    <div>
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
          <div className="col-12 col-lg-6 col-xxl-4 d-flex">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Social Revenue</h5>
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
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <h3 className="mb-0">48,569</h3>
                    <p className="mb-0 text-success gap-3">
                      27%
                      <span className="material-icons-outlined fs-6">
                        arrow_upward
                      </span>
                    </p>
                  </div>
                  <p className="mb-0 font-13">Last 1 Year Income</p>
                </div>
                <div className="table-responsive">
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                        <img
                          src="assets/images/apps/17.png"
                          width="40"
                          alt=""
                        />
                        <div>
                          <h6 className="mb-0">Facebook</h6>
                          <p className="mb-0">Social Media</p>
                        </div>
                      </div>
                      <h5 className="mb-0">45,689</h5>
                      <div className="card-lable bg-success text-success bg-opacity-10">
                        <p className="text-success mb-0">+28.5%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                        <img
                          src="assets/images/apps/twitter-circle.png"
                          width="40"
                          alt=""
                        />
                        <div>
                          <h6 className="mb-0">Twitter</h6>
                          <p className="mb-0">Social Media</p>
                        </div>
                      </div>
                      <h5 className="mb-0">34,248</h5>
                      <div className="card-lable bg-danger text-danger bg-opacity-10">
                        <p className="text-red mb-0">-14.5%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                        <img
                          src="assets/images/apps/03.png"
                          width="40"
                          alt=""
                        />
                        <div>
                          <h6 className="mb-0">Tik Tok</h6>
                          <p className="mb-0">Entertainment</p>
                        </div>
                      </div>
                      <h5 className="mb-0">45,689</h5>
                      <div className="card-lable bg-success text-success bg-opacity-10">
                        <p className="text-green mb-0">+28.5%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                        <img
                          src="assets/images/apps/19.png"
                          width="40"
                          alt=""
                        />
                        <div>
                          <h6 className="mb-0">Instagram</h6>
                          <p className="mb-0">Social Media</p>
                        </div>
                      </div>
                      <h5 className="mb-0">67,249</h5>
                      <div className="card-lable bg-danger text-danger bg-opacity-10">
                        <p className="text-red mb-0">-43.5%</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
                        <img
                          src="assets/images/apps/20.png"
                          width="40"
                          alt=""
                        />
                        <div>
                          <h6 className="mb-0">Snapchat</h6>
                          <p className="mb-0">Conversation</p>
                        </div>
                      </div>
                      <h5 className="mb-0">89,178</h5>
                      <div className="card-lable bg-success text-success bg-opacity-10">
                        <p className="text-green mb-0">+24.7%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-4 d-flex">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Popular Products</h5>
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
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/top-products/01.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Apple Hand Watch</h6>
                      <p className="mb-0">Sale: 258</p>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-1">$199</h6>
                      <p className="mb-0 text-success font-13">+12%</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/top-products/02.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Mobile Phone Set</h6>
                      <p className="mb-0">Sale: 169</p>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-1">$159</h6>
                      <p className="mb-0 text-success font-13">+14%</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/top-products/04.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Grey Shoes Pair</h6>
                      <p className="mb-0">Sale: 859</p>
                    </div>
                    <div className="">
                      <div className="text-center">
                        <h6 className="mb-1">$279</h6>
                        <p className="mb-0 text-danger font-13">-12%</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/top-products/05.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Blue Yoga Mat</h6>
                      <p className="mb-0">Sale: 328</p>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-1">$389</h6>
                      <p className="mb-0 text-success font-13">+25%</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/top-products/06.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">White water Bottle</h6>
                      <p className="mb-0">Sale: 992</p>
                    </div>
                    <div className="text-center">
                      <h6 className="mb-1">$584</h6>
                      <p className="mb-0 text-danger font-13">-25%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12 col-xxl-4 d-flex">
            <div className="card w-100 rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Top Vendors</h5>
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
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/avatars/01.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Ajay Sidhu</h6>
                      <p className="mb-0">Sale: 879</p>
                    </div>
                    <div className="ratings">
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/avatars/02.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Ajay Sidhu</h6>
                      <p className="mb-0">Sale: 879</p>
                    </div>
                    <div className="ratings">
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined fs-5">star</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/avatars/03.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Ajay Sidhu</h6>
                      <p className="mb-0">Sale: 879</p>
                    </div>
                    <div className="ratings">
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/avatars/04.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Ajay Sidhu</h6>
                      <p className="mb-0">Sale: 879</p>
                    </div>
                    <div className="ratings">
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/images/avatars/08.png"
                      width="55"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">Ajay Sidhu</h6>
                      <p className="mb-0">Sale: 879</p>
                    </div>
                    <div className="ratings">
                      <span className="material-icons-outlined text-warning fs-5">
                        star
                      </span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                      <span className="material-icons-outlined fs-5">star</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}

        <div className="row">
          <div className="col-12 col-xxl-6 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Transactions</h5>
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
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Source Name</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/paypal.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Paypal</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-success text-success bg-opacity-10">
                            <p className="text-success mb-0">Paid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$5897</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/13.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Visa</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-danger text-danger bg-opacity-10">
                            <p className="text-danger mb-0">Unpaid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$9638</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/behance.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Behance</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-success text-success bg-opacity-10">
                            <p className="text-success mb-0">Paid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$9638</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/07.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Spotify</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-success text-success bg-opacity-10">
                            <p className="text-success mb-0">Paid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$9638</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/05.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Google</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-danger text-danger bg-opacity-10">
                            <p className="text-danger mb-0">Unpaid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$9638</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="">
                            <h6 className="mb-0">10 Sep,2024</h6>
                            <p className="mb-0">8:20 PM</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center flex-row gap-3">
                            <div className="">
                              <img
                                src="assets/images/apps/apple.png"
                                width="35"
                                alt=""
                              />
                            </div>
                            <div className="">
                              <h6 className="mb-0">Apple</h6>
                              <p className="mb-0">Business Plan</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="card-lable bg-success text-success bg-opacity-10">
                            <p className="text-success mb-0">Paid</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="mb-0">$9638</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3 d-flex flex-column">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <p className="mb-1">Messages</p>
                    <h3 className="mb-0">986</h3>
                  </div>
                  <div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
                    <span className="material-icons-outlined fs-5 text-white">
                      shopping_cart
                    </span>
                  </div>
                </div>
                <div className="progress mb-0" style={{ height: "6px" }}>
                  <div
                    className="progress-bar bg-grd-danger"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex align-items-center mt-3 gap-2">
                  <div className="card-lable bg-success bg-opacity-10">
                    <p className="text-success mb-0">+34.7%</p>
                  </div>
                  <p className="mb-0 font-13">from last month</p>
                </div>
              </div>
            </div>

            <div className="card rounded-4 w-100 d-none">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <div className="">
                      <p className="mb-2">Total Profit</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <h4 className="mb-0">$75,365</h4>
                      <div className="card-lable bg-danger bg-opacity-10">
                        <p className="text-danger mb-0">-26.9%</p>
                      </div>
                    </div>
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
                <div id="chart7"></div>
              </div>
            </div>

            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">$15.7K</h5>
                    <p className="mb-0">Total Profit</p>
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
                <div className="">
                  <div id="chart9"></div>
                </div>
                <div className="text-center mt-3">
                  <p className="mb-0">
                    <span className="text-success me-1">12.5%</span> from last
                    month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3 d-flex">
            <div className="card rounded-4 w-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="">
                    <h5 className="mb-0">Monthly Budget</h5>
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
                <div className="chart-container mb-2">
                  <div id="chart8"></div>
                </div>
                <div className="text-center">
                  <h3>$84,256</h3>
                  <p className="mb-3">
                    Vestibulum fermentum nisl id nulla ultricies convallis.
                  </p>
                  <button className="btn btn-grd btn-grd-info rounded-5 px-4">
                    Increase Budget
                  </button>
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

export default Home;
