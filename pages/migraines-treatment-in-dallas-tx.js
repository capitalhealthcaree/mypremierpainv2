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

const MigrainesTreatmentDetails = dynamic(() =>
  import(
    "../components/TmsHome/TmsDetailContent/migraines-treatment-details.js"
  )
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Best Migraine Specialist Near Dallas, Texas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/trauma-treatment-in-dallas-fort-worth/`}
        />
        <meta
          name="description"
          content="People rarely go for chronic migraine treatments in Dallas because they exacerbate the condition, but a good physician can handle the situation."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Migraines Treatment Centers in Dallas, TX"
        homePageUrl="/"
        homePageText="Home"
        activePageText="migraines-treatment"
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
              <MigrainesTreatmentDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
