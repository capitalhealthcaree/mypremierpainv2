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
                  Ronnie Pollard MD, is based in Dallas, Texas, the
                  board-certified psychiatrist. The University of Texas Medical
                  Branch School of Medicine awarded him his medical degree, and
                  he completed his residency at Baylor College of Medicine. With
                  over 20 years of experience in providing
                  <Link href="/psychiatric-services-in-dallas/" rel="preload">
                    {" "}
                    psychiatric services in Dallas
                  </Link>
                  , Dr. Pollard specializes in diagnosing and treating a range
                  of mental health conditions, including major depressive
                  disorder, anxiety disorders, Obsessive-Compulsive Disorder
                  (OCD), Post-traumatic Stress Disorder (PTSD), Migraine
                  Headaches, Smoking Cessation, Adolescent Depression, PTSD,
                  Schizophrenia, and substance abuse. He diagnoses and treats a
                  broad spectrum of such conditions, including{" "}
                  <Link href="/adhd-testing-services-in-dallas/" rel="preload">
                    ADHD Testing
                  </Link>
                  .
                </p>

                <div className="about-item">
                  <Link
                    href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                    rel="preload"
                  >
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
