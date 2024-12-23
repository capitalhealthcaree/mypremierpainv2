import React from "react";

const Services = () => {
  return (
    <>
      <div className="services-area service-area-two pb-4">
        <div className="container">
          <div className="section-title">
            <h2>Covered by all major insurances</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-files-stack"></i>

                  <h3>Highly Effective</h3>

                  <p>
                    TMS has received FDA clearance for addressing depression,
                    anxiety, Obsessive-Compulsive Disorder (OCD), and nicotine
                    addiction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <img
                    className="mb-3"
                    src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989113/j9rgznsllewremvykdh9.png"
                    width={65}
                    height={71}
                  />
                  <h3>Covered by Insurance</h3>
                  <p>
                    TMS therapy is now universally covered by all major
                    insurers, making it financially accessible for a wider range
                    of patients.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-home"></i>
                  <h3>Available Near You</h3>
                  <p>
                    TMS therapy near me is typically offered at nearby mental
                    health clinics, ensuring widespread availability for
                    interested individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
