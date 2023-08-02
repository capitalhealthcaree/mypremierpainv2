import React from "react";

const ContactInfo = ({ loc1, loc2 }) => {
  return (
    <>
      <div className="location-area pt-5">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-location-pin"></i>
                <h3>Location</h3>
                <p>
                  {loc1}
                  <br /> {loc2}
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-message"></i>
                <h3>Email</h3>
                <a href="mailto:admin@mypremierpains.com">admin@mypremierpain.com</a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="location-item">
                <i className="icofont-ui-call"></i>
                <h3>Phone</h3>
                <p>
                  <b>Phone:</b> <a href="tel:+14695624188">469-562-4188</a>
                </p>
                <p>
                  <b>Fax:</b> 469-562-4166
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
