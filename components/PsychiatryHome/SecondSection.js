import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Affordable & Expert Help</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/psychiatrist.png"
                        alt="Expertise"
                      />
                      <h3>Psychiatrist Evaluations</h3>
                      <p>
                        Our psychiatrists evaluate your mental health and
                        recommend the best treatment options.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/medication.png"
                        alt="Expertise"
                      />{" "}
                      <h3>Medication Management</h3>
                      <p>
                        Our experts help find the right medications to manage
                        symptoms and minimize effects.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <img
                        className="mb-3"
                        src="/images/mental-health.png"
                        alt="Expertise"
                      />{" "}
                      <h3>TMS</h3>
                      <p>
                        Non-invasive treatment proven twice as effective as
                        treatment for resistant depression.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                    <img
                        className="mb-3"
                        src="/images/adhd.png"
                        alt="Expertise"
                      />{" "}
                      
                      <h3>ADHD Testing</h3>
                      <p>
                        Discover if you or your child has ADHD and manage
                        symptoms with medication and therapy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <img
                  src="/images/helping-individuals-section.png"
                  alt="Expertise"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
