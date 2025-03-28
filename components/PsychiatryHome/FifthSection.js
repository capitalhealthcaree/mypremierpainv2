import React from "react";
import Link from "next/link";

export default function HelpingIndividualsSection() {
  return (
    <div className="overflow-hidden">
      <div className="symptoms-area pt-3">
        <div className="container p-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="container">
                <h1>Meet Our Team</h1>
                <p>
                  Dr. Ronnie Pollard, MD, is a board-certified psychiatrist
                  based in Dallas, Texas. He earned his medical degree from the
                  University of Texas Medical Branch School of Medicine and
                  completed his residency at Baylor College of Medicine. With
                  over 20 years of experience, Dr. Pollard specializes in
                  diagnosing and treating a range of mental health conditions,
                  including major depressive disorder, anxiety disorders,
                  schizophrenia, and substance abuse.
                </p>

                <div className="about-item">
                  <Link href="/meet-our-team/dr-pollard-psychiatrist-dallas/" rel="preload">
                    Schedule An Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/dr-pollard.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
