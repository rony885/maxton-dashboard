import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SalesInvoice = () => {
  return (
    <Wrapper>
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
                    Sales Invoice
                  </li>
                </ol>
              </nav>
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
            {/* <div className=" "></div> */}
            <div className="col-lg-3 col-md-12 col-sm-12"></div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <form>
                <div className="row d-flex align-items-center">
                  <div
                    className="form-outline mb-4 col-lg-4 d-flex procss"
                    style={{ width: "65%" }}
                  >
                    <select className="form-select">
                      <option value="processing">2022000022</option>
                      <option value="done">2022000023</option>
                      <option value="pending">2022000024</option>
                    </select>
                  </div>

                  <div
                    className="input d-flex mb-4 col-lg-4"
                    style={{ width: "20%" }}
                  >
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>

                  <div
                    // className="print d-flex justify-content-center align-items-center mb-4 col-lg-4"
                    className="mb-4 col-lg-4"
                    style={{ width: "15%" }}
                  >
                    {/* <h5 className="mb-0">Print</h5> */}
                    {/* <button className="btn btn-danger btn-sm me-2">
                      <i className="bi bi-file-earmark-pdf me-2"></i>Export as
                      PDF
                    </button> */}
                    <button
                      onClick={() => window.print()}
                      className="btn btn-dark btn-sm d-flex justify-content-center align-items-center py-2"
                    >
                      <i className="bi bi-printer-fill me-2"></i>Print
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-3 col-md-12 col-sm-12"></div>
          </div>

          <div className=" mb-4">
            <div className="Sales_Invoice">
              <h2>Sales Invoice</h2>
            </div>
            {/* <div className="row d-flex justify-content-start align-items-center sales_title mb-4">
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h5 className="sales_thh">Customer ID</h5>
                <h5 className="sales_thh">Customer Name</h5>
                <h5 className="sales_thh">Customer Address</h5>
                <h5 className="sales_thh">Customer no</h5>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 text-start">
                <h5 className="sales_thh">: C000001</h5>
                <h5 className="sales_thh">: Walking Customer</h5>
                <h5 className="sales_thh">:</h5>
                <h5 className="sales_thh">:</h5>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 align-items-center">
                <h5 className="sales_thh">Invoice no</h5>
                <h5 className="sales_thh">Sales Date</h5>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 align-items-center">
                <h5 className="sales_thh">: 0022000022</h5>
                <h5 className="sales_thh">: 2022-09-07 00:00:00</h5>
              </div>
            </div> */}

            <div className="d-flex justify-content-start align-items-center sales_title mb-4">
              <div className="divv1" style={{ width: "25%" }}>
                <h5 className="sales_thh">Customer ID</h5>
                <h5 className="sales_thh">Customer Name</h5>
                <h5 className="sales_thh">Customer Address</h5>
                <h5 className="sales_thh">Customer no</h5>
              </div>
              <div className="divv2" style={{ width: "25%" }}>
                <h5 className="sales_thh">: C000001</h5>
                <h5 className="sales_thh">: Walking Customer</h5>
                <h5 className="sales_thh">:</h5>
                <h5 className="sales_thh">:</h5>
              </div>
              <div className="divv3" style={{ width: "25%", textAlign: "end" }}>
                <h5 className="sales_thh d-flex justify-content-end align-content-end">
                  Invoice no
                </h5>
                <h5 className="sales_thh d-flex justify-content-end align-content-end">
                  Sales Date
                </h5>
              </div>
              <div className="divv4" style={{ width: "25%", textAlign: "end" }}>
                <h5 className="sales_thh d-flex justify-content-end align-content-end">
                  : 0022000022
                </h5>
                <h5 className="sales_thh d-flex justify-content-end align-content-end">
                  : 2022-09-07 00:00:00
                </h5>
              </div>
            </div>

            <div className="table-responsive mb-4">
              <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th scope="col" style={{ width: "15%" }}>
                      Sl No.
                    </th>
                    <th scope="col" style={{ width: "30%" }}>
                      Product Name
                    </th>
                    <th scope="col" style={{ width: "15%" }}>
                      Quantity
                    </th>
                    <th scope="col" style={{ width: "20%" }}>
                      Rate
                    </th>
                    <th
                      scope="col"
                      style={{ width: "20%" }}
                      className="text-end"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "15%" }}>1</td>
                    <td style={{ width: "30%" }}>Logitech Mouse</td>
                    <td style={{ width: "15%" }}>2</td>
                    <td style={{ width: "20%" }}>250.00</td>
                    <td style={{ width: "20%" }} className="text-end">
                      500
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "15%" }}>2</td>
                    <td style={{ width: "30%" }}>Laptop</td>
                    <td style={{ width: "15%" }}>1</td>
                    <td style={{ width: "20%" }}>20000.00</td>
                    <td style={{ width: "20%" }} className="text-end">
                      20000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-3 col-md-12 col-sm-12"></div>
              <div className="col-lg-3 col-md-12 col-sm-12"></div>

              <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="total_account ">
                  <p className="d-flex justify-content-between align-items-center">
                    <strong className="">
                      Sub Total<span style={{ marginLeft: "8px" }}>:</span>
                    </strong>
                    <strong className="">20,500.00</strong>
                  </p>
                  <p className="d-flex justify-content-between align-items-center">
                    <strong className="">
                      Vat <span style={{ marginLeft: "47px" }}>:</span>
                    </strong>
                    <strong className="">0.00</strong>
                  </p>
                  <p className="d-flex justify-content-between align-items-center">
                    <strong>
                      Transport<span style={{ marginLeft: "4px" }}>:</span>
                    </strong>
                    <strong>0.00</strong>
                  </p>
                  <p className="d-flex justify-content-between align-items-center mb-0">
                    <strong>
                      Discount<span style={{ marginLeft: "10px" }}>:</span>
                    </strong>
                    <strong>100.00</strong>
                  </p>
                  <hr className="m-0" />
                  <p className="d-flex justify-content-between align-items-center mb-0">
                    <strong>
                      Total<span style={{ marginLeft: "39px" }}>:</span>
                    </strong>
                    <strong>20,400.00</strong>
                  </p>
                  <p className="d-flex justify-content-between align-items-center mb-0">
                    <strong>
                      Paid<span style={{ marginLeft: "43px" }}>:</span>
                    </strong>
                    <strong>20,400.00</strong>
                  </p>
                  <hr className="m-0" />
                  <p className="d-flex justify-content-between align-items-center mb-0">
                    <strong>
                      Due<span style={{ marginLeft: "46px" }}>:</span>
                    </strong>
                    <strong>0.00</strong>
                  </p>
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
  .print {
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ced4da;
    padding: 8px 0px !important;
    border-radius: 4px;
  }
  .print h5 {
    font-size: 14px !important;
    color: #333;
  }
  .Sales_Invoice h2 {
    background-color: #f8f9fa;
    border-radius: 4px;
    color: #000;
    text-align: center;
    font-size: 18px;
    padding: 10px 0px;
  }
  .sales_thh {
    font-size: 14px;
    /* font-family: Cambria; */
  }
  /* ========================== */
  .sales_thh {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    .sales_title {
      /* flex-direction: row !important; */
    }
  }

  @media screen and (max-width: 425px) {
    .sales_title {
      overflow-x: auto !important;
      white-space: nowrap;
    }

    .sales_title h5 {
      font-size: 14px; /* Adjust font size for smaller screens */
    }

    .sales_title div {
      width: 100% !important;
    }
    .divv1,
    .divv2,
    .divv3,
    .divv4 {
      /* width: 100% !important; */
    }
    .divv3,
    .divv4 {
      text-align: end !important;
    }
  }
  @media screen and (max-width: 320px) {
    .row > * {
      padding-right: calc(var(--bs-gutter-x) * 0) !important;
      padding-left: calc(var(--bs-gutter-x) * 0) !important;
    }
  }
`;

export default SalesInvoice;
