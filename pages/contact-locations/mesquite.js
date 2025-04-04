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
        <title>Best Pain Management Clinic in Mesquite, TX</title>
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
        pageTitle="Pain Management in Mesquite: Get Lasting Relief"
        homePageUrl="/"
        homePageText="Home"
        activePageText="mesquite"
        bgImage="http://res.cloudinary.com/dngmflrpx/image/upload/v1734990377/mzwabfkruapqgueyqayv.webp"
      />
      <MesquiteContent />
      <ContactInfo loc1={"200 W Kearney St,"} loc2={"Mesquite, TX 75149"} />

      <div className="pt-2 pb-5">
        <AppointmentForm />
      </div>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8226499232774!2d-96.60273012379426!3d32.77044008432108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea5a00688b3f7%3A0x2f49e7246a9da94a!2s200%20W%20Kearney%20St%2C%20Mesquite%2C%20TX%2075149%2C%20USA!5e0!3m2!1sen!2s!4v1698872976439!5m2!1sen!2s"
          height="550"
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
