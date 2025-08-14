import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const MesquiteContent = dynamic(() =>
  import("../../components/ContactLocationsContent/MesquiteContent")
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
        <title>Best Pain Management Clinic in Kaufman, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
        />
        <meta
          name="description"
          content="Premier Pain Centers offers comprehensive pain management care. Our state-of-the-art clinics provides what you need to live pain free!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management in Kaufman: Get Lasting Relief"
        homePageUrl="/"
        homePageText="Home"
        activePageText="mesquite"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      {/* <MesquiteContent /> */}
      <ContactInfo
        loc1={"874 Ed Hall Dr., Suite 110,"}
        loc2={"Kaufman, TX 75142"}
      />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.5276969062215!2d-96.32104822372703!3d32.592117793411255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864949a170f97b03%3A0xeb2e71925a646f78!2sPremier%20Pain%20Centers%20%3A%20Kaufman!5e0!3m2!1sen!2sus!4v1755202273712!5m2!1sen!2sus"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
