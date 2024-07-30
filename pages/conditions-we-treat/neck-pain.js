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

const NeckPainDetails = dynamic(() =>
	import("../../components/ConditionsWeTreat/NeckPainDetails")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const DoctorDetails = () => {
	return (
		<>
			<Head>
				<title>Best Chronic Neck Pain Doctors in Dallas, TX </title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/conditions-we-treat/neck-pain/`}
				/>
				<meta
					name="description"
					content="Relieves neck pain with our chiropractor for neck pain and neck pain specialists in Dallas. Book an appointment today for expert care and effective treatment."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			</Head>
			<Navbar />
			<PageBanner
				pageTitle="Neck Pain Treatments"
				homePageUrl="/"
				homePageText="Home"
				activePageText="neck-pain"
				bgImage="/images/conditions-we-treat/neck-pain/neck.jpg"
			/>

			<div className="doctor-details-area pt-4 pb-50">
				<div className="container-fluid p-lg-5">
					<div className="row">
						<div className="col-lg-4">
							<AppointmentFormSideBar />
							<ConditionsWeTreatLeftSide />
						</div>

						<div className="col-lg-8">
							<NeckPainDetails />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default DoctorDetails;
