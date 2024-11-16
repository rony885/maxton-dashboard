import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PurchaseInvoice = () => {
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
                    Purchase Invoice
                  </li>
                </ol>
              </nav>
            </div>

            <div className="ms-auto"></div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="">
            <h2>Purchase Invoice</h2>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default PurchaseInvoice;
