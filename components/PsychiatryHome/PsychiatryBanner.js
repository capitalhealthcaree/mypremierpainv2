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
              backgroundImage: `url(/images/psychiatry-banner.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h4 style={{ color: "white", margin: "0 0 0 0" }}>
                      Nothing matters more than your,
                    </h4>
                    <h1 style={{ color: "white" }}>Mental health</h1>
                    <p style={{ color: "white" }}>
                      We're here to support you with our award-winning
                      therapies!
                    </p>
                    <div className="common-btn">
                      <Link
                        className=" bg-whaite"
                        style={{ backgroundColor: "white", color: "blue" }}
                        href="/appointment"
                      >
                        Let’s make it better together!
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
