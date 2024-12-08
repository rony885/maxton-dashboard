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

          {/* <!-- Purchase Statistics Section --> */}
          <div className="purchase-overview">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm stats-card">
                  <div className="card-body">
                    <h5 className="card-title">Total Purchases</h5>
                    <p className="card-text stats-value">120</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm stats-card">
                  <div className="card-body">
                    <h5 className="card-title">Pending Invoices</h5>
                    <p className="card-text stats-value">15</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm stats-card">
                  <div className="card-body">
                    <h5 className="card-title">Total Amount</h5>
                    <p className="card-text stats-value">$54,320</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Purchases Table Section --> */}
          <div className="purchase-list mt-4">
            <h4>Recent Purchases</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2024-12-01</td>
                  <td>Vendor A</td>
                  <td>$2,500</td>
                  <td>Paid</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2024-11-28</td>
                  <td>Vendor B</td>
                  <td>$1,200</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2024-11-25</td>
                  <td>Vendor C</td>
                  <td>$3,800</td>
                  <td>Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .main-content {
    padding: 20px;
  }
  .stats-card {
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
  }
  .stats-value {
    font-size: 24px;
    font-weight: bold;
  }
  .purchase-list {
    margin-top: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }
  .breadcrumb-title,
  .breadcrumb-item,
  .btn-primary,
  h4 {
    font-size: 16px;
  }

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
