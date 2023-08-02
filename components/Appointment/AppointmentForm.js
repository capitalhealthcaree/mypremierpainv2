import React from "react";
import AppointmentForm from "./CommonForm";

const AppointmentFormTwo = () => {
  return (
    <>
      <div className="appointment-area-three">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="appointment-item appointment-item-two">
                <h2>Book Your Appointment</h2>
                <span>Appointment confirmation will be provided promptly.</span>
                <AppointmentForm />
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                <img src="/images/doctors/appointment.jpg" alt="Doctor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentFormTwo;
