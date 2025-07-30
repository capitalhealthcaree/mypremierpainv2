import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const Footer = dynamic(() => import("../components/_App/Footer"));

const PatientReferral = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>
          Medical Professionals Referring Physician Form & Information
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/referring-a-patient/`}
        />
        <meta
          name="description"
          content="Our best physicians are available to discuss how we can better serve you and meet your patient's needs. Fax: 469-562-4166, call 469-562-4188, or visit www.mypremierpain.com"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Referring A Patient"
        homePageUrl="/"
        homePageText="Home"
        activePageText="anxiety-treatment"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734989532/eaxtnucc2t4dafjwhvwr.png"
      />

      <div className="about-area py-5">
        <div className="container">
          <div className="section-title">
            <h2>Referring a Patient</h2>
          </div>
          <p>
            Premier Pain Centers welcomes the opportunity to partner with you in
            caring for your patients. Our dedicated Referring Physician team is
            available around-the-clock and committed to serving you and your
            patients.
          </p>

          <h2>How Do I Refer a Patient to Premier Pain Centers?</h2>
          <p>
            To refer a patient to a Premier Pain Centers location in Richardson,
            North Richland Hills, Fort Worth, Hillsboro, Desoto, Decatur,
            Farmers Branch, Waxahachie, Corsicana, Cleburne, Plano, Ennis,
            Mesquite, or Gun Barrel City,{" "}
            <Link
              href="https://res.cloudinary.com/dngmflrpx/image/upload/v1735859125/Referral-Form-Doctor_b5c0n1.pdf"
              target="_blank"
              rel="preload"
            >
              <b> please print and fill out our referral form</b>
            </Link>{" "}
            and fax it to 469-562-4166. You can also refer a patient by phone
            using our Hotline at 469-562-4188. Our team is available from 9:00
            AM to 5:00 PM, Monday to Friday.
          </p>
          <div className="services-details-img">
            <blockquote>
              <i className="icofont-quote-left"></i>
              Please contact our Referring Physician Hotline, available from
              9:00 AM to 5:00 PM, Monday to Friday, by calling{" "}
              <a href="tel:+14695624188">469-562-4188</a>.
            </blockquote>
          </div>

          <p>
            You can contact our Referring Physician Hotline for help with all
            your needs, including:
            <ul>
              <li>
                Obtaining information on our clinical specialists and services.
              </li>
              <li>Scheduling and confirming patient appointments.</li>
              <li>
                Assistance in the resolution of any service-related issues.
              </li>
              <li>Connecting with Premier Pain Centers specialists.</li>
            </ul>
            When contacting us to schedule your patients, please have the
            following information readily available:
            <ul>
              <li>Patient demographic information.</li>
              <li>Reason for visit.</li>
              <li>
                Any special needs that will require facilitation once the
                patient arrives.
              </li>
              <li>Patient insurance information, if available.</li>
            </ul>
            We will work with your patient to complete the registration process
            and to schedule an appointment at the patient's convenience. You
            will be notified once the appointment is scheduled.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientReferral;
