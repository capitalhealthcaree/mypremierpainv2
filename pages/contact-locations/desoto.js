import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const LancasterContent = dynamic(() =>
  import("../../components/ContactLocationsContent/LancasterContent")
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
        <title>Spine and Pain Management Physicians in Desoto</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Experience premier pain management services in Desoto. Call 469-562-4188 or email admin@mypremierpain.com for compassionate care and relief."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Overcome Pain with Our Expert Care: Pain Management in Desoto"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Desoto"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      {/* <LancasterContent /> */}
      <ContactInfo
        loc1={"281 N Interstate 35 E Rd,"}
        loc2={"DeSoto, TX 75115"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.498127614714!2d-96.8232151!3d32.59290610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e946e3709be43%3A0xe7f5f537959113e7!2s281%20N%20Interstate%2035%20E%20Rd%2C%20DeSoto%2C%20TX%2075115%2C%20USA!5e0!3m2!1sen!2s!4v1746224196164!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
