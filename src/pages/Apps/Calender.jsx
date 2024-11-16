/* eslint-disable no-script-url */
import React from "react";
import FullCalendar from "@fullcalendar/react"; // Import FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Import Day Grid plugin
import timeGridPlugin from "@fullcalendar/timegrid"; // Import Time Grid plugin
import listPlugin from "@fullcalendar/list"; // Import List plugin
import interactionPlugin from "@fullcalendar/interaction"; // Import Interaction plugin
import { Link } from "react-router-dom";

const Calendar = () => {
  // Calendar event data
  const events = [
    { title: "All Day Event", start: "2020-09-01" },
    { title: "Long Event", start: "2020-09-07", end: "2020-09-10" },
    { groupId: 999, title: "Repeating Event", start: "2020-09-09T16:00:00" },
    { groupId: 999, title: "Repeating Event", start: "2020-09-16T16:00:00" },
    { title: "Conference", start: "2020-09-11", end: "2020-09-13" },
    {
      title: "Meeting",
      start: "2020-09-12T10:30:00",
      end: "2020-09-12T12:30:00",
    },
    { title: "Lunch", start: "2020-09-12T12:00:00" },
    { title: "Meeting", start: "2020-09-12T14:30:00" },
    { title: "Happy Hour", start: "2020-09-12T17:30:00" },
    { title: "Dinner", start: "2020-09-12T20:00:00" },
    { title: "Birthday Party", start: "2020-09-13T07:00:00" },
    {
      title: "Click for Google",
      url: "http://google.com/",
      start: "2020-09-28",
    },
  ];

  return (
    <main className="main-wrapper">
      <div className="main-content">
        {/* Breadcrumb */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Components</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="javascript:;">
                    <i className="bx bx-home-alt"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Calendar
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
                <Link className="dropdown-item" href="javascript:;">
                  Action
                </Link>
                <Link className="dropdown-item" href="javascript:;">
                  Another action
                </Link>
                <Link className="dropdown-item" href="javascript:;">
                  Something else here
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="javascript:;">
                  Separated link
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcrumb */}

        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  listPlugin,
                  interactionPlugin,
                ]} // Specify plugins
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                initialView="dayGridMonth"
                initialDate="2020-09-12"
                navLinks={true}
                selectable={true}
                nowIndicator={true}
                editable={true}
                events={events} // Pass events data
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
