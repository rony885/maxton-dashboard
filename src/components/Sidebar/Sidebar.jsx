import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div className="logo-icon">
          <img src="assets/images/logo-icon.png" className="logo-img" alt="" />
        </div>
        <div className="logo-name flex-grow-1">
          <h5 className="mb-0">Maxton</h5>
        </div>
        <div className="sidebar-close">
          <span className="material-icons-outlined">close</span>
        </div>
      </div>
      <div className="sidebar-nav">
        {/* <!--navigation--> */}
        <ul className="metismenu" id="sidenav">
          <li>
            {/* <Link to="/" className="has-arrow"> */}
            <Link to="/">
              <div className="parent-icon">
                <i className="material-icons-outlined">home</i>
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
            <ul>
              {/* <li>
                <a href="index.html">
                  <i className="material-icons-outlined">arrow_right</i>Analysis
                </a>
              </li> */}

              {/* <li>
                <a href="index2.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  eCommerce
                </a>
              </li> */}
            </ul>
          </li>

          {/* <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">widgets</i>
              </div>
              <div className="menu-title">Widgets</div>
            </Link>
            <ul>
              <li>
                <Link to="/widgets-data">
                  <i className="material-icons-outlined">arrow_right</i>Data
                </Link>
              </li>
              <li>
                <a href="widgets-static.html">
                  <i className="material-icons-outlined">arrow_right</i>Static
                </a>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">inventory_2</i>
              </div>
              <div className="menu-title">Products</div>
            </Link>
            <ul>
              <li>
                <Link to="/product-add">
                  <i className="material-icons-outlined">arrow_right</i>Add
                  Product
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <i className="material-icons-outlined">arrow_right</i>Product
                  List
                </Link>
              </li>
              <li>
                <Link to="/category">
                  <i className="material-icons-outlined">arrow_right</i>Category
                </Link>
              </li>
              <li>
                <Link to="/brand">
                  <i className="material-icons-outlined">arrow_right</i>Brand
                </Link>
              </li>
              <li>
                <Link to="/unit">
                  <i className="material-icons-outlined">arrow_right</i>Unit
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">shopping_cart</i>
              </div>
              <div className="menu-title">Sales</div>
            </Link>
            <ul>
              <li>
                <Link to="/sell-product">
                  <i className="material-icons-outlined">arrow_right</i>Sales
                  View
                </Link>
              </li>
              <li>
                <Link to="/sell-product-add">
                  <i className="material-icons-outlined">arrow_right</i>Sales
                  Entry
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">shopping_bag</i>
              </div>
              <div className="menu-title">Purchase</div>
            </Link>
            <ul>
              <li>
                <Link to="/purchase">
                  <i className="material-icons-outlined">arrow_right</i>Purchase
                  List
                </Link>
              </li>
              <li>
                <Link to="/purchase-entry">
                  <i className="material-icons-outlined">arrow_right</i>Purchase
                  Entry
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">bar_chart</i>
              </div>
              <div className="menu-title">Stocks</div>
            </Link>
            <ul>
              <li>
                <Link to="/stock">
                  <i className="material-icons-outlined">arrow_right</i>
                  Current Stock
                </Link>
              </li>
              <li>
                <Link to="/stock-out">
                  <i className="material-icons-outlined">arrow_right</i>
                  Out of Stock
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">assessment</i>
              </div>
              <div className="menu-title">Reports</div>
            </Link>
            <ul>
              <li>
                <Link to="/sales-invoice">
                  <i className="material-icons-outlined">arrow_right</i>
                  Sales Invoice
                </Link>
              </li>
              <li>
                <Link to="/customer-ledger">
                  <i className="material-icons-outlined">arrow_right</i>
                  Customer Ledger
                </Link>
              </li>
              <li>
                <Link to="/supplier-ledger">
                  <i className="material-icons-outlined">arrow_right</i>
                  Supplier Ledger
                </Link>
              </li>
              <li>
                <Link to="/purchase-invoice">
                  <i className="material-icons-outlined">arrow_right</i>
                  Purchase Invoice
                </Link>
              </li>
              <li>
                <Link to="/profit-loss">
                  <i className="material-icons-outlined">arrow_right</i>
                  Profit & Loss
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">settings</i>
              </div>
              <div className="menu-title">Setting</div>
            </Link>
            <ul>
              <li>
                <Link to="/customer">
                  <i className="material-icons-outlined">arrow_right</i>
                  Add Customer
                </Link>
              </li>
              <li>
                <Link to="supplier">
                  <i className="material-icons-outlined">arrow_right</i>
                  Add Supplier
                </Link>
              </li>
              <li>
                <Link to="company-info">
                  <i className="material-icons-outlined">arrow_right</i>
                  Company Info
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <i className="material-icons-outlined">arrow_right</i>
                  Create User
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">apps</i>
              </div>
              <div className="menu-title">Apps</div>
            </Link>
            <ul>
              {/* <li>
                <a href="app-emailbox.html">
                  <i className="material-icons-outlined">arrow_right</i>Email
                  Box
                </a>
              </li> */}
              {/* <li>
                <a href="app-emailread.html">
                  <i className="material-icons-outlined">arrow_right</i>Email
                  Read
                </a>
              </li> */}
              {/* <li>
                <a href="app-chat-box.html">
                  <i className="material-icons-outlined">arrow_right</i>Chat
                </a>
              </li> */}
              <li>
                <Link to="/app-fullcalender">
                  <i className="material-icons-outlined">arrow_right</i>Calendar
                </Link>
              </li>
              {/* <li>
                <a href="app-to-do.html">
                  <i className="material-icons-outlined">arrow_right</i>To do
                </a>
              </li> */}
              <li>
                <Link to="/app-invoice">
                  <i className="material-icons-outlined">arrow_right</i>Invoice
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-label">UI Elements</li>
          {/* <li>
            <a href="cards.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">inventory_2</i>
              </div>
              <div className="menu-title">Cards</div>
            </a>
          </li> */}

          {/* <li>
            <a href="#" className="has-arrow">
              <div className="parent-icon">
                <i className="material-icons-outlined">shopping_bag</i>
              </div>
              <div className="menu-title">eCommerce</div>
            </a>
            <ul>
              <li>
                <a href="ecommerce-add-product.html">
                  <i className="material-icons-outlined">arrow_right</i>Add
                  Product
                </a>
              </li>
              <li>
                <a href="ecommerce-products.html">
                  <i className="material-icons-outlined">arrow_right</i>Products
                </a>
              </li>
              <li>
                <a href="ecommerce-customers.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Customers
                </a>
              </li>
              <li>
                <a href="ecommerce-customer-details.html">
                  <i className="material-icons-outlined">arrow_right</i>Customer
                  Details
                </a>
              </li>
              <li>
                <a href="ecommerce-orders.html">
                  <i className="material-icons-outlined">arrow_right</i>Orders
                </a>
              </li>
              <li>
                <a href="ecommerce-order-details.html">
                  <i className="material-icons-outlined">arrow_right</i>Order
                  Details
                </a>
              </li>
            </ul>
          </li> */}

          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">card_giftcard</i>
              </div>
              <div className="menu-title">Components</div>
            </Link>
            <ul>
              {/* <li>
                <a href="component-alerts.html">
                  <i className="material-icons-outlined">arrow_right</i>Alerts
                </a>
              </li> */}

              {/* <li>
                <a href="component-accordions.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Accordions
                </a>
              </li> */}

              {/* <li>
                <a href="component-badges.html">
                  <i className="material-icons-outlined">arrow_right</i>Badges
                </a>
              </li> */}

              {/* <li>
                <a href="component-buttons.html">
                  <i className="material-icons-outlined">arrow_right</i>Buttons
                </a>

              </li> */}

              <li>
                <Link to="/component-carousels">
                  <i className="material-icons-outlined">arrow_right</i>
                  Carousels
                </Link>
              </li>

              {/* <li>
                <a href="component-media-object.html">
                  <i className="material-icons-outlined">arrow_right</i>Media
                  Objects
                </a>
              </li> */}

              {/* <li>
                <a href="component-modals.html">
                  <i className="material-icons-outlined">arrow_right</i>Modals
                </a>
              </li> */}

              {/* <li>
                <a href="component-navs-tabs.html">
                  <i className="material-icons-outlined">arrow_right</i>Navs &
                  Tabs
                </a>
              </li> */}

              {/* <li>
                <a href="component-navbar.html">
                  <i className="material-icons-outlined">arrow_right</i>Navbar
                </a>
              </li> */}

              {/* <li>
                <a href="component-paginations.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Pagination
                </a>
              </li> */}

              {/* <li>
                <a href="component-popovers-tooltips.html">
                  <i className="material-icons-outlined">arrow_right</i>Popovers
                  & Tooltips
                </a>
              </li> */}

              {/* <li>
                <a href="component-progress-bars.html">
                  <i className="material-icons-outlined">arrow_right</i>Progress
                </a>
              </li>
              <li>
                <a href="component-spinners.html">
                  <i className="material-icons-outlined">arrow_right</i>Spinners
                </a>
              </li>
              <li>
                <a href="component-notifications.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Notifications
                </a>
              </li>
              <li>
                <a href="component-avtars-chips.html">
                  <i className="material-icons-outlined">arrow_right</i>Avatrs &
                  Chips
                </a>
              </li>
              <li>
                <a href="component-typography.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Typography
                </a>
              </li>
              <li>
                <a href="component-text-utilities.html">
                  <i className="material-icons-outlined">arrow_right</i>
                  Utilities
                </a>
              </li> */}
            </ul>
          </li>

          {/* <li>
            <a className="has-arrow" href="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">view_agenda</i>
              </div>
              <div className="menu-title">Icons</div>
            </a>
            <ul>
              <li>
                <a href="icons-line-icons.html">
                  <i className="material-icons-outlined">arrow_right</i>Line
                  Icons
                </a>
              </li>
              <li>
                <a href="icons-boxicons.html">
                  <i className="material-icons-outlined">arrow_right</i>Boxicons
                </a>
              </li>
              <li>
                <a href="icons-feather-icons.html">
                  <i className="material-icons-outlined">arrow_right</i>Feather
                  Icons
                </a>
              </li>
            </ul>
          </li> */}

          <li className="menu-label">Forms & Tables</li>
          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">toc</i>
              </div>
              <div className="menu-title">Forms</div>
            </Link>
            <ul>
              {/* <li>
                <a href="form-elements.html">
                  <i className="material-icons-outlined">arrow_right</i>Form
                  Elements
                </a>
              </li> */}
              {/* <li>
                <a href="form-input-group.html">
                  <i className="material-icons-outlined">arrow_right</i>Input
                  Groups
                </a>
              </li> */}
              {/* <li>
                <a href="form-radios-and-checkboxes.html">
                  <i className="material-icons-outlined">arrow_right</i>Radios &
                  Checkboxes
                </a>
              </li> */}
              <li>
                <Link to="/form">
                  <i className="material-icons-outlined">arrow_right</i>Forms
                  Layouts
                </Link>
              </li>
              {/* <li>
                <a href="form-validations.html">
                  <i className="material-icons-outlined">arrow_right</i>Form
                  Validation
                </a>
              </li> */}
              {/* <li>
                <a href="form-wizard.html">
                  <i className="material-icons-outlined">arrow_right</i>Form
                  Wizard
                </a>
              </li> */}
              {/* <li>
                <a href="form-file-upload.html">
                  <i className="material-icons-outlined">arrow_right</i>File
                  Upload
                </a>
              </li> */}
              <li>
                <Link to="/form-date-time-pickes">
                  <i className="material-icons-outlined">arrow_right</i>Date
                  Pickers
                </Link>
              </li>
              <li>
                <a href="form-select2.html">
                  {/* <i className="material-icons-outlined">arrow_right</i>Select2 */}
                </a>
              </li>
              {/* <li>
                <a href="form-repeater.html">
                  <i className="material-icons-outlined">arrow_right</i>Form
                  Repeater
                </a>
              </li> */}
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">api</i>
              </div>
              <div className="menu-title">Tables</div>
            </Link>
            <ul>
              {/* <li>
                <a href="table-basic-table.html">
                  <i className="material-icons-outlined">arrow_right</i>Basic
                  Table
                </a>
              </li> */}
              <li>
                <Link to="/table-datatable">
                  <i className="material-icons-outlined">arrow_right</i>Data
                  Table
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-label">Pages</li>
          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">lock</i>
              </div>
              <div className="menu-title">Authentication</div>
            </Link>
            <ul>
              {/* <li>
                <a className="has-arrow" href="#">
                  <i className="material-icons-outlined">arrow_right</i>Basic
                </a>
                <ul>
                  <li>
                    <a href="auth-basic-login.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="auth-basic-register.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="auth-basic-forgot-password.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a href="auth-basic-reset-password.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Reset Password
                    </a>
                  </li>
                </ul>
              </li> */}

              {/* <li>
                <a className="has-arrow" href="#">
                  <i className="material-icons-outlined">arrow_right</i>Cover
                </a>
                <ul>
                  <li>
                    <a href="auth-cover-login.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="auth-cover-register.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="auth-cover-forgot-password.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a href="auth-cover-reset-password.html" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Reset Password
                    </a>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link className="has-arrow" to="#">
                  <i className="material-icons-outlined">arrow_right</i>Boxed
                </Link>
                <ul>
                  <li>
                    <Link to="/auth-boxed-login" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth-boxed-register" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/forgot-password" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Forgot Password
                    </Link>
                  </li>
                  <li>
                    <Link to="/reset-password" target="_blank">
                      <i className="material-icons-outlined">arrow_right</i>
                      Reset Password
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/user-profile">
              <div className="parent-icon">
                <i className="material-icons-outlined">person</i>
              </div>
              <div className="menu-title">User Profile</div>
            </Link>
          </li>

          {/* <li>
            <a href="timeline.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">join_right</i>
              </div>
              <div className="menu-title">Timeline</div>
            </a>
          </li> */}

          {/* <li>
            <a className="has-arrow" href="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">report_problem</i>
              </div>
              <div className="menu-title">Pages</div>
            </a>
            <ul>
              <li>
                <a href="pages-error-404.html" target="_blank">
                  <i className="material-icons-outlined">arrow_right</i>404
                  Error
                </a>
              </li>
              <li>
                <a href="pages-error-505.html" target="_blank">
                  <i className="material-icons-outlined">arrow_right</i>505
                  Error
                </a>
              </li>
              <li>
                <a href="pages-coming-soon.html" target="_blank">
                  <i className="material-icons-outlined">arrow_right</i>Coming
                  Soon
                </a>
              </li>
              <li>
                <a href="pages-starter-page.html" target="_blank">
                  <i className="material-icons-outlined">arrow_right</i>Blank
                  Page
                </a>
              </li>
            </ul>
          </li> */}

          {/* <li>
            <a href="faq.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">help_outline</i>
              </div>
              <div className="menu-title">FAQ</div>
            </a>
          </li> */}

          {/* <li>
            <a href="pricing-table.html">
              <div className="parent-icon">
                <i className="material-icons-outlined">sports_football</i>
              </div>
              <div className="menu-title">Pricing</div>
            </a>
          </li> */}

          <li className="menu-label">Charts & Maps</li>
          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">fitbit</i>
              </div>
              <div className="menu-title">Charts</div>
            </Link>
            <ul>
              <li>
                <Link to="/charts-apex-chart">
                  <i className="material-icons-outlined">arrow_right</i>Apex
                </Link>
              </li>
              {/* <li>
                <a href="charts-chartjs.html">
                  <i className="material-icons-outlined">arrow_right</i>Chartjs
                </a>
              </li> */}
            </ul>
          </li>

          <li>
            <Link className="has-arrow" to="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">sports_football</i>
              </div>
              <div className="menu-title">Maps</div>
            </Link>
            <ul>
              <li>
                <a href="map-google-maps.html">
                  <i className="material-icons-outlined">arrow_right</i>Google
                  Maps
                </a>
              </li>
              <li>
                <a href="map-vector-maps.html">
                  <i className="material-icons-outlined">arrow_right</i>Vector
                  Maps
                </a>
              </li>
            </ul>
          </li>

          {/* <li className="menu-label">Others</li>
          <li>
            <a className="has-arrow" href="#">
              <div className="parent-icon">
                <i className="material-icons-outlined">face_5</i>
              </div>
              <div className="menu-title">Menu Levels</div>
            </a>
            <ul>
              <li>
                <a className="has-arrow" href="#">
                  <i className="material-icons-outlined">arrow_right</i>Level
                  One
                </a>
                <ul>
                  <li>
                    <a className="has-arrow" href="#">
                      <i className="material-icons-outlined">arrow_right</i>
                      Level Two
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="material-icons-outlined">arrow_right</i>
                          Level Three
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <a href="javascrpt:;">
              <div className="parent-icon">
                <i className="material-icons-outlined">description</i>
              </div>
              <div className="menu-title">Documentation</div>
            </a>
          </li> */}

          {/* <li>
            <a href="javascrpt:;">
              <div className="parent-icon">
                <i className="material-icons-outlined">support</i>
              </div>
              <div className="menu-title">Support</div>
            </a>
          </li> */}
        </ul>
        {/* <!--end navigation--> */}
      </div>
    </aside>
  );
};

export default Sidebar;
