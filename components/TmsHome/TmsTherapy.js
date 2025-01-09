import React from "react";
import Link from "next/link";

const TmsTherapy = () => {
  return (
    <>
      <div className="spread-area py-5">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 p-0">
              <div className="welcome-item ">
                <img
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1736449068/tms-therapy/clrzo54zcmuhq0oxzavm.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="welcome-item welcome-right">
                <div className="section-title-two pt-3">
                  {/* <span>About Us</span> */}
                  <h2>Who Would Benefit from TMS Therapy?</h2>
                </div>

                <ul>
                  <li>
                    <i>
                      <img
                        src="http://res.cloudinary.com/dngmflrpx/image/upload/v1736453338/tms-therapy/hsoib7ngjdd6vuoz1wyk.png"
                        width={40}
                        height={40}
                      />
                    </i>
                    <div className="welcome-inner">
                      <h3>You've tried Medications</h3>
                      <p>
                        Insurance seeks history of ineffective antidepressants,
                        for side effects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i>
                      <img
                        src="http://res.cloudinary.com/dngmflrpx/image/upload/v1736453462/tms-therapy/sarmxhik1yh0mf2zymmr.png"
                        width={40}
                        height={40}
                      />
                    </i>
                    <div className="welcome-inner">
                      <h3>You've tried Therapy</h3>
                      <p>
                        Insurance approves patients after 6-8 weeks therapy for
                        unresolved depression.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i>
                      <img
                        src="http://res.cloudinary.com/dngmflrpx/image/upload/v1736453527/tms-therapy/seynozld5htpt03ssiwc.png"
                        width={40}
                        height={40}
                      />
                    </i>
                    <div className="welcome-inner">
                      <h3>You still have Depression</h3>
                      <p>
                        After medication and therapy, "treatment-resistant"
                        depression calls for TMS.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="common-btn mt-4">
                  <Link
                    href="/appointment/"
                    style={{
                      backgroundColor: "#0046c0",
                      color: "white",
                    }}
                    rel="preload"
                  >
                    Get Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TmsTherapy;
