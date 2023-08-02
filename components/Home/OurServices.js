import React from "react";
import Link from "next/link";
const outServices = [
  {
    imgSrc: "/images/our-services/back-pain.jpg",
    name: "Back Pain",
    href: "/conditions-we-treat/back-pain",
  },
  {
    imgSrc: "/images/our-services/joint-pain.jpg",
    name: "Joint Pain",
    href: "/conditions-we-treat/joint-pain",
  },
  {
    imgSrc: "/images/our-services/headaches.jpg",
    name: "Headaches",
    href: "/conditions-we-treat/headaches",
  },
  {
    imgSrc: "/images/our-services/hip-pain.jpg",
    name: "Hip Pain",
    href: "/conditions-we-treat/hip-pain",
  },
  {
    imgSrc: "/images/our-services/leg-pain.jpg",
    name: "Leg Pain",
    href: "/conditions-we-treat/leg-pain",
  },
  {
    imgSrc: "/images/our-services/shoulder-pain.jpg",
    name: "Shoulder Pain",
    href: "/conditions-we-treat/shoulder-pain",
  },
  {
    imgSrc: "/images/our-services/sports-injury.jpg",
    name: "Sports Injury",
    href: "/conditions-we-treat/sports-injury",
  },
  {
    imgSrc: "/images/our-services/neck-pain.jpg",
    name: "Neck Pain",
    href: "/conditions-we-treat/neck-pain",
  },
  {
    imgSrc: "/images/our-services/knee-pain.webp",
    name: "Knee Pain",
    href: "/conditions-we-treat/knee-pain",
  },
  {
    imgSrc: "/images/our-services/coccydynia.png",
    name: "Coccydynia",
    href: "/conditions-we-treat/coccydynia",
  },
  {
    imgSrc: "/images/our-services/car-accident-injury.webp",
    name: "Car Accident Injury",
    href: "/conditions-we-treat/car-accident-injury",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area pt-5">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={item.href}>
                        <img src={item.imgSrc} alt={item.name} />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link
                          href={item.href}
                          className="d-flex justify-content-center"
                        >
                          {item.name}
                        </Link>
                      </h3>
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
