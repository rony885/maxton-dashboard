import React, { useState } from "react";
import styled from "styled-components";
import { PiCaretLineLeftBold, PiCaretLineRightBold } from "react-icons/pi";
import { GrView } from "react-icons/gr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseDataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Wrapper>
      <div className="table-responsive">
        <header className="headerr">
          <input
            type="text"
            placeholder="Search here"
            className="w-100 form-control"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </header>

        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="select-all-rows" />
              </th>
              <th className="texxt" onClick={() => handleSort("id")}>
                ID{" "}
                {sortConfig.key === "id"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("date")}>
                Date{" "}
                {sortConfig.key === "date"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("invoiceNo")}>
                Invoice No{" "}
                {sortConfig.key === "invoiceNo"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("supplier")}>
                Supplier{" "}
                {sortConfig.key === "supplier"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("totalPrice")}>
                Total Price{" "}
                {sortConfig.key === "totalPrice"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("discount")}>
                Discount{" "}
                {sortConfig.key === "discount"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("grandTotal")}>
                Grand Total{" "}
                {sortConfig.key === "grandTotal"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("status")}>
                Status{" "}
                {sortConfig.key === "status"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" aria-label={`select-row-${item.id}`} />
                </td>
                <td className="texxt">{item.id}</td>
                <td className="texxt">{item.date}</td>
                <td className="texxt">{item.invoiceNo}</td>
                <td className="texxt">{item.supplier}</td>
                <td className="texxt">{item.totalPrice}</td>
                <td className="texxt">{item.discount}</td>
                <td className="texxt">{item.grandTotal}</td>
                <td className="texxt">{item.status}</td>
                <td>
                  <ul className="d-flex gap-2 list-unstyled mb-0">
                    <li>
                      <button
                        type="button"
                        className="btn btn-grd-primary px-2 py-0"
                        // data-bs-toggle="modal"
                        // data-bs-target="#delete_brand_modal"
                      >
                        <Link to={`/purchase-view/${item.id}`}>
                          <GrView className="text-white" />
                        </Link>
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="pagination_text">Rows per page:</span>
            <div className="ms-2">
              <select
                aria-label="Rows per page:"
                className="form-select"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <span className="pagination-info">
            {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredData.length)} of
            {filteredData.length}
          </span>
          <div className="pagination-buttons d-flex">
            <button
              type="button"
              aria-label="First Page"
              className="btn btn-link"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <PiCaretLineLeftBold />
            </button>
            <button
              type="button"
              aria-label="Previous Page"
              className="btn btn-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next Page"
              className="btn btn-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
            <button
              type="button"
              aria-label="Last Page"
              className="btn btn-link"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <PiCaretLineRightBold />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .headerr {
    background-color: #333;
    padding: 10px 30px 1px 30px;
    box-shadow: 0 6px 7px -3px rgba(255, 255, 255, 0.35);
    border-radius: 4px;
  }
  .table-responsive {
    margin: 20px 0;
  }
  .headerr input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 12px;
  }
  .table th {
    cursor: pointer;
    color: #000;
  }
  .table th,
  .table td {
    padding: 10px;
    text-align: left;
  }
  .table th {
    background-color: #f5f5f5;
  }
  .btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .btn-icon {
    padding: 5px;
  }
  .edit-item-btn {
    color: #007bff;
  }
  .remove-item-btn {
    color: #dc3545;
  }

  /* ===== pagination css ===== */
  .btn-link {
    background-color: #1d2634 !important;
    color: #fff !important;
    border: none;
    cursor: pointer;
  }
  .btn-link:hover {
    background-color: #424141 !important;
    color: #fff;
  }
  .d-flex {
    display: flex;
  }
  .gap-2 {
    gap: 8px;
  }
  @media screen and (max-width: 425px) {
    .texxt {
      font-size: 10px !important;
    }
    .pagination_text {
      display: none !important;
    }
    .pagination-info {
      font-size: 10px !important;
    }
    .btn-link {
      padding: 2px 8px !important;
    }
  }

  /* ===== Delete Modal ===== */
  .close_btn {
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
    background-color: #d3d4d5;
  }
  .delete_btn {
    background-color: #dc3546;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
  }
  .no-hover-border {
    outline: none;
    box-shadow: none;
  }

  .no-hover-border:focus,
  .no-hover-border:hover {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }
`;

export default PurchaseDataTable;
