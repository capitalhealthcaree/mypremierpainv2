import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar.js"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const NADIVTherapy = dynamic(() =>
	import("../components/IvBars/HydrationTherapies/NADIVTherapy.js")
);

const Footer = dynamic(() => import("../components/_App/Footer.js"));

const Index = () => {
	return (
		<>
			<Head>
				<title>NAD IV Therapy Centers Near Me in Dallas, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/nad-iv-therapy-in-dallas/`}
				/>
				<meta
					name="description"
					content="Are you looking for the best NAD IV therapy near you? Premier Pain Centers has the best service  to deliver NAD IV therapy."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="NAD IV Therapy in Dallas, TX"
				homePageUrl="/"
				homePageText="Home"
				activePageText="conditions-we-treat"
				bgImage="/images/iv-bars/hydration-therapies/NAD-IV-Therapy-Banner.png"
			/>
			<NADIVTherapy />
			<Footer />
		</>
	);
};

export default Index;
