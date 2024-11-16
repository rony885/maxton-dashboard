/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AppInvoice = () => {
  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* <!--breadcrumb--> */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Components</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Invoice
                </li>
              </ol>
            </nav>
          </div>
          <div className="ms-auto">
            <div className="btn-group">
              <button type="button" className="btn btn-primary">
                Settings
              </button>
              <button
                type="button"
                className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                <a className="dropdown-item" href="javascript:;">
                  Action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Another action
                </a>
                <a className="dropdown-item" href="javascript:;">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="javascript:;">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end breadcrumb--> */}
        <div className="card radius-10">
          <div className="card-header py-3">
            <div className="row align-items-center g-3">
              <div className="col-12 col-lg-6">
                <h5 className="mb-0">Company Name, Inc</h5>
              </div>

              <div className="col-12 col-lg-6 text-md-end">
                <a href="javascript:;" className="btn btn-danger btn-sm me-2">
                  <i className="bi bi-file-earmark-pdf me-2"></i>Export as PDF
                </a>
                <a
                  href="javascript:;"
                  onclick="window.print()"
                  className="btn btn-dark btn-sm"
                >
                  <i className="bi bi-printer-fill me-2"></i>Print
                </a>
              </div>
            </div>
          </div>
          <div className="card-header py-2">
            <div className="row row-cols-1 row-cols-lg-3">
              <div className="col">
                <div className="">
                  <small>from</small>
                  <address className="m-t-5 m-b-5">
                    <strong className="text-inverse">Twitter, Inc.</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
              </div>
              <div className="col">
                <div className="">
                  <small>to</small>
                  <address className="m-t-5 m-b-5">
                    <strong className="text-inverse">Company Name</strong>
                    <br />
                    Street Address
                    <br />
                    City, Zip Code
                    <br />
                    Phone: (123) 456-7890
                    <br />
                    Fax: (123) 456-7890
                  </address>
                </div>
              </div>
              <div className="col">
                <div className="">
                  <small>Invoice / July period</small>
                  <div className="">
                    <b>August 3,2012</b>
                  </div>
                  <div className="invoice-detail">
                    #0000123DSS
                    <br />
                    Services Product
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-invoice">
                <thead>
                  <tr>
                    <th>TASK DESCRIPTION</th>
                    <th className="text-center" style={{ width: "10%" }}>
                      RATE
                    </th>
                    <th className="text-center" style={{ width: "10%" }}>
                      HOURS
                    </th>
                    <th className="text-right" style={{ width: "10%" }}>
                      LINE TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="text-inverse">
                        Website design &amp; development
                      </span>
                      <br />
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed id sagittis arcu.
                      </small>
                    </td>
                    <td className="text-center">$50.00</td>
                    <td className="text-center">50</td>
                    <td className="text-right">$2,500.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-inverse">Branding</span>
                      <br />
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed id sagittis arcu.
                      </small>
                    </td>
                    <td className="text-center">$50.00</td>
                    <td className="text-center">40</td>
                    <td className="text-right">$2,000.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-inverse">Redesign Service</span>
                      <br />
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed id sagittis arcu.
                      </small>
                    </td>
                    <td className="text-center">$50.00</td>
                    <td className="text-center">50</td>
                    <td className="text-right">$2,500.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row bg-light align-items-center m-0">
              <div className="col col-auto p-4">
                <p className="mb-0">SUBTOTAL</p>
                <h4 className="mb-0">$4,500.00</h4>
              </div>
              <div className="col col-auto p-4">
                <i className="bi bi-plus-lg text-muted"></i>
              </div>
              <div className="col col-auto me-auto p-4">
                <p className="mb-0">PAYPAL FEE (5.4%)</p>
                <h4 className="mb-0">$108.00</h4>
              </div>
              <div className="col bg-primary col-auto p-4">
                <p className="mb-0 text-white">TOTAL</p>
                <h4 className="mb-0 text-white">$4508.00</h4>
              </div>
            </div>
            {/* <!--end row--> */}

            <hr />
            {/* <!-- begin invoice-note --> */}
            <div className="my-3">
              * Make all cheques payable to [Your Company Name]
              <br />
              * Payment is due within 30 days
              <br />* If you have any questions concerning this invoice, contact
              [Name, Phone Number, Email]
            </div>
            {/* <!-- end invoice-note --> */}
          </div>

          <div className="card-footer py-3 bg-transparent">
            <p className="text-center mb-2">THANK YOU FOR YOUR BUSINESS</p>
            <p className="text-center d-flex align-items-center gap-3 justify-content-center mb-0">
              <span className="">
                <i className="bi bi-globe"></i> www.domain.com
              </span>
              <span className="">
                <i className="bi bi-telephone-fill"></i> T:+11-0462879
              </span>
              <span className="">
                <i className="bi bi-envelope-fill"></i> xyz.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppInvoice;
