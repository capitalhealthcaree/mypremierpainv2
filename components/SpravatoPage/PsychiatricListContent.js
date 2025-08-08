import React from "react";
const ourServices = [
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
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736453981/tms-therapy/mrl1jtej0jodcx1kvok6.jpg",
    name: "Autism",
    href: "/autism-treatment-in-dallas-fort-worth/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454086/tms-therapy/ksv3yav3ikpugqxdnpff.jpg",
    name: "Tinnitus",
    href: "/tinnitus-treatment-in-dallas-fort-worth/",
  },
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
    name: "Cognitive Therapy",
    href: "/cognitive-behavioral-therapy-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454384/tms-therapy/mjxwt37z6ebvoksefe6x.jpg",
    name: "Medication Management",
    href: "/medication-management-in-dallas/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454438/tms-therapy/ezmhyfdvicfsahqtvekf.jpg",
    name: "Panic Disorder",
    href: "/panic-disorder-dallas-tx/",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1736454517/tms-therapy/sceiuyb7g5yejullepav.jpg",
    name: "Trauma",
    href: "/trauma-treatment-in-dallas-fort-worth/",
  },
];
export default function PsychiatricListContent() {
  return (
    <>
      <div className="expertise-area pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className=" about-right">
                <h1 className="mt-5">
                  <b>
                    Comprehensive care through a multi-disciplinary approach
                  </b>
                </h1>
                <hr />
                <h3>
                  Our leading specialists have over 20 years, and thanks to
                  their multidisciplinary approach, we can treat:
                </h3>
                <ul>
                  {ourServices.map((service, index) => (
                    <li key={index}>
                      <a href={service.href}>
                        <p style={{ margin: 0, padding: 0 }}>{service.name}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
