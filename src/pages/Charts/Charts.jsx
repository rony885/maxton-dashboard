/* eslint-disable no-script-url */
import React from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const Charts = () => {
  // Area Chart options
  // const areaChartOptions = {
  //   chart: {
  //     type: "area",
  //   },
  //   series: [
  //     {
  //       name: "Series 1",
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //   ],
  //   xaxis: {
  //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //   },
  // };

  // Line Chart options
  // const lineChartOptions = {
  //   chart: {
  //     type: "line",
  //   },
  //   series: [
  //     {
  //       name: "Series 1",
  //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  //     },
  //   ],
  //   xaxis: {
  //     categories: [
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sep",
  //     ],
  //   },
  // };

  // Bar Chart options
  // const barChartOptions = {
  //   chart: {
  //     type: "bar",
  //   },
  //   series: [
  //     {
  //       name: "Series 1",
  //       data: [44, 55, 41, 64, 22, 43, 21],
  //     },
  //   ],
  //   xaxis: {
  //     categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  //   },
  // };

  // Pie Chart options
  const pieChartOptions = {
    chart: {
      type: "pie",
    },
    series: [44, 55, 13, 43],
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
  };

  // Donut Chart options
  const donutChartOptions = {
    chart: {
      type: "donut",
    },
    series: [25, 15, 44, 55],
    labels: ["Banana", "Strawberry", "Blueberry", "Lemon"],
  };

  // Radial Chart options
  // const radialChartOptions = {
  //   chart: {
  //     type: "radialBar",
  //   },
  //   series: [67],
  //   labels: ["Progress"],
  // };

  // Radial Bar Chart options
  // const radialBarChartOptions = {
  //   chart: {
  //     type: "radialBar",
  //   },
  //   series: [44, 55, 67, 83],
  //   labels: ["Apple", "Mango", "Orange", "Banana"],
  // };

  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* Breadcrumb */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Components</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Apex Chart
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          {/* Area Chart */}
          {/* <div className="col-12 col-xl-12">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Area Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={areaChartOptions}
                  series={areaChartOptions.series}
                  type="area"
                  height="350"
                />
              </div>
            </div>
          </div> */}

          {/* Line Chart */}
          {/* <div className="col-12 col-xl-12">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Line Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={lineChartOptions}
                  series={lineChartOptions.series}
                  type="line"
                  height="350"
                />
              </div>
            </div>
          </div> */}

          {/* Bar Chart */}
          {/* <div className="col-12 col-xl-12">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Bar Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={barChartOptions}
                  series={barChartOptions.series}
                  type="bar"
                  height="350"
                />
              </div>
            </div>
          </div> */}

          {/* Pie Chart */}
          <div className="col-12 col-xl-6">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Pie Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={pieChartOptions}
                  series={pieChartOptions.series}
                  type="pie"
                  height="350"
                />
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="col-12 col-xl-6">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Donut Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={donutChartOptions}
                  series={donutChartOptions.series}
                  type="donut"
                  height="350"
                />
              </div>
            </div>
          </div>

          {/* Radial Chart */}
          {/* <div className="col-12 col-xl-6">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Radial Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={radialChartOptions}
                  series={radialChartOptions.series}
                  type="radialBar"
                  height="350"
                />
              </div>
            </div>
          </div> */}

          {/* Radial Bar Chart */}
          {/* <div className="col-12 col-xl-6">
            <div className="card rounded-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Radial Bar Chart</h5>
              </div>
              <div className="card-body">
                <Chart
                  options={radialBarChartOptions}
                  series={radialBarChartOptions.series}
                  type="radialBar"
                  height="350"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Charts;
