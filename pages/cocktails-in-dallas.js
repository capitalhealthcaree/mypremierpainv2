import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const OurServices = dynamic(() =>
	import("../components/IvBars/Cocktails/index.js")
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const Contact = () => {
	return (
		<>
			<Head>
				<title>IV Vitamin Cocktails Services in Dallas, TX</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/cocktails-in-dallas/`}
				/>
				<meta
					name="description"
					content="Discover the rejuvenating benefits of IV Vitamin Cocktails at Premier Pain Centers in Dallas. Our IV Therapy in Dallas offers personalized infusions to revitalize your body and mind."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="format-detection" content="telephone=no" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="IV Vitamin Cocktails in Dallas"
				homePageUrl="/"
				homePageText="Home"
				activePageText="conditions-we-treat"
				bgImage="/images/iv-bars/cocktail/banner.png"
			/>
			<OurServices />
			<Footer />
		</>
	);
};

export default Contact;
