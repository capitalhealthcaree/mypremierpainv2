import Link from "next/link";

const outServices = [
  {
    imgSrc: "/images/ketamine.jpg",
    name: "Ketamine Infusion Therapy",
    des: "Our Advanced Ketamine infusion therapy in Dallas for treatment-resistant depression, anxiety, PTSD, rapid results, supportive setting, restore balance.",
    href: "/ketamine-infusion-therapy/",
  },
  {
    imgSrc: "/images/spravato.jpg",
    name: "Spravato® (Esketamine) Treatment",
    des: "FDA-approved Spravato® treatment in Dallas for depression, anxiety, PTSD, fast-acting relief, safe environment, expert psychiatric care for lasting wellness.",
    href: "/spravato-treatment-dallas/",
  },
  {
    imgSrc: "/images/psychiatry.jpg",
    name: "Psychiatry",
    des: "At Premier Pain Centers, our psychiatry services support patients in Dallas and surrounding areas by addressing the emotional and mental health aspects of chronic pain, helping improve overall.",
    href: "/psychiatric-services-in-dallas-tx/",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area my-5">
        <div className="container">
          <div className="section-title">
            <h3>Look to Us for Premier Service in Dallas</h3>
            <p className="mt-3">
              At Premier Pain Centers, serving Dallas and nearby areas, our
              board-certified physicians offer ketamine therapies, Spravato, and
              psychiatry services. We create personalized plans, from infusions
              to therapy sessions, to help you achieve the best results.
            </p>
          </div>

          <div className="row justify-content-center ">
            {outServices.map((item, i) => {
              return (
                <div className="col-md-4 col-lg-4" key={i}>
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
