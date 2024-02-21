import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const reviews = [
  {
    heading: "sylvia rich",
    link: "https://g.co/kgs/MQWrjRB",
    review:
      "I absolutely love this place. I have never had injections that worked so quickly and so well. The staff has always been friendly and treated me with respect. The Dr is very thorough with his care. It may take a little time, but I never feel rushed when it’s my turn.Overall, my experiences here have Ben nothing but positive",
  },
  {
    heading: "James Burnette",
    link: "https://g.co/kgs/nJKg7my",
    review:
      "Dr Ali has saved my life. All the other doctors are afraid to prescribe anything for pain. I have chronic pancreatitis and didn't want to get off the couch because of the pain. I now have my life back.",
  },
  {
    heading: "Cindy Carter",
    link: "https://g.co/kgs/7Se7BU1",
    review:
      "Micheal is always so helpful and nice.Dr Ali is a very good doctor.  The office girls  are sweet and friendly.",
  },
  {
    heading: "Valerie Dixon",
    link: "https://g.co/kgs/KVNX5RY",
    review:
      "Doctor Ali is somebody that I can confide in when it comes to my pain. He's done a great job on my neck. And I will suggest him to anybody.",
  },
  {
    heading: "Kyle Breznak",
    link: "https://g.co/kgs/k4i8U42",
    review:
      "Premier pain has been a life saver.  Mike , dr Ali all of them here in hillsboro. Great people great service. They have lowered my pain to a level where i can function normally",
  },
  {
    heading: "Darrell Long",
    link: "https://g.co/kgs/1XjJbPM",
    review:
      "Time thru these processes have been worth the wait so far. Meeting Dr Moore was a pleasant surprise as well!",
  },
  {
    heading: "James Malone",
    link: "https://g.co/kgs/gSWoMWo",
    review:
      "The doctors and Mike have really helped me along the way they're very professional and I enjoy them.",
  },
  {
    heading: "Tammy Wilson",
    link: "https://g.co/kgs/8sNUdVY",
    review:
      "Very professional and job well done. I would tell everyone to come to premier pain. Keep up the good work 👍",
  },
  {
    heading: "Eric King",
    link: "https://g.co/kgs/rF1i4rp",
    review:
      "Definitely a place that cares about you and make sure you're not in pain in the fixed a problems the way they're supposed to be and not just put a Band-Aid over it and say here you go you're good they actually care to help get you better",
  },
  {
    heading: "Ruth Greer",
    link: "https://g.co/kgs/B2MG6D9",
    review: "Friendly staff, very professional.Love Premier Pain Center ‼️‼️‼️",
  },
  {
    heading: "Jeff Cross",
    link: "https://g.co/kgs/ZSPBiFT",
    review: "Best pain centers",
  },
  {
    heading: "sharon Smith smith",
    link: "https://g.co/kgs/JVJ7oFw",
    review: "He is a great doctor who is honest and straightforward!!!",
  },
  {
    heading: "Money Lumas",
    link: "https://g.co/kgs/DU6dT13",
    review:
      "Premier Pain Management is awesome I highly recommend anyone with chronic pain to this office the doctors and staff are amazing they take great care of you!",
  },
  {
    heading: "Michele Gurno",
    link: "https://g.co/kgs/v8vR41M",
    review:
      "I like Michael. He is very good with patients. I also like Dr. Ali.",
  },
];

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
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="feedback-item">
                  <div className="client-img">
                    <Link href={item.link} rel="preload" target="_blank">
                      {" "}
                      <h3>{item.heading}</h3>
                    </Link>
                  </div>
                  <p>{item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
