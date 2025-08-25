import React from "react";
import AppointmentForm from "./CommonForm";
import Image from "next/image";

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
                <Image
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734992662/dhf2qx5yhunriv6exnp6.webp"
                  alt="Doctor"
                  width={366}
                  height={419}
                  // loading="lazy"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentFormTwo;
