import React, { useState } from "react";
import Swal from "sweetalert2";
import Router from "next/router";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import api from "../../utils/api";

// Form initial state
const INITIAL_STATE = {
  lastName: "",
  // firstName: "",
  email: "",
  phone: "",
  patientType: "",
  message: "",
  location: "",
};
const alertContent = () => {
  MySwal.fire({
    title: "Appointment Booked!",
    // text: "Your appointment has been successfully booked.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const CommonForm = ({ isFromHome }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, email, phone, patientType, message, location } =
        formData;
      // Validate required fields
      if (
        !firstName ||
        !email ||
        !phone ||
        !patientType ||
        !message ||
        !location
      ) {
        MySwal.fire({
          title: "Error",
          text: "Please fill all required(*) fields.",
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }

      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        MySwal.fire({
          title: "Error",
          text: "Please enter a valid email address.",
          icon: "error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        return;
      }
      // firstName, lastName, phone, email, patientType, message
      const payload = {
        firstName,
        lastName: ".",
        email,
        phone,
        patientType,
        message,
        location,
      };
      setLoader(true);
      const response = await api.post("appointment/create", payload);
      if (response.status === 200) {
        setLoader(false);
        setFormData(INITIAL_STATE);
        alertContent();
        setTimeout(() => {
          Router.push("/thank-you");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="appointment-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-business-man-alt-1"></i>
                <label>
                  Full Name<small className="text-danger">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-business-man-alt-1"></i>
                <label>
                  Last Name<small className="text-danger">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div> */}
            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-ui-message"></i>
                <label>
                  Email<small className="text-danger">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-ui-call"></i>
                <label>
                  Phone<small className="text-danger">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-patient-file"></i>
                <label>
                  Patient Type<small className="text-danger">*</small>
                </label>
                <div>
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="patientType"
                      value="I'm a Potential New Patient"
                      checked={
                        formData.patientType === "I'm a Potential New Patient"
                      }
                      onChange={handleChange}
                    />
                    Potential New Patient
                  </label>
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="patientType"
                      value="I'm a Current Existing Patient"
                      checked={
                        formData.patientType ===
                        "I'm a Current Existing Patient"
                      }
                      onChange={handleChange}
                    />
                    Existing Patient
                  </label>
                </div>
              </div>
            </div>
            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-location-pin"></i>
                <label>
                  Please Select Location{" "}
                  <small className="text-danger">*</small>
                </label>
                <select
                  className="form-control"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="">-- Select Location --</option>
                  <option value="Richardson">Richardson</option>
                  <option value="North Richland Hills">
                    North Richland Hills
                  </option>
                  <option value="Waxahachie">Waxahachie</option>
                  <option value="Fort Worth">Fort Worth</option>
                  <option value="Hillsboro">Hillsboro</option>
                  <option value="Desoto">Desoto</option>
                  <option value="Corsicana">Corsicana</option>
                  <option value="Decatur">Decatur</option>
                  <option value="Cleburne">Cleburne</option>
                  <option value="Plano">Plano</option>
                  <option value="Ennis">Ennis</option>
                  <option value="Mesquite">Mesquite</option>
                  <option value="Gun Barrel City">Gun Barrel City</option>
                  <option value="Dallas">Dallas</option>
                  <option value="Kaufman">Kaufman</option>
                </select>
              </div>
            </div>

            <div className={isFromHome ? "col-lg-6" : "col-lg-12"}>
              <div className="form-group">
                <i className="icofont-ui-messaging"></i>
                <label>
                  Message<small className="text-danger">*</small>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn appointment-btn"
              disabled={!loader ? false : true}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommonForm;
