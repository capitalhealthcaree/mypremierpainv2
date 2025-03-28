import React from "react";
const outServices = [
  {
    imgSrc: "/images/medication-management.jpg",
    name: "Medication Management",
    des: "Receive expert guidance in managing medications for depression, anxiety, and other mental health concerns, ensuring optimal outcomes.",
    href: "",
  },
  {
    imgSrc: "/images/talk-therapy.png",
    name: "Talk Therapy",
    des: "Experience personalized therapy sessions designed to provide emotional support, foster growth, and empower you to overcome challenges.",
    href: "",
  },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453849/tms-therapy/fiygxy2m5ngc0k9s0e2h.jpg",
  //   name: "PTSD Treatment",
  //   href: "/ptsd-treatment-in-dallas-tx/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453895/tms-therapy/elfruwdbpps3myjyry4n.jpg",
  //   name: "Anxiety",
  //   href: "/anxiety-treatment-in-dallas-tx/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453981/tms-therapy/mrl1jtej0jodcx1kvok6.jpg",
  //   name: "Autism",
  //   href: "/autism-treatment-in-dallas-fort-worth/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454086/tms-therapy/ksv3yav3ikpugqxdnpff.jpg",
  //   name: "Tinnitus",
  //   href: "/tinnitus-treatment-in-dallas-fort-worth/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454188/tms-therapy/bjvjjztlb1dbtiivlo4l.jpg",
  //   name: "Migraines",
  //   href: "/migraines-treatment-in-dallas-tx/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454263/tms-therapy/c4bp5keqvah1hbwrb6v7.jpg",
  //   name: "Bipolar Disorder",
  //   href: "/bipolar-disorder-treatment-in-richardson/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454331/tms-therapy/ykexm82ub6qyoiilnmmf.jpg",
  //   name: "Cognitive Therapy",
  //   href: "/cognitive-behavioral-therapy-dallas-tx/",
  // },
  // {
  //   imgSrc:
  //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454384/tms-therapy/mjxwt37z6ebvoksefe6x.jpg",
  //   name: "Medication Management",
  //   href: "/medication-management-in-dallas/",
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
      <div className="blog-area my-5">
        <div className="container">
          <div className="section-title">
            <h2>Psychiatric Services in Dallas</h2>
            <p className="mt-3">
              We offer an extensive range of psychiatric services to ensure
              comprehensive care for every individual. Our mental health
              approach integrates mind and body care, effectively addressing
              mental health conditions. Whether you’re managing depression,
              anxiety, or other challenges, we are here to guide you on your
              journey to healing.
            </p>
          </div>

          <div className="row justify-content-center ">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-6" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      {/* <Link href={item.href} rel="preload"> */}
                      <img src={item.imgSrc} alt={item.name} />
                      {/* </Link> */}
                    </div>
                    <div className="blog-bottom">
                      <h3>
                        <a
                          className="d-flex justify-content-center"
                          rel="preload"
                        >
                          {item.name}
                        </a>
                      </h3>
                      <p className="text-center">{item.des}</p>
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
