import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

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
            style={{
              backgroundImage: `url(/images/spravato-banner.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h4 style={{ color: "black", margin: "0 0 0 0" }}>
                      Rediscover Hope with Spravato ,
                    </h4>
                    <h1 style={{ color: "black" }}>Mental Health</h1>
                    <p style={{ color: "black" }}>
                      Get personalized Spravato® treatment plans for your mental
                      health needs.
                    </p>
                    <div className="common-btn">
                      <Link
                        className=" bg-whaite"
                        style={{ backgroundColor: "white", color: "black" }}
                        href="/appointment"
                      >
                        <b>Book Spravato Consultation</b>
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
