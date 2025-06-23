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
                  Ronnie Pollard MD, is the best board-certified psychiatrist in
                  Dallas , Texas. The University of Texas Medical Branch School
                  of Medicine awarded him his medical degree, and he completed
                  his residency at Baylor College of Medicine. With over 20
                  years of experience in providing psychiatric services in
                  Dallas , Dr. Pollard specializes in diagnosing and treating a
                  range of mental health conditions, including major depressive
                  disorder, anxiety disorders, Obsessive-Compulsive Disorder
                  (OCD), Post-traumatic Stress Disorder (PTSD), Migraine
                  Headaches, Smoking Cessation, Adolescent Depression, PTSD,
                  Schizophrenia, and substance abuse. He diagnoses and treats a
                  broad spectrum of such conditions, including ADHD Testing .
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
                <img src="/images/dr-pollard-psychiatrist-dallas.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
