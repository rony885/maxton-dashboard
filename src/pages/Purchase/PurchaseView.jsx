import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PurchaseView = () => {
  //   const { id } = useParams();
  //   console.log(id);
  return (
    <Wrapper>
      <main className="main-wrapper">
        <div className="main-content">
          {/* <!--breadcrumb--> */}
          <div className="page-breadcrumb d-sm-flex align-items-center mb-3 ">
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
                      Purchase Overview
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto d-flex gap-1 justify-content-center align-items-center">
              <div className="btn-group mx-1">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/purchase-entry"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <span className="text-white texxt">Invoice</span>
                  </Link>
                </button>
              </div>
              <div className="btn-group mx-1">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/purchase-entry"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <span className="text-white texxt">Invoice</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
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
    .texxt {
      font-size: 14px !important;
    }
  }
  @media screen and (max-width: 320px) {
    .breadcrumb-title,
    .breadcrumb-item {
      font-size: 13px !important;
    }
  }
`;
export default PurchaseView;
