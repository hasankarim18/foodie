import React from "react";
import { useFormik } from "formik";

//  error handling
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.email = "Required";
  } else if (typeof values.phone !== "number") {
    errors.email = "phone number must be in numbers";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length >= 250) {
    errors.message = "Must be 250 characters or less";
  }

  return errors;
};

const ContactForm = () => {
  const feedback = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      status: false,
      contactType: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-md-6">
        <form onSubmit={feedback.handleSubmit}>
          {/* first name */}
          <div className="form-group mb-2">
            <label>First Name</label>
            <input
              onChange={feedback.handleChange}
              value={feedback.values.firstName}
              type="text"
              name="firstName"
              className="form-control"
            />
            {feedback.errors.firstName ? (
              <p className="alert alert-danger text-danger fs-6 mt-1 p-1">
                *{feedback.errors.firstName}
              </p>
            ) : null}
          </div>
          {/* last name */}
          <div className="form-group mb-2">
            <label>Last name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={feedback.handleChange}
              value={feedback.values.lastName}
            />
            {feedback.errors.lastName ? (
              <p className="alert alert-danger text-danger fs-6 mt-1 p-1">
                *{feedback.errors.lastName}
              </p>
            ) : null}
          </div>
          {/* email */}
          <div className="form-group mb-2">
            <label>Email: </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={feedback.handleChange}
              value={feedback.values.email}
            />
            {feedback.errors.email ? (
              <p className="alert alert-danger text-danger fs-6 mt-1 p-1">
                *{feedback.errors.email}
              </p>
            ) : null}
          </div>
          {/* telephone */}
          <div className="form-group mb-2">
            <label>Phone: </label>
            <input
              className="form-control"
              type="number"
              name="phone"
              onChange={feedback.handleChange}
              value={feedback.values.phone}
            />
            {feedback.errors.phone ? (
              <p className="alert alert-danger text-danger fs-6 mt-1 p-1">
                *{feedback.errors.phone}
              </p>
            ) : null}
          </div>
          <div className="form-control mb-2">
            <div className="d-flex justify-content-between">
              <div className="">
                <input
                  className=""
                  type="checkbox"
                  name="status"
                  onChange={feedback.handleChange}
                  value={feedback.values.status}
                />
                <label>May we contact you?</label>
              </div>
              <div className="">
                <select
                  type="select"
                  name="contactType"
                  value={feedback.values.contactType}
                  onChange={feedback.handleChange}
                >
                  <option>Tel</option>
                  <option>Email</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group mb-2">
            <label>Your Feedback</label>
            <textarea
              type="textarea"
              name="message"
              onChange={feedback.handleChange}
              value={feedback.values.message}
              className="form-control"
            />
            {feedback.errors.message ? (
              <p className="alert alert-danger text-danger fs-6 mt-1 p-1">
                *{feedback.errors.message}
              </p>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <button
              className="btn w-100 btn-info fs-4 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
