import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SupplierDataTable from "./SupplierDataTable";

const Supplier = () => {
  const supplierData = [
    {
      id: 1,
      supplierId: "SUP-00001",
      name: "AB EnterPrise",
      status: "Active",
      phone: "01700511820",
      logo: "logo",
    },
    {
      id: 2,
      supplierId: "SUP-00002",
      name: "Global Supplies Co.",
      status: "Inactive",
      phone: "01934567890",
      logo: "logo",
    },
    {
      id: 3,
      supplierId: "SUP-00003",
      name: "Tech Solutions Ltd.",
      status: "Active",
      phone: "01755678901",
      logo: "logo",
    },
    {
      id: 4,
      supplierId: "SUP-00004",
      name: "Green Field Goods",
      status: "Active",
      phone: "01698765432",
      logo: "logo",
    },
    {
      id: 5,
      supplierId: "SUP-00005",
      name: "Prime Distributors",
      status: "Inactive",
      phone: "01823456789",
      logo: "logo",
    },
  ];

  return (
    <Wrapper>
      <main className="main-wrapper">
        <div className="main-content">
          {/* <!--breadcrumb--> */}
          <div className="page-breadcrumb d-sm-flex align-items-center mb-3">
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
                      Supplier
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_supplier_modal"
                >
                  Add Supplier
                </button>
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}
          <div className="layout">
            <div className="courier_wrapper">
              <div className="courier">
                <div className="mb-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-12">
                      <SupplierDataTable data={supplierData} />
                    </div>
                  </div>
                </div>

                {/* ===== Custom Modal ===== */}
                <div className="modal fade" id="add_supplier_modal">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 bg-grd-primary py-2">
                        <h5 className="modal-title">Order Summary</h5>
                        <Link
                          to="#"
                          className="primaery-menu-close"
                          data-bs-dismiss="modal"
                        >
                          <i className="material-icons-outlined">close</i>
                        </Link>
                      </div>
                      <div className="modal-body">
                        <div className="order-summary">
                          <div className="card mb-0">
                            <div className="card-body">
                              {/* <div className="card border bg-transparent shadow-none mb-3">
                                <div className="card-body">
                                  <p className="fs-5">Apply Discount Code</p>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter discount code"
                                    />
                                    <button
                                      className="btn btn-grd-primary"
                                      type="button"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="card border bg-transparent shadow-none">
                                <div className="card-body">
                                  <p className="fs-5">Order summary</p>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      to="#"
                                      className="d-block flex-shrink-0"
                                    >
                                      <img
                                        src="assets/images/top-products/06.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          White Polo T-Shirt
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $19.<small>00</small>
                                        </span>
                                        <span className="">x 1</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      to="#"
                                      className="d-block flex-shrink-0"
                                    >
                                      <img
                                        src="assets/images/top-products/05.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          White Polo T-Shirt
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $19.<small>00</small>
                                        </span>
                                        <span className="">x 1</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      to="#"
                                      className="d-block flex-shrink-0"
                                    >
                                      <img
                                        src="assets/images/top-products/04.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          White Polo T-Shirt
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $19.<small>00</small>
                                        </span>
                                        <span className="">x 1</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      className="d-block flex-shrink-0"
                                      to="#"
                                    >
                                      <img
                                        src="assets/images/top-products/03.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          Fancy Red Sneakers
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $16.<small>00</small>
                                        </span>
                                        <span className="">x 2</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      className="d-block flex-shrink-0"
                                      to="#"
                                    >
                                      <img
                                        src="assets/images/top-products/02.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          Yellow Shine Blazer
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $22.<small>00</small>
                                        </span>
                                        <span className="">x 1</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="my-3 border-top"></div>
                                  <div className="d-flex align-items-center gap-3">
                                    <Link
                                      className="d-block flex-shrink-0"
                                      to="#"
                                    >
                                      <img
                                        src="assets/images/top-products/01.png"
                                        width="60"
                                        height="60"
                                        alt="Product"
                                      />
                                    </Link>
                                    <div className="ps-2">
                                      <h6 className="mb-1">
                                        <Link
                                          to="#"
                                          className="text-white"
                                        >
                                          Men Black Hat Cap
                                        </Link>
                                      </h6>
                                      <div className="widget-product-meta">
                                        <span className="me-2">
                                          $14.<small>00</small>
                                        </span>
                                        <span className="">x 1</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card border bg-transparent mb-0 shadow-none">
                                <div className="card-body">
                                  <p className="mb-2">
                                    Subtotal:
                                    <span className="float-end">$198.00</span>
                                  </p>
                                  <p className="mb-2">
                                    Shipping:
                                    <span className="float-end">--</span>
                                  </p>
                                  <p className="mb-2">
                                    Taxes:
                                    <span className="float-end">$14.00</span>
                                  </p>
                                  <p className="mb-0">
                                    Discount:
                                    <span className="float-end">--</span>
                                  </p>
                                  <div className="my-3 border-top"></div>
                                  <h5 className="mb-0">
                                    Order Total:
                                    <span className="float-end">212.00</span>
                                  </h5>
                                </div>
                              </div> */}

                              <form action="#" noValidate>
                                <div className="modal-header">
                                  <h5
                                    className="modal-title fs-6"
                                    id="SupplierAddModalLabel"
                                  >
                                    Add Supplier
                                  </h5>
                                  {/* <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={handleCloseModal}
                                  ></button> */}
                                </div>
                                <div className="modal-body">
                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Supplier Name
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <input
                                        name="name"
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value=""
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Status<span></span>
                                    </label>
                                    <div className="input-group">
                                      <select
                                        name="s_status"
                                        className="form-control form-select"
                                        id="s_status"
                                      >
                                        <option value="">Select</option>
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                      </select>
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Address
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <textarea
                                        name="address"
                                        id="address"
                                        className="form-control"
                                      ></textarea>
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Phone
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <input
                                        name="phone"
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                        value=""
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Email<span></span>
                                    </label>
                                    <div className="input-group">
                                      <input
                                        name="email"
                                        type="text"
                                        id="email"
                                        className="form-control"
                                        value=""
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Logo<span></span>
                                    </label>
                                    <input
                                      name="logo"
                                      type="file"
                                      id="logo"
                                      className="form-control"
                                    />
                                    <div className="invalid-feedback"></div>
                                  </div>
                                </div>

                                {/* <div className="modal-footer">
                                  <div className="hstack gap-2 justify-content-end">
                                    <button type="reset" className="bttn">
                                      Cancel
                                    </button>
                                    <button type="submit" className="bttn1">
                                      Add
                                    </button>
                                  </div>
                                </div> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn btn-grd-danger"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-grd-info">
                          Add Supplier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== Edit Modal ===== */}
                <div className="modal fade" id="edit_supplier_modal">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 bg-grd-primary py-2">
                        <h5 className="modal-title">Order Summary</h5>
                        <Link
                          to="#"
                          className="primaery-menu-close"
                          data-bs-dismiss="modal"
                        >
                          <i className="material-icons-outlined">close</i>
                        </Link>
                      </div>
                      <div className="modal-body">
                        <div className="order-summary">
                          <div className="card mb-0">
                            <div className="card-body">
                              <form action="#" noValidate>
                                <div className="modal-header">
                                  <h5
                                    className="modal-title fs-6"
                                    id="SupplierAddModalLabel"
                                  >
                                    Add Supplier
                                  </h5>
                                </div>
                                <div className="modal-body">
                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Supplier Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <input
                                        name="name"
                                        type="text"
                                        id="name"
                                        className="form-control"
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>
                                  <div className="form-outline mb-4">
                                    <label className="form-label">Status</label>
                                    <div className="input-group">
                                      <select
                                        name="s_status"
                                        className="form-control form-select"
                                        id="s_status"
                                      >
                                        <option value="">Select</option>
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                      </select>
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>
                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Address{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <textarea
                                        name="address"
                                        id="address"
                                        className="form-control"
                                      ></textarea>
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>
                                  <div className="form-outline mb-4">
                                    <label className="form-label">
                                      Phone{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                      <input
                                        name="phone"
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>
                                  <div className="form-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <div className="input-group">
                                      <input
                                        name="email"
                                        type="text"
                                        id="email"
                                        className="form-control"
                                      />
                                      <div className="invalid-feedback"></div>
                                    </div>
                                  </div>
                                  <div className="form-outline mb-4">
                                    <label className="form-label">Logo</label>
                                    <input
                                      name="logo"
                                      type="file"
                                      id="logo"
                                      className="form-control"
                                    />
                                    <div className="invalid-feedback"></div>
                                  </div>
                                </div>
                                <div className="modal-footer border-top-0">
                                  <button
                                    type="reset"
                                    className="btn btn-grd-danger"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-grd-info"
                                  >
                                    Edit Supplier
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

                {/* ===== Delete Modal ===== */}
                <div className="modal fade" id="delete_supplier_modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 py-2">
                        <h5 className="modal-title">Modal title</h5>
                        <Link
                          to="#"
                          className="primaery-menu-close"
                          data-bs-dismiss="modal"
                        >
                          <i className="material-icons-outlined">close</i>
                        </Link>
                      </div>
                      <div className="modal-body">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </div>
                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn btn-grd-danger"
                          data-bs-dismiss="modal"
                        >
                          Delete
                        </button>
                        <button type="button" className="btn btn-grd-info">
                          Save changes
                        </button>
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

export default Supplier;
