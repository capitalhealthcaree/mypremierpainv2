import Link from "next/link";

const outServices = [
  {
    imgSrc: "/images/ketamine.jpg",
    name: "Ketamine Infusion Therapy",
    des: " Advanced Ketamine infusion therapy in Dallas for treatment-resistant depression, anxiety, PTSD, rapid results, supportive setting, restore balance.",
    href: "/ketamine-infusion-therapy/",
  },
  {
    imgSrc: "/images/spravato.jpg",
    name: "Spravato® (Esketamine) Treatment",
    des: "FDA-approved Spravato® treatment in Dallas for depression, anxiety, PTSD, fast-acting relief, safe environment, expert psychiatric care for lasting wellness.",
    href: "/spravato-treatment-dallas/",
  },
];
const OurServices = () => {
  return (
    <>
      <div className="blog-area my-5">
        <div className="container">
          <div className="section-title">
            <h3>
              Ketamine & Spravato® Treatments in Dallas – Premier Pain Centers
            </h3>
            <p className="mt-3">
              At Premier Pain Centers in Dallas, we provide advanced treatments
              like Ketamine Infusion Therapy and Spravato® (Esketamine Nasal
              Spray) for treatment-resistant depression, anxiety, PTSD, and
              other mood disorders. These proven therapies deliver fast relief
              and lasting results in a safe, supportive setting — helping you
              restore balance, rediscover hope, and regain control of your life.
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
