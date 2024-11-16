import React from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import ProdListTable from "./ProdListTable";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const ProductList = () => {
  const sampleData = [
    {
      id: 1,
      productId: "PROD-00001",
      name: "Basic Tee",
      status: "Active",
      category: "T-Shirt",
      brand: "ComfortWear",
      buyingPrice: "300.00",
      sellingPrice: "600.00",
      discount: "50.00",
      specialPrice: "550.00",
      unit: "Piece",
      quantity: "500",
      image:
        "https://e7.pngegg.com/pngimages/946/739/png-clipart-plain-black-t-shirt-t-shirt-v-neck-t-shirt-sleeve-fashion-thumbnail.png",
    },
    {
      id: 2,
      productId: "PROD-00002",
      name: "Creative Shirt",
      status: "Active",
      category: "T-Shirt",
      brand: "Easy",
      buyingPrice: "450.00",
      sellingPrice: "1000.00",
      discount: "250.00",
      specialPrice: "750.00",
      unit: "Piece",
      quantity: "750",
      image:
        "https://e7.pngegg.com/pngimages/596/587/png-clipart-t-shirt-gildan-activewear-sleeve-clothing-crew-neck-pure-cotton-tshirt-blue.png",
    },
    {
      id: 3,
      productId: "PROD-00003",
      name: "Graphic T-Shirt",
      status: "Active",
      category: "T-Shirt",
      brand: "UrbanStyle",
      buyingPrice: "500.00",
      sellingPrice: "1200.00",
      discount: "200.00",
      specialPrice: "1000.00",
      unit: "Piece",
      quantity: "650",
      image:
        "https://e7.pngegg.com/pngimages/713/390/png-clipart-t-shirt-v-neck-shirt-wish-store-sleeve-white-t-shirt-template.png",
    },
    {
      id: 4,
      productId: "PROD-00004",
      name: "Casual Polo",
      status: "Active",
      category: "Polo Shirt",
      brand: "ClassicFit",
      buyingPrice: "550.00",
      sellingPrice: "1300.00",
      discount: "150.00",
      specialPrice: "1150.00",
      unit: "Piece",
      quantity: "300",
      image:
        "https://e7.pngegg.com/pngimages/748/883/png-clipart-polo-shirt-t-shirt-polo-neck-white-blue-thumbnail.png",
    },
    {
      id: 5,
      productId: "PROD-00005",
      name: "Formal Shirt",
      status: "Active",
      category: "Shirt",
      brand: "OfficeWear",
      buyingPrice: "700.00",
      sellingPrice: "1600.00",
      discount: "200.00",
      specialPrice: "1400.00",
      unit: "Piece",
      quantity: "450",
      image:
        "https://e7.pngegg.com/pngimages/313/528/png-clipart-dress-shirt-sleeve-top-dress-shirt-blue-formal-shirt-thumbnail.png",
    },
    {
      id: 6,
      productId: "PROD-00006",
      name: "Denim Jacket",
      status: "Inactive",
      category: "Jacket",
      brand: "CoolDenim",
      buyingPrice: "1200.00",
      sellingPrice: "2500.00",
      discount: "500.00",
      specialPrice: "2000.00",
      unit: "Piece",
      quantity: "150",
      image:
        "https://e7.pngegg.com/pngimages/918/72/png-clipart-jacket-denim-jacket-pants-t-shirt-jeans-denim-thumbnail.png",
    },
    {
      id: 7,
      productId: "PROD-00007",
      name: "Slim Fit Jeans",
      status: "Active",
      category: "Jeans",
      brand: "TrendyFit",
      buyingPrice: "800.00",
      sellingPrice: "1800.00",
      discount: "300.00",
      specialPrice: "1500.00",
      unit: "Piece",
      quantity: "500",
      image:
        "https://e7.pngegg.com/pngimages/734/75/png-clipart-jeans-slim-fit-trousers-blue-denim-thumbnail.png",
    },
    {
      id: 8,
      productId: "PROD-00008",
      name: "Cotton Hoodie",
      status: "Active",
      category: "Hoodie",
      brand: "ComfyWear",
      buyingPrice: "900.00",
      sellingPrice: "2000.00",
      discount: "400.00",
      specialPrice: "1600.00",
      unit: "Piece",
      quantity: "600",
      image:
        "https://e7.pngegg.com/pngimages/488/730/png-clipart-hoodie-sweatshirt-clothing-t-shirt-sweater-thumbnail.png",
    },
    {
      id: 9,
      productId: "PROD-00009",
      name: "Round Neck Sweater",
      status: "Inactive",
      category: "Sweater",
      brand: "WinterStyle",
      buyingPrice: "1100.00",
      sellingPrice: "2200.00",
      discount: "300.00",
      specialPrice: "1900.00",
      unit: "Piece",
      quantity: "250",
      image:
        "https://e7.pngegg.com/pngimages/859/40/png-clipart-jumper-sweater-sleeve-wool-pullover-thumbnail.png",
    },
    {
      id: 10,
      productId: "PROD-00010",
      name: "Sport Shoes",
      status: "Active",
      category: "Shoes",
      brand: "Athleisure",
      buyingPrice: "1500.00",
      sellingPrice: "3000.00",
      discount: "500.00",
      specialPrice: "2500.00",
      unit: "Pair",
      quantity: "400",
      image:
        "https://e7.pngegg.com/pngimages/598/968/png-clipart-nike-air-force-1-shoe-nike-air-max-running-nike-blue-thumbnail.png",
    },
  ];

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
                    Product
                  </li>
                </ol>
              </nav>
            </div>

            <div className="ms-auto">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  <Link
                    to="/product-add"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <TbCirclePlus className="fs-6 text-white texxt_icon" />
                    <span className="text-white texxt">Add Product</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}

          <div className="layout">
            <div className="ProductList_wrapper">
              <div className="ProductList">
                <div className="">
                  <div className="row d-flex justify-content-between align-items-center catry_row mb-4">
                    <div className="col-6">
                      <div className="d-flex justify-content-start align-items-center catry_title">
                        {/* <h4 className="m-0 fs-5">Product</h4> */}
                      </div>
                    </div>

                    <div className="col-6">
                      {/* <div className="d-flex justify-content-end align-items-center add_catry">
                        <i className="bi bi-plus-circle align-baseline me-1"></i>
                        <button className="buttn">
                          <Link to="/productadd" className="buttn_link">
                            <TbCirclePlus className="fs-6" />
                            <span className="bttn_title">Add Product</span>
                          </Link>
                        </button>
                      </div> */}
                    </div>
                  </div>

                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-12">
                      <ProdListTable data={sampleData} />
                    </div>
                  </div>
                </div>

                {/* ===== Delete Modal ===== */}
                <div className="modal fade" id="delete_productList_modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 py-2">
                        <h5 className="modal-title">Modal title</h5>
                        <Link
                          to="#"
                          className="primaery-menu-close"
                          data-bs-dismiss="modal"
                        >
                          <i className="material-icons-outlined">close</i>
                        </Link>
                      </div>

                      <div className="modal-body p-md-5">
                        <div className="text-center">
                          <div className="text-danger fs-1">
                            <FaTrashAlt />
                          </div>
                          <div className="mt-4">
                            <h3 className="mb-2 fs-5">Are you sure?</h3>
                            <p className="fs-lg mx-3 mb-0">
                              Are you sure you want to remove this record?
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="modal-footer border-top-0">
                        <button
                          type="button"
                          className="btn btn-grd-danger"
                          // data-bs-dismiss="modal"
                        >
                          Yes, Delete It!
                        </button>
                        <button
                          type="button"
                          className="btn btn-grd-info"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .layout {
  }
  .ProductList_wrapper {
  }
  .ProductList {
    /* padding: 20px 20px; */
  }
  .catry_row .catry_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .buttn {
    /* background-color: #1d2634; */
    /* color: #fff; */
    border: none;
    border-radius: 4px;
    padding: 10px 8px !important;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  /* .add_catry .buttn:hover {
    background-color: #424141;
  } */
  .buttn_link {
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }

  .catry_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (max-width: 320px) {
    .catry_row .add_catry .buttn {
      padding: 5px;
    }
    .catry_row .bttn_title {
      font-size: 12px;
    }
  }
`;

export default ProductList;
