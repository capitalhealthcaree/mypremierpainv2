import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar.js"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const Facials = dynamic(() => import("../components/IvBars/Beauty/Facials.js"));

const HydraFacials = dynamic(() =>
	import("../components/IvBars/Beauty/HydraFacials.js")
);

const Microdermabrasion = dynamic(() =>
	import("../components/IvBars/Beauty/Microdermabrasion.js")
);

const Dermaplane = dynamic(() =>
	import("../components/IvBars/Beauty/Dermaplane.js")
);

const Footer = dynamic(() => import("../components/_App/Footer.js"));

const Index = () => {
	return (
		<>
			<Head>
				<title>Beauty IV Therapy Treatment in Dallas, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/beauty/`}
				/>
				<meta
					name="description"
					content="Enhance your beauty with our IV therapy services designed to rejuvenate and revitalize. Visit us to experience the transformative effects firsthand."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="Enhance Your Beauty With Our IV Therapy"
				homePageUrl="/"
				homePageText="Home"
				activePageText="conditions-we-treat"
				bgImage="/images/iv-bars/beauty/banner.png"
			/>
			<Facials />
			<HydraFacials />
			<Microdermabrasion />
			<Dermaplane />
			<Footer />
		</>
	);
};

export default Index;
