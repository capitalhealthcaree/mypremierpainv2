import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title-two">
            <span>Treatments</span>
            <h2>Our TMS Treatments</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item  bg rounded-5"
                style={{
                  backgroundImage:
                    "url('/images/tms-home/treatment-depression.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "280px",
                }}
              >
                <div className="service-front">
                  <i
                    className="icofont-doctor"
                    style={{ visibility: "hidden" }}
                  ></i>
                  {/* <Link href="/service-details"> */}
                    <h3 className="text-white">Major Depressive Disorder</h3>
                  {/* </Link> */}
                  <p style={{ visibility: "hidden" }}>TMS</p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item bg rounded-5"
                style={{
                  backgroundImage:
                    "url('/images/tms-home/treatment-deep-tms.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "280px",
                }}
              >
                <div className="service-front">
                  <i
                    style={{ visibility: "hidden" }}
                    className="icofont-patient-file"
                  ></i>
                  {/* <Link href="/service-details"> */}
                    <h3 className="text-white">Deep TMS Therapy</h3>
                  {/* </Link> */}
                  <p style={{ visibility: "hidden" }}>TMS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item bg rounded-5"
                style={{
                  backgroundImage:
                    "url('/images/tms-home/treatment-disorder.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "280px",
                }}
              >
                <div className="service-front">
                  <i
                    style={{ visibility: "hidden" }}
                    className="icofont-prescription"
                  ></i>
                  {/* <Link href="/service-details"> */}
                    <h3 className="text-white">
                      Obsessive-Compulsive Disorder
                    </h3>
                  {/* </Link> */}
                  <p style={{ visibility: "hidden" }}>TMS</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className="service-item bg rounded-5"
                style={{
                  backgroundImage:
                    "url('/images/tms-home/treatment-accelerated-tms.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "280px",
                }}
              >
                <div className="service-front">
                  <i
                    style={{ visibility: "hidden" }}
                    className="icofont-tooth"
                  ></i>
                  {/* <Link href="/service-details"> */}
                    <h3 className="text-white">Accelerated TMS</h3>
                  {/* </Link> */}
                  <p style={{ visibility: "hidden" }}>TMS</p>
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
