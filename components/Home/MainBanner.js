import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const MainBanner = ({ text }) => {
  return (
    <>
      <div
        // className=`slider-item ${styles.bg-img-slider}
        className={`slider-item ${styles.bgImgSlider}`}
        // style={{ backgroundImage: `url(/images/home-slider-bg.webp)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className={styles.slidertext1}>
                {/* <div className="slider-shape">
                  <img
                    style={{ visibility:"hidden" }}
                    src="/images/circle-image.webp"
                    alt="Shape"
                  />
                </div> */}

                <h2 style={{ color: "white" }}>
                  Trusted Pain Care Throughout{" "}
                  {text === "Dallas" ? "Dallas" : "Northern Texas"}
                </h2>
                <h1>YOU WILL SEE WE CARE</h1>
                <p>
                  {text === "Dallas"
                    ? "At Premier Pain Centers, a leading Dallas pain clinic, we offer top-quality pain management in Dallas, using some of the least invasive and most effective procedures provided by expert pain management doctors in Dallas."
                    : " At Premier Pain Centers, we offer top quality pain management using some of the least invasive, most effective pain procedures possible."}
                </p>

                <div className="common-btn">
                  <Link className="mb-2" href="/appointment/" rel="preload">
                    Schedule Appointment
                  </Link>

                  <Link
                    href="/contact-locations/"
                    className="cmn-btn-right"
                    rel="preload"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
