

import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Link } from "react-router-dom";

const DateTimePickers = () => {
  useEffect(() => {
    flatpickr(".datepicker", {});

    flatpickr(".time-picker", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "Y-m-d H:i",
    });

    flatpickr(".date-time", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });

    flatpickr(".date-format", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });

    flatpickr(".date-range", {
      mode: "range",
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });

    flatpickr(".date-inline", {
      inline: true,
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });
  }, []);

  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* breadcrumb */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Components</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="#">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Date Time Pickers
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
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Separated link
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}

        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h6 className="mb-0 text-uppercase">Date Time Pickers</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Pick Link Date</label>
                  <input type="text" className="form-control datepicker" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Time Picker</label>
                  <input type="text" className="form-control time-picker" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date & Time Picker</label>
                  <input type="text" className="form-control date-time" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Format</label>
                  <input type="text" className="form-control date-format" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date Range</label>
                  <input type="text" className="form-control date-range" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Inline Calendar</label>
                  <input type="text" className="form-control date-inline" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </main>
  );
};

export default DateTimePickers;
