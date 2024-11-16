import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PurchaseDataTable from "./PurchaseDataTable";
import { TbCirclePlus } from "react-icons/tb";

const PurchaseList = () => {
  const purchaseData = [
    {
      id: 1,
      date: "30-10-2024",
      invoiceNo: "PI-241000001",
      supplier: "AB Enterprise",
      totalPrice: "50000",
      discount: "0.00",
      grandTotal: "50000",
      name: "Book",
      status: "Active",
    },
    {
      id: 2,
      date: "29-10-2024",
      invoiceNo: "PI-241000002",
      supplier: "XYZ Supplies",
      totalPrice: "30000",
      discount: "500.00",
      grandTotal: "29500",
      name: "Pen",
      status: "Inactive",
    },
    {
      id: 3,
      date: "28-10-2024",
      invoiceNo: "PI-241000003",
      supplier: "Global Traders",
      totalPrice: "75000",
      discount: "1000.00",
      grandTotal: "74000",
      name: "Laptop",
      status: "Active",
    },
    {
      id: 4,
      date: "27-10-2024",
      invoiceNo: "PI-241000004",
      supplier: "Stationery Hub",
      totalPrice: "15000",
      discount: "0.00",
      grandTotal: "15000",
      name: "Notebook",
      status: "Inactive",
    },
    {
      id: 5,
      date: "26-10-2024",
      invoiceNo: "PI-241000005",
      supplier: "Tech Solutions",
      totalPrice: "100000",
      discount: "2500.00",
      grandTotal: "97500",
      name: "Tablet",
      status: "Active",
    },
    // { id: 2, name: "Book", status: "Inactive" },
    // { id: 3, name: "Pen", status: "Active" },
    // { id: 4, name: "Laptop", status: "Active" },
    // { id: 5, name: "Notebook", status: "Inactive" },
    // { id: 6, name: "Bag", status: "Active" },
    // { id: 7, name: "Shoes", status: "Inactive" },
    // { id: 8, name: "Watch", status: "Active" },
    // { id: 9, name: "Phone", status: "Inactive" },
    // { id: 10, name: "Tablet", status: "Active" },
    // { id: 11, name: "Tablet1", status: "Active" },
    // { id: 12, name: "Tablet2", status: "Active" },
    // { id: 13, name: "Tablet3", status: "Active" },
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
                      Purchase
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/purchase-entry"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <TbCirclePlus className="fs-6 text-white texxt_icon" />
                    <span className="text-white texxt">Add Purchase</span>
                  </Link>
                </button>
              </div>
              {/* <div className="d-flex justify-content-end align-items-center add_catry">
                <button className="buttn">
                  <Link to="" className="buttn_link">
                    <TbCirclePlus className="fs-6" />
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <span className="bttn_title">Add Product</span>
                  </Link>
                </button>
              </div> */}
            </div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="layout">
            <div className="purchaseView_wrapper">
              <div className="purchase">
                <div className="">
                  <div className="row d-flex justify-content-between align-items-center purchase_row mb-4">
                    <div className="col-6"></div>

                    <div className="col-6">
                      {/* <div className="d-flex justify-content-end align-items-center add_purchase">
                        <i className="bi bi-plus-circle align-baseline me-1"></i>
                        <button className="buttn">
                          <TbCirclePlus className="fs-6" />
                          <span className="bttn_title">
                            <Link to="/purchase-add" className="purchase_link">
                              Add Purchase
                            </Link>
                          </span>
                        </button>
                      </div> */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <PurchaseDataTable data={purchaseData} />
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
  .purchaseView_wrapper {
  }
  .purchase {
    padding: 20px 20px;
  }
  .purchase_row .purchase_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .purchase_row .add_purchase .buttn {
    background-color: #1d2634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .add_purchase .buttn:hover {
    background-color: #424141;
  }

  .purchase_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .purchase_link {
    text-decoration: none;
    color: #fff;
  }
  .card:first-child {
    background-color: transparent;
  }
  /* Remove blue outline on focus */
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
export default PurchaseList;
