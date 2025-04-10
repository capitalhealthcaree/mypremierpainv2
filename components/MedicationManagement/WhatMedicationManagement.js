import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>What is Medication Management?</h2>
                <p>
                  Medication management ensures safe and effective use of all
                  prescription medications. By controlling prescriptions, one
                  can minimize both hazards and lower side consequences, thereby
                  enhancing health. The list should consist of pharmaceutical
                  names, desiccation, frequency, and any special directions.
                  Share your physician list with your doctors and keep it up to
                  date to avoid interactions, mistakes, and duplication of
                  products. Monitoring the side effects and effectiveness of
                  medicines is part of medication management. Tracking test
                  results, vital signs, and symptoms can aid in gauging
                  treatment response. Your doctor should adjust the dosage or
                  replace the medication should it prove ineffective or have
                  side effects.
                </p>

                <div className="about-item">
                  <Link href="/appointment/" rel="preload">
                    Schedule An Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img
                  src="/images/medication-management.png"
                  alt="Symptoms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
