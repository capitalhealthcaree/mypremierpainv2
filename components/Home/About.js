import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/about.jpg" alt="Symptoms" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.webp" alt="About" />

                <h2>Multidisciplinary Pain Management in Richardson</h2>
                <h4>Reliable, Patient-Focused Care</h4>
                <p>
                  At Premier Pain Centers, we provide patients in Richardson,
                  Fort Worth, and the surrounding areas with treatments for a
                  multitude of conditions and all levels of pain. Our
                  professionals are trained to tailor our treatment plans to
                  your needs and get you back to a better quality of life.
                </p>
                <p>
                  Because of our wide array of treatments, our team can help
                  with nearly every type of muscle and joint condition. Since
                  2008, we have helped numerous patients recover from pain
                  quickly and increase their mobility and overall function. To
                  maximize patient convenience, we are available for same-day
                  appointments and offer services in Spanish and Hindi. We will
                  begin every treatment with a consultation so we can better
                  understand your unique goals.
                </p>

                <Link href="/appointment/">Schedule An Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
