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
