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
                  <h2>
                    Live Pain-Free With Our Dallas Pain Management Experts
                  </h2>
                </div>
                <p>
                  Premier Pain Centers, a best pain clinic in Dallas, TX, offers
                  a complete range of advanced pain management treatments all
                  under one roof saving you time, money and stress. We
                  understand that chronic pain can impact every part of your
                  life, which is why our primary focus is on providing minimally
                  invasive, highly effective procedures that help you get back
                  to the activities you love.
                </p>
                <p>
                  Our best doctors at Premier Pain Centers, led by Dr. Rao K.
                  Ali, a trusted pain doctor in Dallas and experienced pain
                  physician in Texas, uses state-of-the-art equipment and
                  evidence-based techniques to achieve the best possible
                  results. We also provide patient education so you can manage
                  your symptoms confidently at home.
                </p>
                <div>
                  <ul className={styles["values-list"]}>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-doctor`}
                      ></i>
                      <h5 className={styles["heading-list"]}>
                        Personalized treatment plans for chronic and acute pain
                      </h5>
                    </li>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-file-image`}
                      ></i>
                      <h5>
                        Advanced procedures for spine, joints, and nerve pain
                      </h5>
                    </li>
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-handshake-deal`}
                      ></i>
                      <h5>
                        Minimally invasive techniques providing faster, safer
                        recovery
                      </h5>
                    </li>{" "}
                    <li>
                      <i
                        className={`${styles["values-icon"]} icofont-heart-beat`}
                      ></i>
                      <h5>
                        Holistic care combining therapy, medication, and
                        procedures
                      </h5>
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
