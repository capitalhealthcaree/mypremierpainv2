const data = [
	{
		name: "  Age spots",
	},
	{
		name: "  Blackheads",
	},
	{
		name: "  Enlarged pores",
	},
	{
		name: " Fine lines",
	},
	{
		name: " Minor scars (acne)",
	},
	{
		name: "  Discolored",
	},
	{
		name: " Uneven skin",
	},
	{
		name: "  Stretch marks",
	},
	{
		name: "  Solar damage",
	},
];

const Microdermabrasion = () => {
	return (
		<>
			<div className="symptoms-area pb-5">
				<div className="container">
					<div className="section-title">
						<h2>Microdermabrasion </h2>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="symptoms-img">
								<img
									src="/images/iv-bars/beauty/microdermabrasion.png"
									alt="About"
								/>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="symptoms-content">
								<p>
									The less-invasive <b> microdermabrasion</b> technique renews
									skin tone and texture. Sun-damaged, wrinkled, acne-prone, and
									other skin types can benefit from it. A special tool with a
									rough surface is used in the process to remove the thick top
									layer of skin and make it look younger. In another different
									type , tiny bits of aluminum oxide or sodium bicarbonate are
									sprayed on with suction to get the same result as the rough
									surface. Read on for procedure details.
									<p>
										The top layer of skin is removed. This can make your skin
										smoother and younger-looking. It can hide these skin
										conditions:
									</p>
								</p>
								<ul>
									{data.map((item, i) => {
										return (
											<li key={i}>
												<span>
													<i className="icofont-caret-right"></i>
													{item.name}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
					<h3>Refresh Your Skin with Mur microdermabrasion Facial</h3>
					<p>
						Premier Pain Centers offers excellent skin care treatments to make
						you look and feel great. Searching for a{" "}
						<b>microdermabrasion near me</b>? We are here to assist you with all
						of your skincare requirements. Our procedure begins with a complete
						package:
					</p>
					<ul>
						<li>Consultation</li>
						<li>Cleansing</li>
						<li>Exfoliation</li>
						<li>Hydration</li>
					</ul>
					<p>
						You can leave immediately after surgery. Your skin may feel red,
						puffy, or irritated for 24 hours. Our{" "}
						<b>microdermabrasion facial</b> rejuvenates skin without surgery.
						Most undergo one to four treatments per month to see improvements.
						Monthly treatments after that can sustain benefits.
					</p>
					<h3>Make an Appointment Today!</h3>
					<p>
						Ready for the flawless skin you've always wanted? Book a
						<b>microdermabrasion facial near you</b> today for top-quality
						skincare in your area. Get in touch, or book online. Allow Premier
						Pain Centers to assist you in presenting your most attractive self!
					</p>
				</div>
			</div>
		</>
	);
};

export default Microdermabrasion;
