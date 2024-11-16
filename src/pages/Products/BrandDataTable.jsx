import React, { useState } from "react";
import styled from "styled-components";
import {
  PiPencilLight,
  PiCaretLineLeftBold,
  PiCaretLineRightBold,
} from "react-icons/pi";
import { IoTrashOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight, FaTrashAlt } from "react-icons/fa";

const BrandDataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

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
              <th className="texxt" onClick={() => handleSort("name")}>
                Name{" "}
                {sortConfig.key === "name"
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
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" aria-label={`select-row-${item.id}`} />
                </td>
                <td className="texxt">{item.id}</td>
                <td className="texxt">{item.name}</td>
                <td className="texxt">{item.status}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <ul className="d-flex gap-2 list-unstyled mb-0">
                    <li>
                      <button
                        type="button"
                        className="btn btn-grd-primary px-2 py-0"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_brand_modal"
                      >
                        <PiPencilLight className="text-end" />
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn btn-grd-primary px-2 py-0"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_brand_modal"
                      >
                        <IoTrashOutline className="text-end" />
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
            <span className="pagination_text text-white">Rows per page:</span>
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

        {/* ===== Edit Modal ===== */}
        {isEditModalOpen && (
          <div className="custom-modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsEditModalOpen(false)}>
                &times;
              </span>
              <h2 className="text-dark">Update Brand</h2>
              <form>
                <label className="text-dark">
                  Brand Name<span className="text-danger">*</span>
                </label>
                <input type="text" placeholder="Enter brand name" />
                <label className="text-dark">Status</label>

                <select>
                  <option value="Select">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <div className="modal-actions">
                  <button type="reset" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="add-btn">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ===== Delete Confirmation Modal ===== */}
        {isDeleteModalOpen && (
          <div className="custom-modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close no-hover-border ms-auto"
                    onClick={closeDeleteModal}
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body p-md-5">
                  <div className="text-center">
                    <div className="text-danger fs-1">
                      <FaTrashAlt />
                    </div>
                    <div className="mt-4">
                      <h3 className="mb-2 fs-5">Are you sure?</h3>
                      <p className="text-muted fs-lg mx-3 mb-0">
                        Are you sure you want to remove this record?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                  <button type="button" className="close_btn">
                    Close
                  </button>
                  <button type="button" className="delete_btn">
                    Yes, Delete It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default BrandDataTable;
