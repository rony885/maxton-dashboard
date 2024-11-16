import React from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import UnitDataTable from "./UnitDataTable";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Unit = () => {
  const sampleData = [
    { id: 1, name: "Gift", status: "Active" },
    { id: 2, name: "Book", status: "Inactive" },
    { id: 3, name: "Pen", status: "Active" },
    { id: 4, name: "Laptop", status: "Active" },
    { id: 5, name: "Notebook", status: "Inactive" },
    { id: 6, name: "Bag", status: "Active" },
    { id: 7, name: "Shoes", status: "Inactive" },
    { id: 8, name: "Watch", status: "Active" },
    { id: 9, name: "Phone", status: "Inactive" },
    { id: 10, name: "Tablet", status: "Active" },
    { id: 11, name: "Tablet1", status: "Active" },
    { id: 12, name: "Tablet2", status: "Active" },
    { id: 13, name: "Tablet3", status: "Active" },
  ];

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
                    Unit
                  </li>
                </ol>
              </nav>
            </div>

            <div className="ms-auto">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_unit_modal"
                >
                  <TbCirclePlus className="fs-6" />
                  <span className="">Add Unit</span>
                </button>
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="layout">
            <div className="product_wrapper">
              <div className="categoryProd">
                <div className="mb-4">
                  <div className="row d-flex justify-content-between align-items-center catry_row mb-4">
                    <div className="col-6">
                      <div className="d-flex justify-content-start align-items-center catry_title">
                        {/* <h4 className="m-0 fs-5">Category</h4> */}
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="d-flex justify-content-end align-items-center add_catry">
                        {/* <i className="bi bi-plus-circle align-baseline me-1"></i>
                        <button className="buttn" onClick={openModal}>
                          <TbCirclePlus className="fs-6" />
                          <span className="bttn_title">Add Category</span>
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-12">
                      <UnitDataTable data={sampleData} />
                    </div>
                  </div>
                </div>

                {/* ===== Custom Modal ===== */}
                <div className="modal fade" id="add_unit_modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 py-2 bg-grd-info">
                        <h5 className="modal-title">Add Unit</h5>
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
                              <label className=" form-label">
                                Unit Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter unit name"
                                className="form-control"
                                required
                              />
                            </div>

                            <div className="col-12">
                              <label className="form-label">Status</label>
                              <select className="form-select">
                                <option value="">Select</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                              </select>
                            </div>

                            <div className="col-12">
                              <label className=" form-label">Image</label>
                              <input type="file" className="form-control" />
                            </div>

                            {/* Optional additional action buttons */}
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
                                Add Unit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== Edit Modal ===== */}
                <div className="modal fade" id="edit_unit_modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 py-2 bg-grd-info">
                        <h5 className="modal-title">Add Brand</h5>
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
                              <label className=" form-label">
                                Unit Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter unit name"
                                className="form-control"
                                required
                              />
                            </div>

                            <div className="col-12">
                              <label className="form-label">Status</label>
                              <select className="form-select">
                                <option value="">Select</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
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
                                Add Unit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== Delete Modal ===== */}
                <div className="modal fade" id="delete_unit_modal">
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

                      <div className="modal-body p-md-5">
                        <div className="text-center">
                          <div className="text-danger fs-1">
                            <FaTrashAlt />
                          </div>
                          <div className="mt-4">
                            <h3 className="mb-2 fs-5">Are you sure?</h3>
                            <p className="fs-lg mx-3 mb-0">
                              Are you sure you want to remove this record?
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn btn-grd-danger"
                          // data-bs-dismiss="modal"
                        >
                          Yes, Delete It!
                        </button>
                        <button
                          type="button"
                          className="btn btn-grd-info"
                          data-bs-dismiss="modal"
                        >
                          Close
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
  .layout {
  }
  .product_wrapper {
  }

  .categoryProd {
    /* padding: 20px 20px; */
  }
  .catry_row .catry_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .buttn {
    background-color: #fff;
    color: #1d2634;
    border: none;
    border-radius: 4px;
    padding: 10px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    font-weight: 700;
  }
  /* .add_catry .buttn:hover {
    background-color: #424141;
  } */

  .catry_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  input,
  optgroup,
  select,
  textarea {
    font-size: 12px;
  }
  .form-control,
  .form-select {
    padding: 10px 10px;
  }
`;

export default Unit;
