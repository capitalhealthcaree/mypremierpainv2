import React from "react";
import Link from "next/link";

export default function TMSSection() {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className=" about-right">
                <h1>Offering top outpatient treatments, including:</h1>
                <hr />
                <p>
                  We specialize in <b>TMS Therapy</b>, offering expert
                  psychiatric care to help individuals overcome mental health
                  challenges with compassion, evidence-based treatment, and
                  personalized support for lasting well-being and recovery.
                </p>

                <div className="about-item">
                  <Link href="/tms-therapy/" rel="preload">
                    About TMS{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="symptoms-img">
                <img src="/images/tms.png" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
