import React from "react";
const outServices = [
  {
    imgSrc: "/images/medication-management.jpg",
    name: "Medication Management",
    des: "Ensure the best possible results by obtaining expert help in handling prescriptions for depression, anxiety, and other mental health issues.",
    href: "",
  },
  {
    imgSrc: "/images/talk-therapy.png",
    name: "Talk Therapy",
    des: "Participate in custom treatments that provide emotional support, foster personal development, and assist you in negotiating the difficulties of life.",
    href: "",
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
              Our broad spectrum of psychiatric consultation services is
              intended to provide complete care for every individual. Using
              mental and physical health therapy simultaneously, our Dallas ADHD
              specialist comprehensive strategy provides powerful tools for many
              types of psychological illness. Our mental health services can
              help you on your way to recovery, whether you are suffering from
              depression, anxiety, or other problems.
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
