import React from "react";
import Image from "next/image";
import data from "../../../utils/cocktail.json";
const OurServices = () => {
	return (
		<>
			<div className="blog-area pt-4">
				<div className="container">
					<div className="row justify-content-center">
						{data.map((item, i) => {
							return (
								<div className="col-md-6 col-lg-3" key={i}>
									<div className="blog-item">
										<div className="blog-top">
											<Image
												src={item.imgSrc}
												alt={item.name}
												width={306}
												height={232}
												loading="lazy"
											/>
										</div>
										<div className="blog-bottom d-flex justify-content-center">
											<h3>{item.name}</h3>
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

export default OurServices;
