import React from "react";
import Link from "next/link";

export default function ImproveLifeSection() {
  return (
    <div className="overflow-hidden">
      <div className="symptoms-area pt-3">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <source src="/images/life-quality.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <h1>Enhancing your quality of life, together!</h1>
                <p>
                  We are committed to improving your well-being through expert
                  care, innovative solutions, and personalized support.
                  Together, we can create a healthier, happier life by
                  prioritizing your mental and physical wellness with compassion
                  and evidence-based practices.
                </p>

                <div className="about-item">
                  <Link href="/appointment/" rel="preload">
                    Schedule An Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
