import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Stock = () => {
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
                      Stock Report
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
                <div className="table-responsive">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <form className="d-flex justify-content-between flex-wrap main_form">
                      <div className="mb-2 lable1" style={{ width: "60%" }}>
                        <label className="form-label">Search Type</label>
                        <select className="form-select">
                          <option value="cod">All</option>
                          <option value="card">Done</option>
                          <option value="paypal">Pending</option>
                        </select>
                      </div>

                      <div className="mb-2 search" style={{ width: "20%" }}>
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
                          width: "15%",
                          marginTop: "28px",
                        }}
                      >
                        <button
                          onClick={() => window.print()}
                          className="btn btn-dark btn-sm w-100 d-flex justify-content-center align-items-center"
                          style={{ padding: "8px 0px" }}
                        >
                          <i className="bi bi-printer-fill me-2"></i>Print
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12"></div>
                </div>
                <hr className="mb-5" />

                <div className="table-responsive table_data">
                  <h2 className="fs-5 text-center mb-3">Stock Report</h2>
                  <table className="table table-bordered ">
                    <thead className="">
                      <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Unit</th>
                        <th>Purchase Qty</th>
                        <th>Purchase Return Qty</th>
                        <th>Sold Qty</th>
                        <th>Sold Return Qty</th>
                        <th>Damage Qty</th>
                        <th>Current Quantity</th>
                        <th>Stock Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>P000001</td>
                        <td>Logitech Mouse</td>
                        <td>Electronics</td>
                        <td>PCS</td>
                        <td>28</td>
                        <td>3</td>
                        <td>21</td>
                        <td>5</td>
                        <td>1</td>
                        <td>8</td>
                        <td>960.00</td>
                      </tr>
                      <tr>
                        <td>P000002</td>
                        <td>ABC Fan</td>
                        <td>Electronics</td>
                        <td>PCS</td>
                        <td>13</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                        <td>1</td>
                        <td>8</td>
                        <td>10400.00</td>
                      </tr>
                      <tr>
                        <td>P000002</td>
                        <td>ABC Fan</td>
                        <td>Electronics</td>
                        <td>PCS</td>
                        <td>13</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                        <td>1</td>
                        <td>8</td>
                        <td>10400.00</td>
                      </tr>
                      <tr>
                        <td colSpan="10" className="text-end">
                          <strong>Total</strong>
                        </td>
                        <td>50000</td>
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
  th,
  td {
    font-size: 13px;
  }
  .table {
    overflow-x: auto !important;
    overflow-y: auto !important;
  }
  @media screen and (max-width: 425px) {
    .main_form {
      flex-direction: column !important;
      width: 100%;
    }
    .lable1,
    .search {
      width: 100% !important;
      margin-bottom: 25px !important;
    }
    .print {
      width: 25% !important;
      margin-top: 0 !important;
      margin-bottom: 25px !important;
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

export default Stock;
