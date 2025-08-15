import Link from "next/link";

const contactLocations = [
  {
    title: "RICHARDSON",
    address: (
      <>
        2071 N Collins Blvd <br /> Richardson TX 75080
      </>
    ),
    link: "/contact-locations/richardson/",
  },
  {
    title: "NORTH RICHLAND HILLS",
    address: (
      <>
        7304 NE Loop 820, Ste. C
        <br /> North Richland Hills, TX 76180
      </>
    ),
    link: "/contact-locations/north-richland-hills/",
  },
  {
    title: "FORT WORTH",
    address: (
      <>
        1111 5th Ave,
        <br /> Fort Worth, TX 76104
      </>
    ),
    link: "/contact-locations/fort-worth/",
  },
  {
    title: "Desoto",
    address: (
      <>
        281 N Interstate 35 E Rd,
        <br /> Desoto, TX 75115
      </>
    ),
    link: "/contact-locations/desoto/",
  },
  {
    title: "HILLSBORO",
    address: (
      <>
        207 I-35, Hillsboro <br /> TX 76645
      </>
    ),
    link: "/contact-locations/hillsboro/",
  },
  {
    title: "WAXAHACHIE",
    address: (
      <>
        20 Northgate Dr, <br /> Waxahachie, TX 75165
      </>
    ),
    link: "/contact-locations/waxahachie/",
  },
  {
    title: "CORSICANA",
    address: (
      <>
        3108 E. State HWY 22,
        <br /> Corsicana, TX 75102
      </>
    ),
    link: "/contact-locations/corsicana/",
  },
  {
    title: "DECATUR",
    address: (
      <>
        902 Preskitt Rd, Suite 300
        <br /> Dectur, TX 76234
      </>
    ),
    link: "/contact-locations/decatur/",
  },
  {
    title: "CLEBURNE",
    address: (
      <>
        131 S Westmeadow Dr,
        <br /> Cleburne, TX 76033
      </>
    ),
    link: "/contact-locations/cleburne/",
  },
  {
    title: "PLANO",
    address: (
      <>
        7712 San Jacinto Place Suite 300
        <br /> Plano, TX 75024
      </>
    ),
    link: "/contact-locations/plano/",
  },
  {
    title: "ENNIS",
    address: (
      <>
        2200 Physicians Boulevard, Suite B1
        <br /> Ennis, Texas 75119
      </>
    ),
    link: "/contact-locations/ennis/",
  },
  {
    title: "MESQUITE",
    address: (
      <>
        200 W Kearney St,
        <br /> Mesquite, TX 75149
      </>
    ),
    link: "/contact-locations/mesquite/",
  },
  {
    title: "GUN BARREL CITY",
    address: (
      <>
        519 N Gun Barrel Ln Suite A
        <br /> Gun Barrel City, TX 75156
      </>
    ),
    link: "/contact-locations/gun-barrel-city/",
  },
  {
    title: "Kaufman",
    address: (
      <>
        874 Ed Hall Dr., Suite 110,
        <br />
        Kaufman, TX 75142
      </>
    ),
    link: "/contact-locations/kaufman/",
  },
];

const Contact = () => {
  return (
    <div className="departments-area pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-center">
          {contactLocations.map((location, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <Link href={location.link} rel="preload">
                <div className="department-item">
                  <i className="icofont-location-pin"></i>
                  <h3>{location.title}</h3>
                  <p>{location.address}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
