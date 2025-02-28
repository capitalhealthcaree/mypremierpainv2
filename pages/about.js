import React from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const AppointmentForm = dynamic(() =>
  import("../components/Home/AppointmentForm")
);

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const OurDoctors = dynamic(() => import("../components/Common/OurDoctors"));

const LatestBlogPost = dynamic(() =>
  import("../components/Common/LatestBlogPost")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Premier Pain Centers</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/about/`}
        />
        <meta
          name="description"
          content="At Premier Pain Centers, we offer top quality pain management using some of the least invasive, most effective pain procedures possible."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />
      {/*  */}
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="about"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990262/ohwiyyqlry8hulxms1la.webp"
      />

      <div className="about-area pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="about-item about-right">
                <h4>Our Mission</h4>
                <p>
                  Our mission is to provide patients suffering from chronic pain
                  with compassionate, evidence-based, minimally invasive pain
                  care in order to improve their quality of life.
                </p>
                <h4>Our Vision</h4>
                <p>
                  Our vision is to become a comprehensive, “one-stop” care
                  center for our pain patients. Our fellowship trained and
                  Double Board-Certified physicians have vast experience in
                  managing complex pain conditions. We can provide a second
                  opinion for management of your chronic pain, and to possibly
                  avoid unnecessary surgery. We also provide long-term opioid
                  management for patients, with the goal to reduce the risk of
                  dependency. With our onsite state-of-the-art procedure suite,
                  we can provide relief without the trouble of you traveling to
                  a surgery center or a hospital.
                </p>
                <h3>
                  <Link
                    href="https://res.cloudinary.com/dngmflrpx/image/upload/Rao-Ali-AR-1_woturr.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here For List of Insurances We Accept
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurDoctors />
      <AppointmentForm />
      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default About;
