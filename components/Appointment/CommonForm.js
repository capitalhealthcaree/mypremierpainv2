import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import api from "../../utils/api";

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  patientType: "",
  message: "",
};
const alertContent = () => {
  MySwal.fire({
    title: "Appointment Booked!",
    // text: "Your appointment has been successfully booked.",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const CommonForm = ({ isFromHome }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, patientType, message } = formData;
      // Validate required fields
      if (!name || !email || !phone || !patientType || !message) {
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
      const payload = { name, email, phone, patientType, message };
      const response = await api.post("appointment/create", payload);
      if (response.status === 200) {
        setFormData(INITIAL_STATE);
        alertContent();
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
                  Name<small className="text-danger">*</small>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
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
                <select
                  className="form-control"
                  name="patientType"
                  value={formData.patientType}
                  onChange={handleChange}
                >
                  <option>Are you a new patient?</option>
                  <option>Yes, I'm a potential new patient.</option>
                  <option>No, I'm a current existing new patient.</option>
                  <option>I'm neither.</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
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
            <button type="submit" className="btn appointment-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommonForm;
