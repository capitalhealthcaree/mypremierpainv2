import React from "react";
import Link from "next/link";

const ourServices = [
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852183/conditions-we-treat-services/k3ev6qpj5oys3ggd30o2.jpg",
    name: "Back Pain Relief",
    paragraph: (
      <span>
        For effective treatment, consult pain doctors in Dallas. Our back pain
        specialists near me diagnose and treat various{" "}
        <Link href={`/conditions-we-treat/back-pain/`} rel="preload">
          {" "}
          back pain treatments
        </Link>
        .
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735853118/conditions-we-treat-services/zwzrsfd4skruy2hhhb8o.jpg",
    name: "Arthritis Pain Relief",
    paragraph:
      "Arthritis affects over 50 million adults, causing pain and stiffness. Arthritis pain relief includes medication, exercise, and surgery.",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852585/conditions-we-treat-services/laauimnt7cltqzzr2xxp.jpg",
    name: "Neck Pain Relief",
    paragraph: (
      <span>
        <Link href={`/conditions-we-treat/neck-pain/`} rel="preload">
          Neck pain{" "}
        </Link>
        can result from injuries to ligaments, tendons, or bursae, as well as
        joint inflammation or infection.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852626/conditions-we-treat-services/pbsgdfbmy7fkyndbwsyc.webp",
    name: "Knee Pain Relief",
    paragraph: (
      <span>
        For
        <Link href={`/conditions-we-treat/knee-pain/`} rel="preload">
          {" "}
          knee pain relief{" "}
        </Link>
        , visit our Dallas pain clinic. Treatments include physical therapy,
        injections, and medication for chronic pain.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735853560/conditions-we-treat-services/nslqyha9v9oc54ss9pfz.jpg",
    name: "Lower Back Pain Relief",
    paragraph:
      "For lower back pain relief, our pain management doctors near me offer customized treatments like physical therapy and chiropractic care.",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852355/conditions-we-treat-services/hbogvl6tqrah62t2afd2.jpg",
    name: "Hip Pain Treatments",
    paragraph:
      "Our Dallas pain clinic offers specialized hip pain treatments. Pain clinics near me use advanced therapies to restore function and reduce pain.",
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852681/conditions-we-treat-services/e833rhldnaqtfwxtrks6.webp ",
    name: "Elbow Pain Treatment",
    paragraph: (
      <span>
        Our{" "}
        <Link href={`/meet-our-team/rao-k-ali/`} rel="preload">
          Pain management Dr
        </Link>{" "}
        treats elbow pain from various conditions. A
        <Link href={`https://g.co/kgs/UubhtwL`} rel="preload">
          {" "}
          pain specialist near me{" "}
        </Link>
        offers personalized treatments to restore function.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735853655/conditions-we-treat-services/yeovyofnisgevwt6uzzd.jpg",
    name: "Spine Pain Management",
    paragraph: (
      <span>
        Our Pain clinic in Dallas offers customized
        <Link
          href={`https://advancedcaresurgerycenter.com/spine-surgery/`}
          rel="preload"
        >
          {" "}
          spine pain management{" "}
        </Link>
        to relieve pain and improve your quality of life.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852301/conditions-we-treat-services/ujbefh5nxc3wbj8lyyyk.jpg",
    name: "Headaches",
    paragraph: (
      <span>
        <Link href={`/conditions-we-treat/headaches/`} rel="preload">
          {" "}
          Headaches{" "}
        </Link>{" "}
        and{" "}
        <Link href={`/migraines-treatment-in-dallas-tx/`} rel="preload">
          {" "}
          migraines{" "}
        </Link>
        can disrupt daily life. Our
        <Link
          href={`  https://g.co/kgs/6JtQ2gb
`}
          rel="preload"
        >
          {" "}
          Pain Dr near me{" "}
        </Link>{" "}
        offers holistic treatments for effective relief.{" "}
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852465/conditions-we-treat-services/hxxkvfg64n6xhtbtau4l.jpg",
    name: "Leg Pain Treatments",
    paragraph: (
      <span>
        Our Dallas pain clinic provides specialized{" "}
        <Link href={`/conditions-we-treat/leg-pain/`} rel="preload">
          leg pain treatments
        </Link>
        , including physical therapy and minimally invasive procedures.{" "}
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852538/conditions-we-treat-services/pfrkeg1jr6cm4f9fa4ii.jpg",
    name: "Sports Injury",
    paragraph: (
      <span>
        <Link href={`/interventional-pain-management/`} rel="preload">
          Interventional pain management{" "}
        </Link>
        helps treat sports injuries. Our{" "}
        <Link href={`https://g.co/kgs/sDK7aDg`} rel="preload">
          pain doctors in your area{" "}
        </Link>
        customize care for quick recovery.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735854156/conditions-we-treat-services/jupveadbd0sqoafvwe8c.jpg",
    name: "Sciatic Pain Relief",
    paragraph: (
      <span>
        Sciatica pain relief often includes physical therapy,{" "}
        <Link href={`/medication-management-in-dallas/`} rel="preload">
          medications{" "}
        </Link>
        , and injections to reduce pain and improve mobility.{" "}
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852257/conditions-we-treat-services/pm2rcnim8cf21fzsbgoq.jpg",
    name: "Joint Pain Relief",
    paragraph: (
      <span>
        Our{" "}
        <Link
          href={`/meet-our-team/rao-k-ali/`}
          rel="preload"
        >
          Pain management specialist in Dallas{" "}
        </Link>
        offer joint pain relief treatments to restore function and improve your
        quality of life.
      </span>
    ),
  },
  {
    imgSrc:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1735852492/conditions-we-treat-services/tgxhvp8mydpfuukwjs7d.jpg",
    name: "Shoulder Pain Relief",
    paragraph: (
      <span>
        Our Dallas pain clinic's specialists provide customized{" "}
        <Link href={`/conditions-we-treat/shoulder-pain/`} rel="preload">
          shoulder pain relief{" "}
        </Link>
        to help you regain mobility and reduce pain.
      </span>
    ),
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
            {ourServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-3" key={i}>
                  <div className="blog-item">
                    <div className="blog-top">
                      <img src={item.imgSrc} alt={item.name} />
                    </div>
                    <div className="blog-bottom text-center">
                      <h4>{item.name}</h4>
                      <p>{item.paragraph}</p>
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
