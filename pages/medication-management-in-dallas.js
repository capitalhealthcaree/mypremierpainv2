import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const NavbarAppointment = dynamic(() =>
  import("../components/_App/NavbarAppointment")
);

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const WhatMedicationManagement = dynamic(() =>
  import("../components/MedicationManagement/WhatMedicationManagement")
);

const WhyChoose = dynamic(() =>
  import("../components/MedicationManagement/WhyChoose")
);

const HowDoesWork = dynamic(() =>
  import("../components/MedicationManagement/HowDoesWork")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Index = () => {
  return (
    <>
      <Head>
        <title>Expert Medication Management & Psychiatric Care in Dallas</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/tms-therapy/`}
        />
        <meta
          name="description"
          content="Get personalized medication management in Dallas from experienced professionals. Safe, effective, and tailored treatment plans for better mental health."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <NavbarAppointment />
      <PageBanner
        pageTitle="Medication Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="back-pain"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1736455854/tms-therapy/yn0oqdzovgkkcjt5oezi.png"
      />
      <WhatMedicationManagement />
      <div className="container">
        <div className="section-title">
          <h2>Medication Management Benefits</h2>
        </div>
        <p>
          Your prescribed medicines will meet your mental health requirements
          thanks to the ongoing, individualized process of medication
          management. It involves working with an experienced professional who
          reviews your treatment plan, changes doses, and watches for side
          effects and drug interactions. By freely discussing feelings and
          questions, this collaborative method maintains a balanced, successful
          treatment strategy that supports your long-term well-being.
        </p>
        <h3>Personalized and Collaborative Medication Management</h3>
        <p>
          Medication management goes beyond a daily list. Instead, comprehensive
          medication management is personalized to your health, comorbidities,
          lifestyle, and other factors that may affect your prescription
          therapy. One person's solution may not work for another. If your work
          schedule changes, a once-monthly injectable medicine may be more
          convenient than a daily tablet. Whether you take medicine for anxiety
          or cholesterol, Premier Pain Centers clinicians and other specialists
          work together to manage your medication.
        </p>
        <h3>Easy Medication Management</h3>
        <p>
          Taking the right prescription on time and regularly is crucial.
          Medical management services are convenient and help:
        </p>
        <ul>
          <li>Patients taking medicine regularly improved.</li>{" "}
          <li>All drugs are administered consistently and accurately.</li>
          <li>
            Medication management provides these instructions in one spot. You
            won't have to worry about getting different instructions from
            different practices.
          </li>
        </ul>
        <h3>Medication Management Enhances Therapy</h3>
        <p>
          Our team continuously evaluates your drug regimen to ensure it's
          appropriate for your medication circumstances and goals. Taking all
          drugs on schedule and as advised can help control a chronic illness or
          recover from a short-term illness.
        </p>
      </div>
      <HowDoesWork />
      <WhyChoose />
      <div className="container">
        <div className="section-title">
          <h2>Book an Appointment With Us</h2>
        </div>
        <p>
          Premier Pain Centers offers comprehensive, safe, and expert pain
          relief through safe medication management in psychiatry. Our
          professional physicians, patient-specific care plans, vigilant
          monitoring, and integrative treatments create a supportive atmosphere
          for pain management without medication hazards. Premier Pain Centers
          help you reclaim control of your life by providing structure and
          expertise for chronic pain or opioid withdrawal. Our goals are to
          optimize your treatment success, eliminate medicines interaction
          risks, reconcile medicines, and ensure you only receive necessary
          prescriptions.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Index;
