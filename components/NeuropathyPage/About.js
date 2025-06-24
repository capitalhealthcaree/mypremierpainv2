import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item about-right">
                <h2>Renowned Neuropathy Center in Dallas</h2>
                <p>
                  At Premier Pain Centers, we are committed to providing
                  cutting-edge neurotherapy and neuropathy treatments in a
                  compassionate and supportive environment. Our holistic
                  approach, combined with state-of-the-art technology and expert
                  knowledge, ensures that each patient receives the highest
                  level of care.
                </p>
                <p>
                  With clinics conveniently located in Dallas, Mesquite,
                  Richardson, Plano, North Richland Hills, Fort Worth, Desoto,
                  Cleburne, Decatur, Waxahachie, Hillsboro, Gun Barrel City,
                  Corsicana, and Ennis, we are dedicated to serving communities
                  across Texas.
                </p>
                <p>
                  Our goal is to help you regain control of your health and
                  well-being wherever you are.
                </p>

                <Link href="/appointment/" rel="preload">
                  Schedule An Appointment
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/neuropathy/about.jpg" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
