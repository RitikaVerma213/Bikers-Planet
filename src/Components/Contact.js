//RIDE WITH US....Contact Form

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    contact: "",
    exampleRadios1: "",
    exampleRadios2: "",
  });

  const [formError, setformError] = useState({});

  const onChangeHandler = (e) => {
    console.log(e);
    setformData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data is:",formData);
    let isValid = formValidate();

    if (isValid) {
      alert("Submitted");
    } else {
      alert("InValid Form");
    }
    console.log(isValid);
  };

  const formValidate = () => {
    let err = {};
    if (formData.fname === "") {
      err.fname = "Please enter your First Name *";
    }
    if (formData.lname === "") {
      err.lname = "Please enter your Last Name *";
    }
    if (formData.contact === "") {
        err.contact = "Please enter your Contact Number *";
    }
    // if (formData.exampleRadios1 == "" && formData.exampleRadios2 === "") {
    //   err.exampleRadios = "Please select one checkbox *";
    // }

    setformError({...err});
    return Object.keys(err).length < 1;
  };

  return (
    <div className="container">
      <h1 className="text-center text-purple my-5" data-aos="fade-left">RIDE WITH US</h1>
      <div className="row">
        <div className="col-xl-6 text-center">
          <img
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/midbike.png"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-75"
          />
        </div>

        <div className="col-xl-6">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <div className="row">
                <div className="col-xl">
                  <label className="form-label">First Name</label>
                  <label className="ms-2 text-danger">{formError.fname}</label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    value={formData.fname}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="col-xl">
                  <label className="form-label">Last Name</label>
                  <label className="ms-2 text-danger">{formError.lname}</label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    value={formData.lname}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <label className="ms-2 text-danger">{formError.contact}</label>
              <input
                type="number"
                name="contact"
                className="form-control"
                placeholder="+91"
                onChange={onChangeHandler}
                value={formData.contact}
              />
            </div>
            <hr />

            <h4>Vehicle Mode</h4>
            <label className="ms-2 text-danger">
              {formError.exampleRadios}
            </label>
            <div className="mb-3 form-check">
              <input
                type="radio"
                name="exampleRadios1"
                className="form-check-input"
                onChange={onChangeHandler}
                value={formData.exampleRadios1}
              />
              <label className="form-check-label">Motor-Bike</label>
              <br />

              <input
                type="radio"
                name="exampleRadios2"
                className="form-check-input"
                onChange={onChangeHandler}
                value={formData.exampleRadios2}
              />
              <label className="form-check-label">Car</label>
            </div>
            <hr />

            <button
              type="submit"
              className="bg-purple text-center text-white border-0 rounded w-100 py-2"
            >
              Ride Together
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
