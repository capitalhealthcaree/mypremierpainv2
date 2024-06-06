import React from "react";
import Link from "next/link";
const outServices = [
  {
    imgSrc: "/images/tms-home/condition-we-treat-depression.jpg",
    name: "Depression",
    href: "/depression-treatment-in-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/ocd-treatments.jpg",
    name: "OCD Treatment",
    href: "/ocd-treatment-in-dallas-tx",
  },
  {
    imgSrc: "/images/tms-home/condition-we-treat-ptsd.jpg",
    name: "PTSD Treatment",
    href: "/ptsd-treatment-in-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/condition-we-treat-anxiety.jpg",
    name: "Anxiety",
    href: "/anxiety-treatment-in-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/condition-we-treat-autism.jpg",
    name: "Autism",
    href: "/autism-treatment-in-dallas-fort-worth/",
  },
  {
    imgSrc: "/images/tms-home/tinnitus.jpg",
    name: "Tinnitus",
    href: "/tinnitus-treatment-in-dallas-fort-worth/",
  },
  {
    imgSrc: "/images/tms-home/migraines.jpg",
    name: "Migraines",
    href: "/migraines-treatment-in-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/bipolar-disorder-treatment.jpg",
    name: "Bipolar Disorder",
    href: "/bipolar-disorder-treatment-in-richardson/",
  },
  {
    imgSrc: "/images/tms-home/cognitive-behavioral-therapy.jpg",
    name: "Cognitive Therapy",
    href: "/cognitive-behavioral-therapy-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/medication-management.jpg",
    name: "Medication Management",
    href: "/medication-management-in-dallas/",
  },
  {
    imgSrc: "/images/tms-home/panic-disorder.jpg",
    name: "Panic Disorder",
    href: "/panic-disorder-dallas-tx/",
  },
  {
    imgSrc: "/images/tms-home/trauma.jpg",
    name: "Trauma",
    href: "/trauma-treatment-in-dallas-fort-worth/",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Conditions We Treat</h2>
          </div>

          <div className="row justify-content-center">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <Link href={item.href} rel="preload">
                        <img src={item.imgSrc} alt={item.name} />
                      </Link>
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <Link
                          href={item.href}
                          className="d-flex justify-content-center"
                          rel="preload"
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
