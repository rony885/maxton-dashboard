import React, { useState } from "react";
// import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SaleProductForm from "./SaleProductForm";

const initialValues = {
  courier: "",
  customer: "",
  customer_type: "",
  delivery_type: "",

  order_date: "",
  delivery_status: "",
  payment_method: "",
  note: "",

  total_item: "",
  total_amount: "",
  discount: "",
  payable_amount: "",
  paid_amount: "",
  due_amount: "",
  delivery_charge: "",
  grand_total_amount: "",

  name: "",
  email: "",
  password: "",
  district: "",
  upazila: "",
  address: "",
};

const schema = yup.object().shape({
  courier: yup.string(),
  customer: yup.string(),
  customer_type: yup.string().required("Customer Type is a required field!"),
  delivery_type: yup.string().required("Delivery Type is a required field!"),

  order_date: yup.string().required("Order Date is a required field!"),
  payment_method: yup.string().required("Payment Method is a required field!"),
  delivery_status: yup.string(),
  note: yup.string(),

  total_item: yup.string(),
  total_amount: yup.string(),
  discount: yup.string(),
  payable_amount: yup.string(),
  paid_amount: yup.string(),
  due_amount: yup.string(),
  delivery_charge: yup.string(),
  grand_total_amount: yup.string(),

  name: yup.string().required("Customer Name is a required field!"),
  email: yup.string().required("Customer Phone is a required field!"),
  password: yup.string(),
  district: yup.string().required("Customer District is a required field!"),
  upazila: yup.string().required("Customer Upazila is a required field!"),
  address: yup.string().required("Customer Address is a required field!"),
});

const prevSchema = yup.object().shape({
  courier: yup.string(),
  customer: yup.string().required("Customer  is a required field!"),
  customer_type: yup.string().required("Customer Type is a required field!"),
  delivery_type: yup.string().required("Delivery Type is a required field!"),

  order_date: yup.string().required("Order Date is a required field!"),
  payment_method: yup.string().required("Payment Method is a required field!"),
  delivery_status: yup.string(),
  note: yup.string(),

  total_item: yup.string(),
  total_amount: yup.string(),
  discount: yup.string(),
  payable_amount: yup.string(),
  paid_amount: yup.string(),
  due_amount: yup.string(),
  delivery_charge: yup.string(),
  grand_total_amount: yup.string(),
});

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Phone or Username is required!";
  } else if (/^[0-9\b]+$/.test(values.email) === false) {
    errors.email = "Only number!";
  } else if (values.email.length !== 11) {
    errors.email = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const prevValidate = (values) => {
  let errors = {};

  return errors;
};

const SellProductAdd = () => {
  const [cus_type, set_cus_type] = useState();
  // const [cus_state, setCusState] = useState();

  const [message, setMessage] = useState();
  // const navigate = useNavigate();

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  // const handleDistrictChange = (e) => {
  //   const selectedDistrictName = e.target.value;
  //   setSelectedDistrict(
  //     district.find((district) => district.name === selectedDistrictName)
  //   );
  //   setSelectedUpazila("");
  // };

  // const handleUpazilaChange = (e) => {
  //   const selectedUpazilaName = e.target.value;
  //   setSelectedUpazila(
  //     upazila.find((upazila) => upazila.name === selectedUpazilaName)
  //   );
  // };
  const [productList, setProductList] = useState([
    {
      productId: null,
      bdtRate: 0,
      quantity: 0,
      linePrice: 0,
      discount: 0,
    },
  ]);

  return (
    <Wrapper>
      <main className="main-wrapper">
        <div className="main-content">
          {/* <!--breadcrumb--> */}
          <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
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
                      Sale Entry
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="ms-auto">
              <div className="d-flex justify-content-end align-items-center add_catry">
                {/* <i className="bi bi-plus-circle align-baseline me-1"></i> */}
                {/* <button className="buttn">
                  <TbCirclePlus className="fs-6" />
                  <span className="bttn_title">
                    <Link
                      to="/sell-product-add"
                      className="order_link text-dark"
                    >
                      Add Seles
                    </Link>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
          {/* <!--end breadcrumb--> */}
          <div className="row d-flex justify-content-between align-items-center">
            <div class="card">
              <div class="card-body">
                <div className="layout">
                  <div className="orderAdd_wrapper">
                    <div className="orderAdd">
                      <Formik
                        initialValues={initialValues}
                        // validationSchema={cus_state ? schema : prevSchema}
                        // onSubmit={cus_state ? submitOrderForm : submitPrevOrderForm}
                        // validate={cus_state ? validate : prevValidate}
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          isSubmitting,
                          values,
                          errors,
                          touched,
                        }) => (
                          <FormikForm
                            noValidate
                            onSubmit={(e) => handleSubmit(e)}
                          >
                            <div className="card overflow-hidden">
                              <div className="card-body card-body z-1 position-relative">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between mb-3">
                                      <h4 className="mb-sm-0">Sale Details</h4>
                                    </div>
                                  </div>
                                </div>

                                <div className="row g-3">
                                  <Form.Group className="form-outline mb-4 col-lg-3">
                                    <Form.Label>
                                      Order Date<span>*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Control
                                        type="date"
                                        name="order_date"
                                        id="order_date"
                                        value={values.order_date}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.order_date &&
                                          !!errors.order_date
                                        }
                                        isValid={
                                          touched.order_date &&
                                          !errors.order_date
                                        }
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.order_date}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>

                                  <Form.Group className="form-outline mb-4 col-lg-3">
                                    <Form.Label>
                                      Payment Method<span>*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Select
                                        name="payment_method"
                                        id="payment_method"
                                        value={values.payment_method}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.payment_method &&
                                          !!errors.payment_method
                                        }
                                        isValid={
                                          touched.payment_method &&
                                          !errors.payment_method
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Bkash">Bkash</option>
                                        <option value="Nagad">Nagad</option>
                                        <option value="Cash On Delivery">
                                          Cash On Delivery
                                        </option>
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.payment_method}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>

                                  <Form.Group className="form-outline mb-4 col-lg-3">
                                    <Form.Label>
                                      Courier<span></span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Select
                                        name="courier"
                                        id="courier"
                                        value={values.courier}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.courier && !!errors.courier
                                        }
                                        isValid={
                                          touched.courier && !errors.courier
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        {/* {unpaginate_courier &&
                                  unpaginate_courier.map((item) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })} */}
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.payment_method}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>

                                  <Form.Group className="form-outline mb-4 col-lg-3">
                                    <Form.Label>
                                      Delivery Status<span></span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Select
                                        name="delivery_status"
                                        id="delivery_status"
                                        value={values.delivery_status}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.delivery_status &&
                                          !!errors.delivery_status
                                        }
                                        isValid={
                                          touched.delivery_status &&
                                          !errors.delivery_status
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value="New">New</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">
                                          Approved
                                        </option>
                                        <option value="Packaging">
                                          Packaging
                                        </option>
                                        <option value="Shipment">
                                          Shipment
                                        </option>
                                        <option value="Delivered">
                                          Delivered
                                        </option>
                                        {/* <option value="Return">Return</option>
                                <option value="Cancel">Cancel</option>
                                <option value="Wholesale">Wholesale</option> */}
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.delivery_status}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>

                                <div className="row g-3">
                                  <Form.Group className="form-outline mb-4">
                                    <Form.Label>
                                      Note<span></span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Control
                                        as="textarea"
                                        name="note"
                                        id="note"
                                        value={values.note}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.note && !!errors.note
                                        }
                                        isValid={touched.note && !errors.note}
                                        className="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.note}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>

                                <div className="row g-3">
                                  <Form.Group className="form-outline mb-4 col-lg-4">
                                    <Form.Label>
                                      Delivery Type<span>*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Select
                                        name="delivery_type"
                                        id="delivery_type"
                                        value={values.delivery_type}
                                        // onChange={(e) => {
                                        //   handleChange(e);
                                        //   handleDelTypeChange(e);
                                        // }}
                                        isInvalid={
                                          !!touched.delivery_type &&
                                          !!errors.delivery_type
                                        }
                                        isValid={
                                          touched.delivery_type &&
                                          !errors.delivery_type
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        {/* {isActiveDeliveryType &&
                                  isActiveDeliveryType.map((item) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}&nbsp;-&nbsp;{item.amount}
                                        &nbsp;Tk
                                      </option>
                                    );
                                  })} */}
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.delivery_type}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>

                                  <Form.Group className="form-outline mb-4 col-lg-4 ">
                                    <Form.Label>
                                      Customer Type<span>*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      {/* <InputGroup.Text>@</InputGroup.Text> */}
                                      <Form.Select
                                        name="customer_type"
                                        id="customer_type"
                                        value={values.customer_type}
                                        onChange={(e) => {
                                          set_cus_type(e.target.value);
                                          handleChange(e);
                                        }}
                                        isInvalid={
                                          !!touched.customer_type &&
                                          !!errors.customer_type
                                        }
                                        isValid={
                                          touched.customer_type &&
                                          !errors.customer_type
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value="prev">
                                          Previous Customer
                                        </option>
                                        <option value="new">
                                          New Customer
                                        </option>
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.customer_type}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>

                                  {cus_type === "prev" && (
                                    <Form.Group className="form-outline mb-4 col-lg-4">
                                      <Form.Label>
                                        Customer<span>*</span>
                                      </Form.Label>
                                      <InputGroup hasValidation>
                                        {/* <InputGroup.Text>@</InputGroup.Text> */}
                                        <Form.Select
                                          name="customer"
                                          id="customer"
                                          value={values.customer}
                                          onChange={handleChange}
                                          isInvalid={
                                            !!touched.customer &&
                                            !!errors.customer
                                          }
                                          isValid={
                                            touched.customer && !errors.customer
                                          }
                                          className="form-control mb-0"
                                        >
                                          <option value="">Select</option>
                                          {/* {all_users &&
                                    all_users.map((c, i) => {
                                      return (
                                        <option value={c.id} key={i}>
                                          {c.name}-{c.email}
                                        </option>
                                      );
                                    })} */}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                          {errors.customer}
                                        </Form.Control.Feedback>
                                      </InputGroup>
                                    </Form.Group>
                                  )}
                                </div>

                                {cus_type === "new" && (
                                  <>
                                    <div className="row g-3">
                                      <Form.Group className="form-outline mb-4">
                                        <Form.Label>
                                          Customer Name<span>*</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                                          <Form.Control
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={
                                              !!touched.name && !!errors.name
                                            }
                                            isValid={
                                              touched.name && !errors.name
                                            }
                                            className="form-control mb-0"
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                    </div>

                                    <div className="row g-3">
                                      <Form.Group className="form-outline mb-4 col-lg-4">
                                        <Form.Label>
                                          Phone<span>*</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                                          <Form.Control
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={
                                              !!touched.email && !!errors.email
                                            }
                                            isValid={
                                              touched.email && !errors.email
                                            }
                                            className="form-control mb-0"
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>

                                      <Form.Group className="form-outline mb-4 col-lg-4">
                                        <Form.Label>
                                          District<span>*</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                                          <Form.Select
                                            name="district"
                                            id="district"
                                            value={
                                              selectedDistrict
                                                ? selectedDistrict.name
                                                : ""
                                            }
                                            // onChange={(e) => {
                                            //   handleChange(e);
                                            //   handleDistrictChange(e);
                                            // }}
                                            isInvalid={
                                              !!touched.district &&
                                              !!errors.district
                                            }
                                            isValid={
                                              touched.district &&
                                              !errors.district
                                            }
                                            className="form-control mb-0"
                                          >
                                            <option value="">Select</option>
                                            {/* {district &&
                                      district.map((d, i) => {
                                        return (
                                          <option value={d.name} key={i}>
                                            {d.name}-{d.bn_name}
                                          </option>
                                        );
                                      })} */}
                                          </Form.Select>
                                          <Form.Control.Feedback type="invalid">
                                            {errors.district}
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>

                                      <Form.Group className="form-outline mb-4 col-lg-4">
                                        <Form.Label>
                                          Upazila<span>*</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                                          <Form.Select
                                            name="upazila"
                                            id="upazila"
                                            value={
                                              selectedUpazila
                                                ? selectedUpazila.name
                                                : ""
                                            }
                                            // onChange={(e) => {
                                            //   handleChange(e);
                                            //   handleUpazilaChange(e);
                                            // }}
                                            isInvalid={
                                              !!touched.upazila &&
                                              !!errors.upazila
                                            }
                                            isValid={
                                              touched.upazila && !errors.upazila
                                            }
                                            className="form-control mb-0"
                                          >
                                            <option value="">Select</option>
                                            {/* {upazila &&
                                      upazila
                                        .filter(
                                          (upazila) =>
                                            upazila.district ===
                                            (selectedDistrict
                                              ? selectedDistrict.id
                                              : null)
                                        )
                                        .map((upazila) => {
                                          return (
                                            <option
                                              key={upazila.id}
                                              value={upazila.name}
                                            >
                                              {upazila.name}-{upazila.bn_name}
                                            </option>
                                          );
                                        })} */}
                                          </Form.Select>
                                          <Form.Control.Feedback type="invalid">
                                            {errors.upazila}
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                    </div>

                                    <div className="row g-3">
                                      <Form.Group className="form-outline mb-4">
                                        <Form.Label>
                                          Customer Address<span>*</span>
                                        </Form.Label>
                                        <InputGroup hasValidation>
                                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                                          <Form.Control
                                            as="textarea"
                                            name="address"
                                            id="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            isInvalid={
                                              !!touched.address &&
                                              !!errors.address
                                            }
                                            isValid={
                                              touched.address && !errors.address
                                            }
                                            className="form-control mb-0"
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            {errors.address}
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>

                            <SaleProductForm
                              productList={productList}
                              setProductList={setProductList}
                              // unpaginate_product={unpaginate_product}
                            />

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <div className="d-flex align-items-center"></div>
                                <Form.Label>
                                  Sub Total Amount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="total_amount"
                                    id="total_amount"
                                    // value={calculatedTotalAmount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.total_amount &&
                                      !!errors.total_amount
                                    }
                                    isValid={
                                      touched.total_amount &&
                                      !errors.total_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.total_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Dsicount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="discount"
                                    id="discount"
                                    // value={calculatedTotalDiscount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.discount && !!errors.discount
                                    }
                                    isValid={
                                      touched.discount && !errors.discount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.discount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Delivery Charge<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="delivery_charge"
                                    id="delivery_charge"
                                    // value={deliveryPrice}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.delivery_charge &&
                                      !!errors.delivery_charge
                                    }
                                    isValid={
                                      touched.delivery_charge &&
                                      !errors.delivery_charge
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.delivery_charge}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Payable Amount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="payable_amount"
                                    id="payable_amount"
                                    // value={payableAmount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.payable_amount &&
                                      !!errors.payable_amount
                                    }
                                    isValid={
                                      touched.payable_amount &&
                                      !errors.payable_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.payable_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Paid Amount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="paid_amount"
                                    id="paid_amount"
                                    // value={paidAmount}
                                    // onChange={(e) => {
                                    //   if (e && e.target) {
                                    //     // Null check to ensure e and e.target are defined
                                    //     const inputValue = parseFloat(e.target.value);
                                    //     if (!isNaN(inputValue)) {
                                    //       setPaidAmount(inputValue);
                                    //     } else {
                                    //       setPaidAmount(0); // or any default value you prefer
                                    //     }
                                    //   }
                                    // }}
                                    isInvalid={
                                      !!touched.paid_amount &&
                                      !!errors.paid_amount
                                    }
                                    isValid={
                                      touched.paid_amount && !errors.paid_amount
                                    }
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.paid_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Due Amount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="due_amount"
                                    id="due_amount"
                                    // value={dueAmount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.due_amount &&
                                      !!errors.due_amount
                                    }
                                    isValid={
                                      touched.due_amount && !errors.due_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.due_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="row d-flex align-items-center justify-content-end">
                              <Form.Group className="form-outline mb-4 col-lg-3 ">
                                <Form.Label>
                                  Total Amount<span>*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="grand_total_amount"
                                    id="grand_total_amount"
                                    // value={grandTotalAmount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.grand_total_amount &&
                                      !!errors.grand_total_amount
                                    }
                                    isValid={
                                      touched.grand_total_amount &&
                                      !errors.grand_total_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.grand_total_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="hstack gap-2 justify-content-end mt-3 my-2">
                              <button type="reset" className="btn btn-danger">
                                Cancel
                              </button>

                              <button
                                // disabled={
                                //   isSubmitting || productList[0].productId === null
                                // }
                                type="submit"
                                className="btn btn-success"
                              >
                                <i className="ri-printer-line align-bottom me-1"></i>
                                Save
                              </button>
                            </div>

                            <div className="hstack gap-2 flex-wrap justify-content-end d-print-none my-4">
                              {/* message  */}
                              {message && (
                                <h2 className="text-center m-5">{message}</h2>
                              )}
                            </div>
                          </FormikForm>
                        )}
                      </Formik>
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
  .orderAdd_wrapper {
  }
  .orderAdd {
    /* padding: 20px 20px; */
  }
  .orderAdd h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .orderAdd h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control,
  .form-select {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }

  //formik css
  .invalid-feedback {
    font-size: 10px;
    color: red;
  }

  input,
  select,
  textarea {
    /* background-color: white; */
    /* color: black; */
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 3px;

    &:focus {
      outline: none;
      border-color: #000;
    }
  }

  option {
    font-size: 12px;
  }

  label {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 5px 0;

    span {
      color: red;
    }
  }

  .imgDiv {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  section,
  .divv,
  .css-b62m3t-container,
  .css-3iigni-container {
    width: 100%;
  }

  .css-b62m3t-container,
  .css-3iigni-container {
    /* background-color: white; */
    /* color: black; */
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .select {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* background: #fff; */
    width: 100%;
  }
  .select option:checked {
    background-color: orange;
  }
  .checkbox-group {
    display: flex;
    gap: 10px;
  }

  //formik css
  @media screen and (max-width: 425px) {
    .card_form .card_resv {
      margin-bottom: 5px !important;
    }
  }
  /* ====== home responsive ====== */
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
    .texxt,
    .texxt_icon {
      font-size: 14px !important;
    }
  }
  @media screen and (max-width: 320px) {
    .breadcrumb-title,
    .breadcrumb-item,
    .texxt,
    .texxt_icon {
      font-size: 14px !important;
    }
  }
`;

export default SellProductAdd;
