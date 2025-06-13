import React from "react";
import Link from "next/link";

const data = [
	{
		imgSrc: "/images/iv-bars/section-1.jpg",
		heading: "iV Hydration Therapies & Infusions",
		p: "Revive and replenish your body's vital nutrients with our extensive experience in crafting and administering IVs infused with a variety of vitamins, minerals, and other essential elements.",
		btnText: "Discover",
		url: "/iv-hydration-therapy-in-dallas/",
	},
	{
		imgSrc: "/images/iv-bars/section-2.jpg",
		heading: "Wellness Injections & Vitamin Boosters",
		p: "Our wellness injections beautifully complement a healthy lifestyle, enhancing IV treatments or serving as refreshing standalone pick-me-ups for everyone.",
		btnText: "Explore",
		url: "/cocktails-in-dallas/",
	},
	{
		imgSrc: "/images/iv-bars/section-3.jpg",
		heading: "Regenerative Therapy & Medical Aesthetics",
		p: "Explore our diverse range of specialty services tailored to address your specific needs, including Cryotherapy, Infrared Saunas, Dermal Fillers, PRP, PDO Threads, and beyond.",
		btnText: "Experience",
		url: "/beauty/",
	},
];
const OurDoctors = () => {
	return (
		<>
			<div className="doctors-area">
				<div className="container-fluid">
					<div className="row justify-content-center">
						{data.map((item, i) => {
							return (
								<div className="col-sm-6 col-lg-4">
									<div className="doctor-item">
										<div className="doctor-top">
											<img src={item.imgSrc} alt="Doctor" />
										</div>
										<div className="doctor-bottom">
											<h5 style={{ color: "rgb(0, 70, 192)" }}>
												{item.heading}
											</h5>
											<span className="px-5">{item.p}</span>
											<div className="about-item pt-4">
												<Link href={item.url}>{item.btnText}</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurDoctors;
