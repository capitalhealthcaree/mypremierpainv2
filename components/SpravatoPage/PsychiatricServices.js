import React from "react";
import Link from "next/link";

const outServices = [
  {
    imgSrc: "/images/medication-management.jpg",
    name: "Medication Management",
    des: "Ensure the best possible results by obtaining expert help in handling prescriptions for depression, anxiety, and other mental health issues.",
    href: "/medication-management-in-dallas/",
  },
  {
    imgSrc: "/images/talk-therapy.png",
    name: "Talk Therapy",
    des: "Participate in custom treatments that provide emotional support, foster personal development, and assist you in negotiating the difficulties of life.s",
    href: "/talk-therapy-dallas/",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area my-5">
        <div className="container">
          <div className="section-title">
            <h2>Psychiatric Services in Dallas</h2>
            <p className="mt-3">
              A true expert on psychiatric medication, Dr. Pollard and his staff
              at our mental health treatment centers offer thorough
              psychological health solutions meant to help every person reach
              wellness on their terms. We provide a complete range of
              psychiatric consultation services and therapies custom-designed to
              cover many mental health issues. Our integrative approach combines
              both mental and physical health therapies, ensuring a holistic and
              effective path to recovery.
            </p>
            <p>
              With Dallas-based professionals who treat patients based on
              evidence with a customized approach to mental health services, you
              could have depression, anxiety, ADHD, or other mental disorders.
              Under the direction of our Dallas ADHD specialist and a group of
              mental health practitioners, you will have access to strong tools
              and techniques that support long-term recovery and a better
              standard of life.
            </p>
          </div>

          <div className="row justify-content-center ">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-6" key={i}>
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
