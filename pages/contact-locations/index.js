import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentForm from "../../components/Appointment/AppointmentForm";
import Footer from "../../components/_App/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>
          Contact & Locations: Expert Pain Management Doctors Near Me
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}contact-locations/`}
        />
        <meta
          name="description"
          content="We also provide in person and phone consultations, and schedule appointment within 24-hours. We proudly serve Richardson, Fort Worth, and the surrounding areas."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Contact & Locations"
        homePageUrl="/"
        homePageText="Home"
        activePageText="contact-locations"
        bgImage="/images/contact-and-locations.jpg"
      />
      <div className="departments-area pt-5 pb-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/richardson/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>RICHARDSON</h3>
                  <p>
                    403 W. Campbell Rd., Ste. 305 <br />
                    Richardson, TX 75080
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/north-richland-hills/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>NORTH RICHLAND HILLS</h3>
                  <p>
                    7304 NE Loop 820, Ste. C
                    <br />
                    North Richland Hills, TX 76180
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/fort-worth/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>FORT WORTH</h3>
                  <p>
                    1111 5th Ave,
                    <br />
                    Fort Worth, TX 76104
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/lancaster/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>LANCASTER</h3>
                  <p>
                    2700 W. Pleasant Rd., Ste. 320
                    <br />
                    Lancaster, TX 75146
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/hillsboro/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>HILLSBORO</h3>
                  <p>
                    1323 E. Franklin St., Ste. 102
                    <br />
                    Hillsboro, TX 76645
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/farmers-branch/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>FARMERS BRANCH</h3>
                  <p>
                    13988 Diplomat Dr., Ste. 100
                    <br />
                    Farmers Branch, TX 75234
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/waxahachie/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>WAXAHACHIE OFFICE</h3>
                  <p>
                    20 Northgate Dr
                    <br />
                    Waxahachie, TX 75165
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/corsicana/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>CORSICANA</h3>
                  <p>
                    3108 E. State HWY 22,
                    <br />
                    Corsicana, TX 75102
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/decatur/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>DECATUR</h3>
                  <p>
                    902 Preskitt Rd, Suite 300
                    <br />
                    Dectur, TX 76234
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="/contact-locations/cleburne/">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>CLEBURNE</h3>
                  <p>
                    131 S Westmeadow Dr,
                    <br />
                    Cleburne, TX 76033
                  </p>
                </div>
              </Link>
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

export default Contact;
