import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import flatpickr from "flatpickr";

const ProfitLoss = () => {
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
                      Profit & Loss
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto"></div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="row d-flex justify-content-between align-items-center">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className="">
                      <form className="d-flex align-items-center">
                        <div className="d-flex flex-wrap gap-3 main_form">
                          <div className="mb-2 lable1" style={{ width: "20%" }}>
                            <label className="form-label">Search Type</label>
                            <select className="form-select">
                              <option value="cod">All</option>
                              <option value="card">Done</option>
                              <option value="paypal">Pending</option>
                            </select>
                          </div>

                          <div className="mb-2 date1" style={{ width: "20%" }}>
                            <label className="form-label">
                              Pick a Start Date
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                            />
                          </div>

                          <div className="mb-2 date2" style={{ width: "20%" }}>
                            <label className="form-label">
                              Pick an End Date
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                            />
                          </div>

                          <div className="mb-2 search" style={{ width: "15%" }}>
                            <label className="form-label">Search</label>
                            <input
                              type="search"
                              id="form1"
                              className="form-control"
                              placeholder="Search"
                            />
                          </div>

                          <div
                            className="mb-2 d-flex justify-content-center align-items-center print"
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
                <hr className="mb-5" />

                {/* <div className="table_part">
                  <h2 className="fs-5 text-center">Profit & Loss Report</h2>
                  <div className="table">
                    <table className="profit_loss_talbe">
                      <thead>
                        <tr>
                          <th>Poduct Id</th>
                          <th>Product Name</th>
                          <th>Sold Qty</th>
                          <th>Purchase Rate</th>
                          <th>Purchase Total</th>
                          <th>Sold Amount</th>
                          <th>Profit/Loss</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td colSpan="7">
                            Invoice: 2022000001 | Sales Date: 07-15-2024 |
                            Customer Name: Walking customer | Discount: 0:00
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Total:</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
                <div className="table_part">
                  <h2 className="fs-5 text-center mb-3">
                    Profit & Loss Report
                  </h2>
                  <div className="table-responsive">
                    <table className="table profit_loss_table table-bordered">
                      <thead className="">
                        <tr>
                          <th>Product Id</th>
                          <th>Product Name</th>
                          <th>Sold Qty</th>
                          <th>Purchase Rate</th>
                          <th>Purchase Total</th>
                          <th>Sold Amount</th>
                          <th>Profit/Loss</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <strong>Invoice:</strong> 2022000001 |{" "}
                            <strong>Sales Date:</strong> 07-15-2024 |
                            <strong>Customer Name:</strong> Walking Customer |{" "}
                            <strong>Discount:</strong> 0.00
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Total:</strong>
                          </td>
                          <td className="text-start">0</td>
                          <td className="text-start">0</td>
                          <td className="text-end">0</td>
                        </tr>

                        <tr>
                          <td colSpan="7">
                            <strong>Invoice:</strong> 2022000002 |{" "}
                            <strong>Sales Date:</strong> 07-16-2024 |
                            <strong>Customer Name:</strong> Walking Customer |{" "}
                            <strong>Discount:</strong> 0.00
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">P000001</td>
                          <td className="text-start">Logigtech Mouse</td>
                          <td className="text-start">1</td>
                          <td className="text-start">120.00</td>
                          <td className="text-start">120.00</td>
                          <td className="text-start">250.00</td>
                          <td className="text-end">130.00</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Total:</strong>
                          </td>
                          <td className="text-start">120</td>
                          <td className="text-start">250</td>
                          <td className="text-end">130</td>
                        </tr>

                        <tr>
                          <td colSpan="7">
                            <strong>Invoice:</strong> 2022000002 |{" "}
                            <strong>Sales Date:</strong> 07-16-2024 |
                            <strong>Customer Name:</strong> Walking Customer |{" "}
                            <strong>Discount:</strong> 0.00
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">P000002</td>
                          <td className="text-start">ABC Fan</td>
                          <td className="text-start">1</td>
                          <td className="text-start">1300.00</td>
                          <td className="text-start">1300.00</td>
                          <td className="text-start">1500.00</td>
                          <td className="text-end">250.00</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Total:</strong>
                          </td>
                          <td className="text-start">1300</td>
                          <td className="text-start">1500</td>
                          <td className="text-end">250</td>
                        </tr>
                        {/* ==== grand total ==== */}
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Grand Total:</strong>
                          </td>
                          <td className="text-start">38310</td>
                          <td className="text-start">52260</td>
                          <td className="text-end">13950</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Others Income:</strong>
                          </td>
                          <td colSpan="2"></td>
                          <td className="text-end">12555.00</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Total Discount:</strong>
                          </td>
                          <td colSpan="2"></td>
                          <td className="text-end">735</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Expense:</strong>
                          </td>
                          <td colSpan="2"></td>
                          <td className="text-end">325.00</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Employee Payment:</strong>
                          </td>
                          <td colSpan="2"></td>
                          <td className="text-end">95012.00</td>
                        </tr>
                        <tr>
                          <td colSpan="4" className="text-end">
                            <strong>Profit:</strong>
                          </td>
                          <td colSpan="2"></td>
                          <td className="text-end">-69567.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
  .table_part {
    margin: 20px auto;
    width: 100%;
  }

  .profit_loss_table th,
  .profit_loss_table td {
    text-align: center;
    vertical-align: middle;
    padding: 8px;
  }

  .profit_loss_table td[colspan="7"] {
    text-align: left;
    font-weight: bold;
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

export default ProfitLoss;
