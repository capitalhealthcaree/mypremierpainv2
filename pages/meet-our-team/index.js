import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Physicians from "../../utils/physicians.json";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const Footer = dynamic(() => import("../../components/_App/Footer"));

const Doctors = () => {
  return (
    <>
      <Head>
        <title>Find a Doctor and Specialist In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/`}
        />
        <meta
          name="description"
          content="Looking for a physician? Use our doctor search tool to find the right doctor for you. schedule an appointment online today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Meet Our Qualified Doctors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="doctors"
        bgImage="/images/doctor.webp"
      />

      <div className="doctors-area doctors-area-two pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-center">
            {Physicians.physicians.map((data) => {
              return (
                <div className="col-sm-6 col-lg-3">
                  <div className="doctor-item">
                    <div className="doctor-top">
                      <img src={data.image} alt={data.name} />

                      <Link href="/appointment/" rel="preload">
                        Get Appointment
                      </Link>
                    </div>
                    <div className="doctor-bottom">
                      <h3>
                        <Link href={data.href} rel="preload">
                          {data.name}
                        </Link>
                      </h3>
                      <span>{data.bio}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;
