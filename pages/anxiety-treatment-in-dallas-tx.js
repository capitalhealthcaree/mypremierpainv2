import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import data from "../utils/tmsConditionsWeTreat.json";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../components/Appointment/AppointmentFormSideBar")
);

const AnxietyTreatmentDetails = dynamic(() =>
  import("../components/TmsHome/TmsDetailContent/anxiety-treatment-details.js")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Anxiety Therapists and Psychologists in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/anxiety-treatment-in-dallas-tx/`}
        />
        <meta
          name="description"
          content="Our trained healthcare specialists will help you choose the best anxiety treatment in Dallas based on your needs and medical history."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Anxiety Treatment Centers in Dallas, TX"
        homePageUrl="/"
        homePageText="Home"
        activePageText="anxiety-treatment"
        bgImage="/images/tms-home/tms-banner.png"
      />

      <div className="doctor-details-area pt-4 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <div className="blog-details-item">
                <div className="blog-details-category ps-3">
                  <h3>Conditions We Treat</h3>
                  <ul>
                    {data.map((item, index) => {
                      return (
                        <li key={index}>
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

            <div className="col-lg-8">
              <AnxietyTreatmentDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
