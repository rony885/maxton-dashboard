import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomersDataTable from "./CustomersDataTable";

const Customer = () => {
  const customerData = [
    {
      id: 1,
      name: "Maxton",
      userNamePhn: "rony",
      isAdmin: "Yes",
      isStaff: "Yes",
      isCustomer: "Yes",
    },
    {
      id: 2,
      name: "Ella",
      userNamePhn: "01788569236",
      isAdmin: "No",
      isStaff: "Yes",
      isCustomer: "Yes",
    },
    {
      id: 3,
      name: "Jackson",
      userNamePhn: "jacko89",
      isAdmin: "No",
      isStaff: "No",
      isCustomer: "Yes",
    },
    {
      id: 4,
      name: "Lily",
      userNamePhn: "lily22",
      isAdmin: "Yes",
      isStaff: "No",
      isCustomer: "Yes",
    },
    {
      id: 5,
      name: "Oscar",
      userNamePhn: "01608569232",
      isAdmin: "No",
      isStaff: "No",
      isCustomer: "Yes",
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
                      Customer
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  <Link
                    to=""
                    className="d-flex justify-content-center align-items-center"
                  >
                    <TbCirclePlus className="fs-6 text-white texxt_icon" />
                    <span className="text-white texxt">Add Customer</span>
                  </Link>
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
                      <CustomersDataTable data={customerData} />
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
  .courier_wrapper {
  }
  .courier {
  }
  .courier_row .courier_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .courier_row .add_courier .buttn {
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
  .add_courier .buttn:hover {
    background-color: #424141;
  }

  .courier_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  @media screen and (max-width: 320px) {
    .courier_row .add_courier .buttn {
      padding: 5px;
    }
    .courier_row .bttn_title {
      font-size: 12px;
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

export default Customer;
