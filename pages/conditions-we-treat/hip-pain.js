import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
	import("../../components/Appointment/AppointmentFormSideBar")
);

const ConditionsWeTreatLeftSide = dynamic(() =>
	import("../../components/Common/ConditionsWeTreatLeftSide")
);

const HipPainDetails = dynamic(() =>
	import("../../components/ConditionsWeTreat/HipPainDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
	return (
		<>
			<Head>
				<title>
					Hip Pain Specialist in Dallas | Pain Physicians in Plano, TX
				</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/hip-pain/`}
				/>
				<meta
					name="description"
					content="Hip Pain Specialist in Dallas - Premier Pain Centers. Expert pain physicians in Plano, TX. Schedule an appointment for effective hip pain relief."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			</Head>
			<Navbar />
			<PageBanner
				pageTitle="Hip Pain Treatments"
				homePageUrl="/"
				homePageText="Home"
				activePageText="hip-pain"
				bgImage="/images/conditions-we-treat/sports-injury/sports-injury-treatment-dallas.jpg"
			/>

			<div className="doctor-details-area pt-4 pb-70">
				<div className="container-fluid p-lg-5">
					<div className="row">
						<div className="col-lg-4">
							<AppointmentFormSideBar />
							<ConditionsWeTreatLeftSide />
						</div>

						<div className="col-lg-8">
							<HipPainDetails />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default DoctorDetails;
