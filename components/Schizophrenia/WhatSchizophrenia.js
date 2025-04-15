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
                <h2>What's Schizophrenia?</h2>
                <p>
                  Mental and physical health are both seriously affected by
                  schizophrenia. It changes brain activity, therefore
                  influencing behavior, thoughts, memories, and perceptions.
                  Therefore, much about your daily life could be challenging.
                  Untreated schizophrenia compromises intimate, social,
                  professional, and other relationships. Schizophrenia, a severe
                  brain illness, affects fewer than 1% of Americans. Delusions,
                  hallucinations, incoherent speech, cognitive disturbances, and
                  motivation all result from schizophrenia. Therapy can relieve
                  many schizophrenia patients and lower the chance of relapse.
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
                <img src="/images/what-schizophrenia.png" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
