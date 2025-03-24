import React from "react";
import Link from "next/link";

export default function HelpingIndividualsSection() {
  return (
    <div className="overflow-hidden">
      <div className="symptoms-area pt-3">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="container">
                <h1>
                  Helping individuals navigate their mental health journey.
                </h1>
                <p>
                  We provide expert psychiatric care, helping individuals
                  navigate their mental health journey with compassion,
                  evidence-based treatments, and personalized support for
                  lasting well-being and recovery.
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
                <img src="/images/helping-individuals-section.png" alt="Symptoms" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
