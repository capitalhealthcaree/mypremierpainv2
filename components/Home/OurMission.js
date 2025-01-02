import React from "react";
import styles from "../../styles/Home.module.css";

const OurMission = () => {
  return (
    <>
      <div className="spread-area pt-5">
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
                  can manage your symptoms at home with ease.
                </p>
                <p>
                  Our focus is on increasing your overall health so you can
                  start to enjoy life again. From the moment you walk through
                  our doors, you will notice the level of care we provide. Our
                  compassionate team utilizes state-of-the-art equipment to
                  ensure you receive the most advanced treatments.
                </p>
                <div>
                  <ul className={styles["values-list"]}>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-doctor`}
                      ></i>
                      <h5 className={styles["heading-list"]}>
                        We Provide Patient Education Through Every Step
                      </h5>
                    </li>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-file-image`}
                      ></i>
                      <h5>We Can Schedule An Appointment Within 24 Hours</h5>
                    </li>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-handshake-deal`}
                      ></i>
                      <h5>One-Stop-Shop for All Pain Management Treatments</h5>
                    </li>{" "}
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-heart-beat`}
                      ></i>
                      <h5>Our Doctor Has Performed Over 20,000 Procedures</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="spread-img">
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <source
                    src="https://res.cloudinary.com/dngmflrpx/video/upload/v1735859373/pain-body_toak8l.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
