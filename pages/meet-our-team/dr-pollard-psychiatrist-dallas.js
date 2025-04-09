import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import data from "../../utils/psychiatryData.json";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Ronnie Pollard, MD - Psychiatrist in Dallas, TX</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/dr-pollard-psychiatrist-dallas/`}
        />
        <meta
          name="description"
          content="Dr. Muhammad Zulqarnain is a pain management physician serving in Dallas and the surrounding communities. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Ronnie Pollard MD"
        homePageUrl="/"
        homePageText="Home"
        activePageText="dr-muhammad-zulqarnain-dr-z-"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734987708/doctors/n7u0hmm6tbwjiodfhvzb.webp"
      />

      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img
                  src="/images/dr-pollard-psychiatrist-dallas.png"
                  alt="MUHAMMAD ZULQARNAIN MD (DR. Z)"
                />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-3">
                    <h3>Conditions We Treat</h3>
                    <ul>
                      {data.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.href} rel="preload">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>Ronnie Pollard MD</b>
                    </h3>
                    <h4>(Board Certified Psychiatrist)</h4>{" "}
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Ronnie Pollard MD, is based in Dallas, Texas, the
                      board-certified psychiatrist. The University of Texas
                      Medical Branch School of Medicine awarded him his medical
                      degree, and he completed his residency at Baylor College
                      of Medicine. With over 20 years of experience in providing
                      <Link
                        href="/psychiatric-services-in-dallas/"
                        rel="preload"
                      >
                        {" "}
                        psychiatric services in Dallas
                      </Link>
                      , Dr. Pollard specializes in diagnosing and treating a
                      range of mental health conditions, including major
                      depressive disorder, anxiety disorders,
                      Obsessive-Compulsive Disorder (OCD), Post-traumatic Stress
                      Disorder (PTSD), Migraine Headaches, Smoking Cessation,
                      Adolescent Depression, PTSD, Schizophrenia, and substance
                      abuse. He diagnoses and treats a broad spectrum of such
                      conditions, including{" "}
                      <Link
                        href="/adhd-testing-services-in-dallas/"
                        rel="preload"
                      >
                        ADHD Testing
                      </Link>
                      .
                    </p>

                    <p>
                      He's noted for his sympathetic manner and dedication to
                      patient care, which guarantees every person gets the help
                      they require. To support psychological well-being, Dr.
                      Ronnie Pollard takes a holistic approach to patient care
                      that includes psychotherapy (
                      <Link href="/talk-therapy-dallas/" rel="preload">
                        talk therapy
                      </Link>
                      ) along with{" "}
                      <Link
                        href="/medication-management-in-dallas/"
                        rel="preload"
                      >
                        medication management
                      </Link>
                      . Working closely with every patient, he develops a
                      customized treatment plan according to their particular
                      requirements. By devoting himself to offering
                      individualized treatment based on every patient's
                      particular requirements, Dr. Pollard assists them in
                      attaining long-lasting emotional and mental health through
                      effective{" "}
                      <Link href="/tms-therapy/" rel="preload">
                        TMS Therapy
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="doctor-details-contact">
                    <h3>Contact info</h3>
                    <ul>
                      <li style={{ marginLeft: "-5px" }}>
                        <i
                          className="icofont-ui-call"
                          style={{ fontSize: "30px" }}
                        ></i>

                        <a href="tel:+14695624188">469-562-4188</a>
                      </li>
                      <li>
                        <i
                          className="icofont-ui-message"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <a href="mailto:admin@mypremierpain.com">
                          admin@mypremierpain.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-details-biography"></div>
                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <ul>
                          <li>
                            Monday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Tuesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Wednesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Thursday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Friday <span>9:00 AM - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
