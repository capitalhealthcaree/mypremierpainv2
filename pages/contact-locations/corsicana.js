import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const CorsicanaContent = dynamic(() =>
  import("../../components/ContactLocationsContent/CorsicanaContent")
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
        <title>Pain Management Physician Near Me in Corsicana, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Discover expert Pain Management Services in Corsicana. Our compassionate team is dedicated to providing effective relief. Schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Corsicana"
        homePageUrl="/"
        homePageText="Home"
        activePageText="corsicana"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <CorsicanaContent />
      <ContactInfo loc1={"3108 E. State HWY 22"} loc2={"Corsicana, TX 75102"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3380.4124262170244!2d-96.5010879!3d32.0851374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f2f10acc4135f%3A0xd5918c4fe03a9cfa!2sPremier%20Pain%20Centers%20%3A%20Corsicana!5e0!3m2!1sen!2s!4v1753898096250!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
