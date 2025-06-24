import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles if not already included globally
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider home-slider-five"
      >
        <SwiperSlide>
          <div
            className="slider-item slider-item-three"
            style={{ position: "relative", overflow: "hidden" }}
          >
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            >
              <source
                src="/images/neuropathy/neuropathy.mp4"
                type="video/mp4"
              />
            </video>

            {/* Foreground Content */}
            <div
              className="d-table"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    {/* <h4 style={{ color: "white", margin: "0 0 0 0" }}>
                      Nothing matters more than your,
                    </h4> */}
                    <h1 style={{ color: "white", fontSize: "40px" }}>
                      Experience a Pain-Free Life with Innovative Neuropathy
                      Treatments
                    </h1>
                    <p
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "0",
                      }}
                    >
                      Our patient-centric approach ensures that you receive the
                      highest quality of care focused on your unique needs. We
                      understand that every individual is different, and we take
                      the time to listen to your concerns, answer your
                      questions, and involve you in the decision-making process
                      for your healthcare.
                    </p>
                    <div className="common-btn">
                      <Link
                        className="bg-whaite"
                        style={{ backgroundColor: "white", color: "black" }}
                        href="/appointment"
                      >
                        <b>Book Appointment</b>
                      </Link>
                      <Link
                        className="bg-whaite"
                        style={{ backgroundColor: "white", color: "black" }}
                        href="tel:+14695624188"
                      >
                        <b>469-562-4188</b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
