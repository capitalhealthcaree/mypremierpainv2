import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar.js"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const VitaminInjections = dynamic(() =>
	import("../components/IvBars/HydrationTherapies/VitaminInjections.js")
);

const Footer = dynamic(() => import("../components/_App/Footer.js"));

const Index = () => {
	return (
		<>
			<Head>
				<title> IV Therapy and Vitamin Injections in Dallas, TX </title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/vitamin-injections-in-dallas/`}
				/>
				<meta
					name="description"
					content=" Vitamin injections are becoming more popular among those who want a fast and effective way to acquire their vitamins. Book an appointment today!"
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="Vitamin Injections in Dallas, TX"
				homePageUrl="/"
				homePageText="Home"
				activePageText="conditions-we-treat"
				bgImage="/images/iv-bars/hydration-therapies/vitamin-injection-banner.png"
			/>
			<VitaminInjections />
			<Footer />
		</>
	);
};

export default Index;
