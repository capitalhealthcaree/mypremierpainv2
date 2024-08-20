import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

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
				<title>Pain Management Clinic Near Me in Hillsboro, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}${router.asPath}`}
				/>
				<meta
					name="description"
					content="Get relief from pain in Hillsboro. Explore our expert pain management services for a better life. Visit us Premier Pain Centers for schedule an appointment."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="Pain Management Services in Hillsboro"
				homePageUrl="/"
				homePageText="Home"
				activePageText="hillsboro"
				bgImage="/images/location.webp"
			/>

			<ContactInfo loc1={"1311 E. Franklin St,"} loc2={"Hillsboro, TX 76645"} />

			<div className="pt-2 pb-5">
				<AppointmentForm />
			</div>

			<div className="map-area">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.1191569521725!2d-97.10310432501379!3d32.01188582269517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864fa82f0c0e2a95%3A0x4f0fb87565f70631!2s1311%20E%20Franklin%20St%2C%20Hillsboro%2C%20TX%2076645%2C%20USA!5e0!3m2!1sen!2s!4v1724189738721!5m2!1sen!2s"
					height="550"
					loading="lazy"
				></iframe>
			</div>

			<Footer />
		</>
	);
};

export default Contact;
