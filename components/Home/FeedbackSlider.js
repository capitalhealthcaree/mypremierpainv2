import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="review-area pt-5 pb-5">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <h3>Jason Brooks</h3>
                </div>
                <p>
                  The doctors as well as the staff here are wonderful. They
                  truly care about their patients' well being, and they take
                  time to listen. They are also great in communicating
                  everything needed including treatment plans and appointment
                  scheduling. I am so very thankful to have found them!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  {/* <img src="/images/clients/client2.png" alt="Feedback" /> */}
                  <h3>Kristin Ellis</h3>
                </div>
                <p>
                  I have been a patient of Dr. Zulqurnain's for 10 years. He is
                  professional, knowledgeable and friendly..and the ONLY person
                  I feel comfortable sticking needles in my back. He is an
                  EXCELLENT doctor with over 30 years of experience.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  {/* <img src="/images/clients/client3.png" alt="Feedback" /> */}
                  <h3>Raymond K. Artman</h3>
                </div>
                <p>
                  The staff and doctors are so caring and compassionate. You are
                  treated as an individual and not just a number. Your pain
                  concerns are genuinely taken into consideration. Doctor Ali
                  gave is full attention and treated me. It has been one of the
                  best medical decisions I have ever made because I am finally
                  able to enjoy life again without my pain.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  {/* <img src="/images/clients/client4.png" alt="Feedback" /> */}
                  <h3>Mazie Wilson</h3>
                </div>
                <p>
                  Receptionist and Doctors are very nice and care about the
                  patients well being. Love Premier Pain Centers they are very
                  professional and really do care about their patients Dr Rao
                  Ali thanks for being my pain doctor and my therapist.
                </p>
                
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
