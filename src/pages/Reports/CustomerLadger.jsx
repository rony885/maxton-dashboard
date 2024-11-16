import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const CustomerLadger = () => {
  useEffect(() => {
    flatpickr(".datepicker", {});

    flatpickr(".time-picker", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "Y-m-d H:i",
    });

    flatpickr(".date-time", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });

    flatpickr(".date-format", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });

    flatpickr(".date-range", {
      mode: "range",
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });

    flatpickr(".date-inline", {
      inline: true,
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });
  }, []);

  return (
    <Wrapper>
      <main className="main-wrapper">
        <div className="main-content">
          {/* <!--breadcrumb--> */}
          <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div className="home_title d-sm-flex align-items-center mb-2">
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
                      Customer Ladger
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              {/* <div className="d-flex justify-content-end align-items-center add_catry">
                <i className="bi bi-plus-circle align-baseline me-1"></i>
                <button className="buttn" onClick={openModal}>
                  <TbCirclePlus className="fs-6" />
                  <span className="bttn_title">Add Category</span>
                </button>
              </div> */}
            </div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="row d-flex justify-content-between align-items-center">
            {/* <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="">
                <form className="d-flex justify-content-between align-items-center">
                  <div className="row">
                    <div className="">
                      <label className="form-label">Customer</label>
                      <select className="form-select mb-4">
                        <option value="cod">Processing</option>
                        <option value="card">Done</option>
                        <option value="paypal">Pending</option>
                      </select>
                    </div>

                    <div className="">
                      <label className="form-label">Pick a Date</label>
                      <input type="text" className="form-control datepicker" />
                    </div>

                    <div className="">
                      <label className="form-label">Pick a Date</label>
                      <input type="text" className="form-control datepicker" />
                    </div>

                    <div className="input d-flex col-lg-4">
                      <input
                        type="search"
                        id="form1"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <div className="col-lg-10 col-md-12 col-sm-12">
                    <div>
                      <form className="d-flex align-items-center">
                        <div className="d-flex flex-wrap gap-3 main_form">
                          <div className="mb-3 lable1" style={{ width: "20%" }}>
                            <label className="form-label">Customer</label>
                            <select className="form-select">
                              <option value="cod">Walking Customer</option>
                              <option value="card">Done</option>
                              <option value="paypal">Pending</option>
                            </select>
                          </div>

                          <div className="mb-3 date1" style={{ width: "20%" }}>
                            <label className="form-label">
                              Pick a Start Date
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                            />
                          </div>

                          <div className="mb-3 date2" style={{ width: "20%" }}>
                            <label className="form-label">
                              Pick an End Date
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                            />
                          </div>

                          <div className="mb-3 search" style={{ width: "15%" }}>
                            <label className="form-label">Search</label>
                            <input
                              type="search"
                              id="form1"
                              className="form-control"
                              placeholder="Search"
                            />
                          </div>

                          <div
                            className="mb-3 d-flex justify-content-center align-items-center print"
                            style={{
                              width: "10%",
                              marginTop: "28px",
                            }}
                          >
                            <button
                              onClick={() => window.print()}
                              className="btn btn-dark btn-sm w-100 d-flex justify-content-center align-items-center"
                              style={{ padding: "7px 0px" }}
                            >
                              <i className="bi bi-printer-fill me-2"></i>Print
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-12 col-sm-12"></div>
                </div>
                <hr className="mb-3" />

                <div
                  className="table_data"
                  style={{ overflowX: "auto", marginTop: "30px" }}
                >
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Bill</th>
                        <th>Paid</th>
                        <th>Due</th>
                        <th>Returned</th>
                        <th>Payment</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start">Opening Balance</td>
                        <td colSpan="6"></td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>09-15-2024</td>
                        <td>Sales 2022000001</td>
                        <td>15,000.00</td>
                        <td>100.00</td>
                        <td>14,900.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>15,000.00</td>
                      </tr>
                      <tr>
                        <td>10-16-2024</td>
                        <td>Sales 2022000002</td>
                        <td>250.00</td>
                        <td>250.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>14,000.00</td>
                      </tr>
                      <tr>
                        <td>11-16-2024</td>
                        <td>Sales 2022000003</td>
                        <td>250.00</td>
                        <td>250.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>20,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .table {
    overflow-x: auto !important;
    overflow-y: auto !important;
  }
  @media screen and (max-width: 768px) {
    .main_form {
      flex-direction: column !important;
      width: 100%;
    }
    .lable1,
    .date1,
    .date2,
    .search {
      width: 100% !important;
    }
    .print {
      width: 20% !important;
      margin-top: 0 !important;
    }
  }
  @media screen and (max-width: 320px) {
    .print {
      width: 30% !important;
    }
  }
  /* ====== home responsive ====== */
  @media screen and (max-width: 768px) {
    .page-breadcrumb {
      display: block !important;
    }
    .home_title {
      display: flex !important;
    }
  }
  @media screen and (max-width: 425px) {
    .page-breadcrumb {
      display: block !important;
    }
    .home_title {
      display: flex !important;
    }
    .breadcrumb-title,
    .breadcrumb-item,
    .texxt,
    .texxt_icon {
      font-size: 14px !important;
    }
  }
  @media screen and (max-width: 320px) {
    .breadcrumb-title,
    .breadcrumb-item,
    .texxt,
    .texxt_icon {
      font-size: 14px !important;
    }
  }
`;

export default CustomerLadger;
