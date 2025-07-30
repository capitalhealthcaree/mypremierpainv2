import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const PlanoContent = dynamic(() =>
  import("../../components/ContactLocationsContent/PlanoContent")
);

const ContactInfo = dynamic(() =>
  import("../../components/Contact/ContactInfo")
);

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Center for Spine and Pain Management in Plano, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Find expert pain management in Plano for lasting relief. Our compassionate team offers personalized care to help you regain control of your life."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Innovative Pain Management In Plano: Expert Care For Lasting Relief"
        homePageUrl="/"
        homePageText="Home"
        activePageText="plano"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <PlanoContent />
      <ContactInfo
        loc1={"7712 San Jacinto Place Suite 300"}
        loc2={"Plano, TX 75024"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d106977.39257354253!2d-96.7968275!3d33.0816397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c231955853bc3%3A0xd78e97e82e2d2681!2sPremier%20Pain%20Centers%20%3A%20Plano!5e0!3m2!1sen!2s!4v1753899347396!5m2!1sen!2s"
          width="600"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
