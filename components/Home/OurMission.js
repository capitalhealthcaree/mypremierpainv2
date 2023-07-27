import React from "react";
import Link from "next/link";

const OurMission = () => {
  return (
    <>
      <div className="spread-area pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spread-content">
                <div className="section-title-two">
                  <h2>Live Pain Free With Our Experts</h2>
                </div>
                <p>
                  The team at Premier Pain Centers is proud to offer patients a
                  wide array of treatments all under one roof, to save you time,
                  money, and stress. We understand how chronic pain can become
                  debilitating — it affects every part of a person’s life. We
                  offer top-quality pain management through minimally invasive,
                  effective procedures and educate you on your condition so you
                  can manage your symptoms at home with ease. Our focus is on
                  increasing your overall health so you can start to enjoy life
                  again. From the moment you walk through our doors, you will
                  notice the level of care we provide. Our compassionate team
                  utilizes state-of-the-art equipment to ensure you receive the
                  most advanced treatments.
                </p>
                {/* <ul>
                  <li>
                    <img src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      Premier Pain Centers operates in the most efficient way
                      possible to provide a safe environment and deliver the
                      most effective surgical services to patients in{" "}
                      <Link href="/contact-locations/richardson">
                        Richardson
                      </Link>
                      ,{" "}
                      <Link href="/contact-locations/fort-worth">
                        Fort Worth
                      </Link>
                      ,{" "}
                      <Link href="/contact-locations/lancaster">Lancaster</Link>
                      ,{" "}
                      <Link href="/contact-locations/hillsboro">Hillsboro</Link>
                      ,{" "}
                      <Link href="/contact-locations/corsicana">Corsicana</Link>{" "}
                      and the surrounding areas. When it comes to spine-related
                      issues, Premier Pain Centers offers the treatment and care
                      you deserve and expect. Regardless of the cause, our
                      experienced team is ready to help.
                    </p>
                  </li>

                  <li>
                    <img src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      We at Premier Pain Centers strive to utilize advanced
                      technology and remain at the forefront of medical
                      innovation. As a result of our minimally invasive
                      techniques, our patients are able to recover faster,
                      experience less discomfort, and experience less scarring
                      during the healing process.
                    </p>
                  </li>
                  <li>
                    <img src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      Our value proposition lies in our ability to offer timely,
                      same-day outpatient surgery procedures—such as M6
                      artificial disc replacements—to patients who travel from
                      all over the world to receive treatment from our skilled
                      team of experts.
                    </p>
                  </li>
                  <li>
                    <img src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      We offer expert diagnosis and treatment for pain and
                      dysfunction caused by deformity, degenerative disc
                      disease, trauma, and failed neck or back surgeries.
                    </p>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="spread-img">
                <img src="/images/our-mission/pain-body.webp" alt="Spread" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
