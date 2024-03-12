import React from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
	import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const conditionsWeTreat = {
	heaging: "Conditions We Treat",
	treatment: [
		{
			url: "/conditions-we-treat/car-accident-injury",
			name: "Car Accident Injury",
		},
		{ url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
		{ url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
		{ url: "/conditions-we-treat/headaches", name: "Headaches" },
		{ url: "/conditions-we-treat/back-pain", name: "Back Pain" },
		{ url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
		{ url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
		// { url: "/conditions-we-treat/wrist-pain", name: "Wrist Pain" },
		{ url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
		// { url: "/conditions-we-treat/foot-pain", name: "Foot Pain" },
		{ url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
		{ url: "/conditions-we-treat/hip-pain", name: "Hip Pain" },
	],
};
const locations = {
	heaging: "Locations",
	location: [
		{
			href: "/contact-locations/richardson",
			name: " Richardson",
		},
		{
			href: "/contact-locations/north-richland-hills",
			name: " North Richland Hills",
		},
		{
			href: "/contact-locations/waxahachie",
			name: " Waxahachie",
		},
		{
			href: "/contact-locations/fort-worth",
			name: " Fort Worth",
		},
		{
			href: "/contact-locations/hillsboro",
			name: " Hillsboro",
		},
		{
			href: "/contact-locations/lancaster",
			name: " Lancaster",
		},
		{
			href: "/contact-locations/farmers-branch",
			name: " Farmers Branch",
		},
		{
			href: "/contact-locations/corsicana",
			name: " Corsicana",
		},
		{
			href: "/contact-locations/decatur",
			name: " Decatur",
		},
		{
			href: "/contact-locations/cleburne",
			name: " Cleburne",
		},
		{
			href: "/contact-locations/plano",
			name: "Plano",
		},
	],
};
const DoctorDetails = () => {
	return (
		<>
			<Head>
				<title>
					Dr. Odai Abdalla: Interventional Pain Management Physician
				</title>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/odai-abdalla-md/`}
				/>
				<meta
					name="description"
					content="Book your appointment today with Dr. Odai Abdalla, a highly qualified physiatrist and interventional pain management specialist who holds dual fellowships and is board-certified in both areas. Don't wait, schedule your appointment now."
				/>
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content="initial-scale=1" name="viewport" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			</Head>
			<Navbar />

			<PageBanner
				pageTitle="Dr. Odai Abdalla"
				homePageUrl="/"
				homePageText="Home"
				activePageText="dr-Odai-abdalla"
				bgImage="/images/doctor.webp"
			/>
			<div className="doctor-details-area pt-5 pb-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="doctor-details-item doctor-details-left">
								<img src="/images/doctors/doctor4.webp" alt="Doctor" />
								<div className="blog-details-item">
									<div className="blog-details-category ps-5">
										<h3>{conditionsWeTreat.heaging}</h3>
										<ul>
											{conditionsWeTreat.treatment.map((item, i) => {
												return (
													<li key={i}>
														<Link href={item.url} rel="preload">
															{item.name}
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="doctor-details-item">
								<div className="doctor-details-right">
									<div className="doctor-details-biography">
										<h3>
											<b>Dr. Odai Abdalla</b>
										</h3>
										<h4>(Interventional Pain Management Physician)</h4>
									</div>
									<div className="doctor-details-biography">
										<h3>Biography</h3>

										<p>
											Dr. Odai Abdalla is an Interventional Pain Management
											Physician serving in Dallas, Waxahachie, Ennis and
											Corsicana.
										</p>

										<p>
											Dr. Abdalla completed an internship training in internal
											medicine at Lincoln Medical and Mental Health Center in
											Bronx, New York. Then he trained in Neurology (residency
											training) at the State University of New York in Syracuse,
											New York. Also, he trained in Interventional Pain
											Management (ACGME accredited fellowship) at the University
											of Mississippi Medical Center in Jackson, Mississippi.
										</p>

										<p>
											Dr. Abdalla is an expert in a variety of an interventional
											pain procedures including Epidural Injections, Peripheral
											Nerve Blocks, Radio-frequency Ablation,{" "}
											<Link href="/treatments/joint-injections/" rel="preload">
												Joint Injections,{" "}
											</Link>{" "}
											Botox injections,{" "}
											<Link
												href="/treatments/trigger-point-injections/"
												rel="preload"
											>
												Trigger Points Injections{" "}
											</Link>{" "}
											, Kyphoplasty, Spinal Augmentation Procedures, Sympathetic
											Ganglion Blocks, Peripheral Nerves Stimulation, and{" "}
											<Link
												href="/treatments/spinal-cord-stimulation/"
												rel="preload"
											>
												Spinal Cord Stimulator{" "}
											</Link>{" "}
											Implantation.
										</p>
										<p>
											In his free time, he enjoys the time with his family,
											playing and watching soccer, and running in the trial!
										</p>
									</div>
									<div className="doctor-details-contact">
										<h3>Contact info</h3>
										<ul>
											<li style={{ marginLeft: "-5px" }}>
												<i
													className="icofont-ui-call"
													style={{ fontSize: "30px" }}
												></i>

												<a href="tel:+14695624188">469-562-4188</a>
											</li>
											<li>
												<i
													className="icofont-ui-message"
													style={{ fontSize: "25px" }}
												></i>
												<a href="mailto:admin@mypremierpain.com">
													admin@mypremierpain.com
												</a>
											</li>
										</ul>
									</div>
									<div className="doctor-details-biography"></div>
									<div className="doctor-details-work">
										<h3>Working hours</h3>
										<div className="appointment-item-two-right">
											<div className="appointment-item-content">
												<ul>
													<li>
														Monday <span>9:00 AM - 5:00 PM</span>
													</li>
													<li>
														Tuesday <span>9:00 AM - 5:00 PM</span>
													</li>
													<li>
														Wednesday <span>9:00 AM - 5:00 PM</span>
													</li>
													<li>
														Thursday <span>9:00 AM - 5:00 PM</span>
													</li>
													<li>
														Friday <span>9:00 AM - 5:00 PM</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="blog-details-item">
									<div className="blog-details-tags">
										<h3>{locations.heaging}</h3>
										<ul>
											{locations.location.map((item, i) => {
												return (
													<li key={i}>
														<Link href={item.href} rel="preload">
															{item.name}
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pb-5">
				<AppointmentForm />
			</div>

			<Footer />
		</>
	);
};

export default DoctorDetails;
