import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const HeroSlider = () => {
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
            style={{
              backgroundImage: `url(http://res.cloudinary.com/dngmflrpx/image/upload/v1736448787/tms-therapy/qryti5csh5deyftfkdvk.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h1 style={{ color: "white", margin: "0 0 0 0" }}>
                      Change Your Mind,
                    </h1>
                    <h1 style={{ color: "white" }}>Change Your Life.</h1>
                    <p style={{ color: "white" }}>
                      TMS is an FDA-approved treatment for depression and
                      anxiety that uses gentle magnetic pulses to stimulate the
                      brain.
                    </p>
                    <div className="common-btn">
                      <Link
                        className=" bg-whaite"
                        style={{ backgroundColor: "white", color: "blue" }}
                        href="/appointment"
                      >
                        Get Appointment
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
};

export default HeroSlider;
