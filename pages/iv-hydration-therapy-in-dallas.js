import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar.js"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner.js"));

const HydrationTherapies = dynamic(() =>
	import("../components/IvBars/HydrationTherapies/index.js")
);

const Footer = dynamic(() => import("../components/_App/Footer.js"));

const Index = () => {
	return (
		<>
			<Head>
				<title>IV Hydration Therapy & Injections in Dallas, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/beauty/`}
				/>
				<meta
					name="description"
					content="At our clinic, we offer medically suggested iv hydration therapy for individuals with chronic ailments in a friendly and welcoming environment."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="IV Hydration Therapy in Dallas"
				homePageUrl="/"
				homePageText="Home"
				activePageText="conditions-we-treat"
				bgImage="/images/iv-bars/hydration-therapies/banner.png"
			/>
			<HydrationTherapies />
			<Footer />
		</>
	);
};

export default Index;
