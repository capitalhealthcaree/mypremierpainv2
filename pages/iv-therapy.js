import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar.js"));

const NavbarAppointment = dynamic(() =>
	import("../components/_App/NavbarAppointment.js")
);

const MainBanner = dynamic(() => import("../components/IvBars/MainBanner.js"));

const ThreeSections = dynamic(() =>
	import("../components/IvBars/ThreeSections.js")
);

const Cocktails = dynamic(() => import("../components/IvBars/cocktails.js"));

const WhyUs = dynamic(() => import("../components/IvBars/WhyUs.js"));

const About = dynamic(() => import("../components/IvBars/about.js"));

const Steps = dynamic(() => import("../components/IvBars/Steps.js"));

const AppointmentForm = dynamic(() =>
	import("../components/IvBars/Appointment.js")
);

const FeedbackSlider = dynamic(() =>
	import("../components/Home/FeedbackSlider.js")
);

const Footer = dynamic(() => import("../components/_App/Footer.js"));

const Index = () => {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex" />
				<title>IV Therapy & Medical Services in Dallas, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/tms-therapy/`}
				/>
				<meta
					name="description"
					content="TMS affects brain activity with a magnetic field. It treats depression, OCD, and other brain disorders. call us 469-562-4188 or email admin@mypremierpain.com."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />
			<NavbarAppointment />
			<MainBanner />
			<About />
			<Steps />
			<Cocktails />
			<WhyUs />
			{/* <AppointmentForm /> */}
			{/* <FeedbackSlider /> */}
			<ThreeSections />
			<Footer />
		</>
	);
};

export default Index;
