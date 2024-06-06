import React from "react";
import Link from "next/link";

const data = [
  {
    imgSrc: "/images/iv-bars/section-1.jpg",
    heading: "  iV Hydration Therapies & Infusions",
    p: "Replenish, rejuvenate and restore your body’s essential nutrients. We have developed & served hundreds of thousands of iVs packed with vitamins, minerals and more.",
    btnText: "Discover",
    url: "/",
  },
  {
    imgSrc: "/images/iv-bars/section-2.jpg",
    heading: "  iV Hydration Therapies & Infusions",
    p: "Replenish, rejuvenate and restore your body’s essential nutrients. We have developed & served hundreds of thousands of iVs packed with vitamins, minerals and more.",
    btnText: "Explore",
    url: "/",
  },
  {
    imgSrc: "/images/iv-bars/section-3.jpg",
    heading: "  iV Hydration Therapies & Infusions",
    p: "Replenish, rejuvenate and restore your body’s essential nutrients. We have developed & served hundreds of thousands of iVs packed with vitamins, minerals and more.",
    btnText: "Experience",
    url: "/",
  },
];
const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area ptb-100">
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
                      <h4 style={{ color: "rgb(0, 70, 192)" }}>
                        {item.heading}
                      </h4>
                      <span className="px-5">{item.p}</span>
                      {/* <div className="about-item pt-4">
                        <Link href={item.url}>{item.btnText}</Link>
                      </div> */}
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
