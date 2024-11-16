import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SalesDataTable from "./SalesDataTable";

const SellProductsList = () => {
  const sampleData = [
    {
      id: 1,
      date: "03-11-2024",
      invoice_no: "04-241000008",
      courier: "Pathao",
      customer: "Hashib",
      total_price: "1,200.00",
      discount: "200",
      delivery_charge: "150",
      grand_total: "1,150.00",
    },
    {
      id: 2,
      date: "05-11-2024",
      invoice_no: "04-241000009",
      courier: "-",
      customer: "Arif",
      total_price: "1,500.00",
      discount: "300",
      delivery_charge: "100",
      grand_total: "1,300.00",
    },
    {
      id: 3,
      date: "06-11-2024",
      invoice_no: "04-241000010",
      courier: "RedX",
      customer: "Nazmul",
      total_price: "2,000.00",
      discount: "400",
      delivery_charge: "200",
      grand_total: "1,800.00",
    },
    {
      id: 4,
      date: "07-11-2024",
      invoice_no: "04-241000011",
      courier: "Sundarban",
      customer: "Kamal",
      total_price: "1,750.00",
      discount: "250",
      delivery_charge: "150",
      grand_total: "1,650.00",
    },
    {
      id: 5,
      date: "08-11-2024",
      invoice_no: "04-241000012",
      courier: "-",
      customer: "Jamal",
      total_price: "900.00",
      discount: "100",
      delivery_charge: "80",
      grand_total: "880.00",
    },
    {
      id: 6,
      date: "09-11-2024",
      invoice_no: "04-241000013",
      courier: "PaperFly",
      customer: "Musa",
      total_price: "1,300.00",
      discount: "200",
      delivery_charge: "100",
      grand_total: "1,200.00",
    },
    {
      id: 7,
      date: "10-11-2024",
      invoice_no: "04-241000014",
      courier: "-",
      customer: "Sadi",
      total_price: "2,500.00",
      discount: "500",
      delivery_charge: "200",
      grand_total: "2,200.00",
    },
    {
      id: 8,
      date: "11-11-2024",
      invoice_no: "04-241000015",
      courier: "-",
      customer: "Nabil",
      total_price: "1,100.00",
      discount: "100",
      delivery_charge: "90",
      grand_total: "1,090.00",
    },
    {
      id: 9,
      date: "12-11-2024",
      invoice_no: "04-241000016",
      courier: "Sundarban",
      customer: "Ali",
      total_price: "3,000.00",
      discount: "500",
      delivery_charge: "250",
      grand_total: "2,750.00",
    },
    {
      id: 10,
      date: "13-11-2024",
      invoice_no: "04-241000017",
      courier: "E-Courier",
      customer: "Asif",
      total_price: "1,400.00",
      discount: "150",
      delivery_charge: "120",
      grand_total: "1,370.00",
    },
  ];

  // Filter for entries where the courier is "-"
  const noCourierData = sampleData.filter((item) => item.courier === "-");

  console.log(noCourierData);

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
                      Seles
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              {/* <div className="d-flex justify-content-end align-items-center add_catry">
                <i className="bi bi-plus-circle align-baseline me-1"></i>
                <button className="buttn">
                  <TbCirclePlus className="fs-6" />
                  <span className="bttn_title">
                    <Link
                      to="/sell-product-add"
                      className="order_link text-dark"
                    >
                      Add Sales
                    </Link>
                  </span>
                </button>
              </div> */}
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/sell-product-add"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <TbCirclePlus className="fs-6 text-white texxt_icon" />
                    <span className="text-white texxt">Add Sales</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}
          <div className="layout">
            <div className="orderList_wrapper">
              <div className="orderList">
                <div className="row d-flex justify-content-between align-items-center order_row mb-4">
                  <div className="col-6">
                    <div className="d-flex justify-content-start align-items-center order_title">
                      {/* <h4 className="m-0 fs-5">Order</h4> */}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center add_order">
                      {/* <i className="bi bi-plus-circle align-baseline me-1"></i>
                      <button className="buttn">
                        <TbCirclePlus className="fs-6" />
                        <span className="bttn_title">
                          <Link to="/orderadd" className="order_link">
                            Add Order
                          </Link>
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="row row-cols-xxl-5 row-cols-lg-5 row-cols-md-2 row-cols-1 mb-4 carrd">
                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-primary"
                      className="card mb-4 card-animate bg-light border-3 border border-success"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">6</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          New
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-warning"
                      className="card mb-4 card-animate bg-light border-3 border border-primary"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Pending
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-info"
                      className="card mb-4 card-animate bg-light border-3 border border-danger"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">3</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Approved
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-warning"
                      className="card mb-4 card-animate bg-light border-3 border border"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Packaging
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-warning"
                      className="card mb-4 card-animate bg-light border-3 border border-info"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Shipment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-success"
                      className="card mb-4 card-animate bg-light border-3 border border-warning"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">1</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Delivered
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-warning"
                      className="card mb-4 card-animate bg-light border-3 border border-success"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Return
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-danger"
                      className="card mb-4 card-animate bg-light border-3 border border-primary"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Cancel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-warning"
                      className="card mb-4 card-animate bg-light border-3 border border-danger"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">0</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Wholesale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      // className="card border-3 mb-4 card-animate border-secondary"
                      className="card mb-4 card-animate bg-light border-3 border border-warning"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="card-boddy">
                        <h4 className="mb-4">
                          <span className="fs-6 numm">10</span>
                        </h4>
                        <p className="fw-medium text-uppercase mb-0 textt">
                          Total
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-lg-12">
                    <SalesDataTable data={sampleData} />
                  </div>
                </div>
              </div>

              {/* ===== Custom Modal ===== */}
              {/* {isModalOpen && (
                <div className="custom-modal">
                  <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <h2 className="text-dark">Add Sales Product</h2>

                    <form>
                      <label className="text-dark">
                        Seles Product Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter seles sroduct name"
                      />

                      <label className="text-dark">Status</label>
                      <select>
                        <option value="Select">Select</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>

                      <label className="text-dark">Image</label>
                      <input type="file" className="text-dark" />

                      <div className="modal-actions">
                        <button type="reset" className="cancel-btn">
                          Cancel
                        </button>
                        <button type="submit" className="add-btn">
                          Edit Sales Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )} */}

              {/* ===== Edit Modal ===== */}
              <div className="modal fade" id="edit_salesProd_modal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header border-bottom-0 py-2 bg-grd-info">
                      <h5 className="modal-title">Update Order</h5>
                      <Link
                        to="#"
                        className="primaery-menu-close"
                        data-bs-dismiss="modal"
                      >
                        <i className="material-icons-outlined">close</i>
                      </Link>
                    </div>
                    <div className="modal-body">
                      <div className="form-body">
                        <form className="row g-3">
                          <div className="col-12">
                            <label className="form-label">
                              Courier <span className="text-danger">*</span>
                            </label>
                            <select className="form-select">
                              <option value="">Pathao</option>
                              <option value="Active">Steadfast</option>
                              <option value="Inactive">Sundarban</option>
                            </select>
                          </div>

                          <div className="col-12">
                            <label className="form-label">
                              Delivery Status{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select className="form-select">
                              <option value="">Pending</option>
                              <option value="Active">Approved</option>
                              <option value="Inactive">Packaging</option>
                            </select>
                          </div>

                          <div className="col-12 d-md-flex d-grid align-items-center gap-3 mt-4">
                            <button
                              type="reset"
                              className="btn btn-grd-danger px-4"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn btn-grd-info px-4"
                            >
                              Add Brand
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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
  .layout {
  }
  .blog-wrapper {
  }
  .orderList {
    /* padding: 20px 20px; */
  }
  .order_row .order_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .buttn {
    /* background-color: #1d2634; */
    background-color: #fff;
    /* color: #fff; */
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    font-weight: 700;
  }
  /* .add_order .buttn:hover {
    background-color: #424141;
  } */
  .order_link {
    text-decoration: none;
    color: #fff;
  }
  .order_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .card-boddy {
    padding: 8px 0 !important;
  }
  .numm {
    margin-left: 12px;
  }
  .orderList .textt {
    font-size: 12px !important;
    /* color: #fff !important; */
    margin-left: 12px;
  }
  .card-animate {
    background-color: transparent;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .card-animate:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  /* .search {
        font-size: 12px !important;
        padding: 14px 5px !important;
      } */
  .buttn_text {
    font-size: 12px;
  }
  /* ======= */
  .table-header {
    display: flex;
    align-items: center;
    margin-top: 40px;
    /* overflow: hidden !important;
        overflow: scroll !important; */
  }

  .table-col {
    flex: 1;
    padding: 8px;
    /* border: 1px solid #ccc; */
    /* overflow: hidden !important; */
  }

  .sortable {
    display: flex;
    /* justify-content: space-between; */
    cursor: pointer;
  }
  .input_text {
    font-size: 12px !important;
    cursor: pointer;
    padding: 0px;
    margin-top: 1px;
    vertical-align: middle;
    position: relative;
  }
  .ttext {
    font-size: 12px !important;
  }
  input:focus {
    outline: none;
    box-shadow: none;
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

export default SellProductsList;
