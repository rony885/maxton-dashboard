import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="top-header hide-printItem">
      <nav className="navbar navbar-expand align-items-center gap-4">
        <div className="btn-toggle">
          <Link to="#">
            <i className="material-icons-outlined">menu</i>
          </Link>
        </div>

        <div className="search-bar flex-grow-1">
          <div className="position-relative">
            <input
              className="form-control rounded-5 px-5 search-control d-lg-block d-none"
              type="text"
              placeholder="Search"
            />
            <span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">
              search
            </span>
            <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">
              close
            </span>

            {/* search */}
            <div className="search-popup p-3">
              <div className="card rounded-4 overflow-hidden">
                <div className="card-header d-lg-none">
                  <div className="position-relative">
                    <input
                      className="form-control rounded-5 px-5 mobile-search-control"
                      type="text"
                      placeholder="Search"
                    />
                    <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50">
                      search
                    </span>
                    <span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 mobile-search-close">
                      close
                    </span>
                  </div>
                </div>

                <div className="card-body search-content">
                  <p className="search-title">Recent Searches</p>
                  <div className="d-flex align-items-start flex-wrap gap-2 kewords-wrapper">
                    <Link to="#" className="kewords">
                      <span>Angular Template</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>Dashboard</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>Admin Template</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>Bootstrap 5 Admin</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>Html eCommerce</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>Sass</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                    <Link to="#" className="kewords">
                      <span>laravel 9</span>
                      <i className="material-icons-outlined fs-6">search</i>
                    </Link>
                  </div>
                  <hr />
                  <p className="search-title">Tutorials</p>
                  <div className="search-list d-flex flex-column gap-2">
                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="list-icon">
                        <i className="material-icons-outlined fs-5">
                          play_circle
                        </i>
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">
                          Wordpress Tutorials
                        </h5>
                      </div>
                    </div>
                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="list-icon">
                        <i className="material-icons-outlined fs-5">
                          shopping_basket
                        </i>
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">
                          eCommerce Website Tutorials
                        </h5>
                      </div>
                    </div>

                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="list-icon">
                        <i className="material-icons-outlined fs-5">laptop</i>
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">
                          Responsive Design
                        </h5>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <p className="search-title">Members</p>

                  <div className="search-list d-flex flex-column gap-2">
                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="memmber-img">
                        <img
                          src="assets/images/avatars/01.png"
                          width="32"
                          height="32"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">Andrew Stark</h5>
                      </div>
                    </div>

                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="memmber-img">
                        <img
                          src="assets/images/avatars/02.png"
                          width="32"
                          height="32"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">
                          Snetro Jhonia
                        </h5>
                      </div>
                    </div>

                    <div className="search-list-item d-flex align-items-center gap-3">
                      <div className="memmber-img">
                        <img
                          src="assets/images/avatars/03.png"
                          width="32"
                          height="32"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="mb-0 search-list-title">Michle Clark</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer text-center bg-transparent">
                  <Link to="#" className="btn w-100">
                    See All Search Results
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav gap-1 nav-right-links align-items-center">
          <li className="nav-item d-lg-none mobile-search-btn">
            <Link className="nav-link" to="#">
              <i className="material-icons-outlined">search</i>
            </Link>
          </li>

          {/* language */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle dropdown-toggle-nocaret"
              to="avascript:;"
              data-bs-toggle="dropdown"
            >
              <img src="assets/images/county/02.png" width="22" alt="" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center py-2"
                  to="#"
                >
                  <img src="assets/images/county/01.png" width="20" alt="" />
                  <span className="ms-2">English</span>
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center py-2"
                  to="#"
                >
                  <img src="assets/images/county/ban.png" width="20" alt="" />
                  <span className="ms-2">Bangla</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* notification */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              to="#"
            >
              <i className="material-icons-outlined">notifications</i>
              <span className="badge-notify">5</span>
            </Link>
            <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
              <div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                <h5 className="notiy-title mb-0">Notifications</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="material-icons-outlined"> more_vert </span>
                  </button>
                  <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                    <div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        to="#"
                      >
                        <i className="material-icons-outlined fs-6">
                          inventory_2
                        </i>
                        Archive All
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        to="#"
                      >
                        <i className="material-icons-outlined fs-6">done_all</i>
                        Mark all as read
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        to="#"
                      >
                        <i className="material-icons-outlined fs-6">mic_off</i>
                        Disable Notifications
                      </Link>
                    </div>
                    <div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        to="#"
                      >
                        <i className="material-icons-outlined fs-6">grade</i>
                        What's new ?
                      </Link>
                    </div>
                    <div>
                      <hr className="dropdown-divider" />
                    </div>
                    <div>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                        to="#"
                      >
                        <i className="material-icons-outlined fs-6">
                          leaderboard
                        </i>
                        Reports
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notify-list">
                <div>
                  <Link className="dropdown-item border-bottom py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <img
                          src="assets/images/avatars/01.png"
                          className="rounded-circle"
                          width="45"
                          height="45"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="notify-title">Congratulations Jhon</h5>
                        <p className="mb-0 notify-desc">
                          Many congtars jhon. You have won the gifts.
                        </p>
                        <p className="mb-0 notify-time">Today</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item border-bottom py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="user-wrapper bg-primary text-primary bg-opacity-10">
                        <span>RS</span>
                      </div>
                      <div className="">
                        <h5 className="notify-title">New Account Created</h5>
                        <p className="mb-0 notify-desc">
                          From USA an user has registered.
                        </p>
                        <p className="mb-0 notify-time">Yesterday</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item border-bottom py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <img
                          src="assets/images/apps/13.png"
                          className="rounded-circle"
                          width="45"
                          height="45"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="notify-title">Payment Recived</h5>
                        <p className="mb-0 notify-desc">
                          New payment recived successfully
                        </p>
                        <p className="mb-0 notify-time">1d ago</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item border-bottom py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <img
                          src="assets/images/apps/14.png"
                          className="rounded-circle"
                          width="45"
                          height="45"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="notify-title">New Order Recived</h5>
                        <p className="mb-0 notify-desc">
                          Recived new order from michle
                        </p>
                        <p className="mb-0 notify-time">2:15 AM</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item border-bottom py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="">
                        <img
                          src="assets/images/avatars/06.png"
                          className="rounded-circle"
                          width="45"
                          height="45"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="notify-title">Congratulations Jhon</h5>
                        <p className="mb-0 notify-desc">
                          Many congtars jhon. You have won the gifts.
                        </p>
                        <p className="mb-0 notify-time">Today</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item py-2" to="#">
                    <div className="d-flex align-items-center gap-3">
                      <div className="user-wrapper bg-danger text-danger bg-opacity-10">
                        <span>PK</span>
                      </div>
                      <div className="">
                        <h5 className="notify-title">New Account Created</h5>
                        <p className="mb-0 notify-desc">
                          From USA an user has registered.
                        </p>
                        <p className="mb-0 notify-time">Yesterday</p>
                      </div>
                      <div className="notify-close position-absolute end-0 me-3">
                        <i className="material-icons-outlined fs-6">close</i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="javascrpt:;"
              className="dropdown-toggle dropdown-toggle-nocaret"
              data-bs-toggle="dropdown"
            >
              <img
                src="assets/images/avatars/01.png"
                className="rounded-circle p-1 border"
                width="45"
                height="45"
                alt=""
              />
            </Link>
            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
              <Link className="dropdown-item gap-2 py-2" to="#">
                <div className="text-center">
                  <img
                    src="assets/images/avatars/01.png"
                    className="rounded-circle p-1 shadow mb-3"
                    width="90"
                    height="90"
                    alt=""
                  />
                  <h5 className="user-name mb-0 fw-bold">Hello, Jhon</h5>
                </div>
              </Link>
              <hr className="dropdown-divider" />
              <Link
                className="dropdown-item d-flex align-items-center gap-2 py-2"
                to="#"
              >
                <i className="material-icons-outlined">person_outline</i>Profile
              </Link>

              <Link
                className="dropdown-item d-flex align-items-center gap-2 py-2"
                to="#"
              >
                <i className="material-icons-outlined">local_bar</i>Setting
              </Link>

              <Link
                className="dropdown-item d-flex align-items-center gap-2 py-2"
                to="#"
              >
                <i className="material-icons-outlined">dashboard</i>Dashboard
              </Link>

              <hr className="dropdown-divider" />
              <Link
                className="dropdown-item d-flex align-items-center gap-2 py-2"
                to="#"
              >
                <i className="material-icons-outlined">power_settings_new</i>
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
