import React from "react";
import Link from "next/link";
const outServices = [
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453716/tms-therapy/jeda0v4kvy3r7vdvccja.jpg",
    name: "Depression",
    href: "/depression-treatment-in-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453797/tms-therapy/fkioqdywaqhxyyueuzgf.jpg",
    name: "OCD Treatment",
    href: "/ocd-treatment-in-dallas-tx",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453849/tms-therapy/fiygxy2m5ngc0k9s0e2h.jpg",
    name: "PTSD Treatment",
    href: "/ptsd-treatment-in-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453895/tms-therapy/elfruwdbpps3myjyry4n.jpg",
    name: "Anxiety",
    href: "/anxiety-treatment-in-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454384/tms-therapy/mjxwt37z6ebvoksefe6x.jpg",
    name: "Medication Management",
    href: "/medication-management-in-dallas/",
  },

  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453981/tms-therapy/mrl1jtej0jodcx1kvok6.jpg",
  //   name: "Autism",
  //   href: "/autism-treatment-in-dallas-fort-worth/",
  // },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454188/tms-therapy/bjvjjztlb1dbtiivlo4l.jpg",
    name: "Migraines",
    href: "/migraines-treatment-in-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454263/tms-therapy/c4bp5keqvah1hbwrb6v7.jpg",
    name: "Bipolar Disorder",
    href: "/bipolar-disorder-treatment-in-richardson/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454331/tms-therapy/ykexm82ub6qyoiilnmmf.jpg",
    name: "Counseling",
    href: "/dallas-counseling-services/",
  },
  {
    imgSrc: "/images/schizophrenia.png",
    name: "Schizophrenia",
    href: "/schizophrenia-treatment-center-dallas/",
  },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454086/tms-therapy/ksv3yav3ikpugqxdnpff.jpg",
  //   name: "Tinnitus",
  //   href: "/tinnitus-treatment-in-dallas-fort-worth/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454438/tms-therapy/ezmhyfdvicfsahqtvekf.jpg",
  //   name: "Panic Disorder",
  //   href: "/panic-disorder-dallas-tx/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454517/tms-therapy/sceiuyb7g5yejullepav.jpg",
  //   name: "Trauma",
  //   href: "/trauma-treatment-in-dallas-fort-worth/",
  // },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area pt-3">
        <div className="container">
          <div className="section-title">
            <h2>Range of Mental Health Treatments We Provide</h2>
          </div>

          <div className="row justify-content-center">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4" key={i}>
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
