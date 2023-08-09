import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const Footer = dynamic(() => import("../components/_App/Footer"));

const review = [
  {
    heading: "His Plan Helped Reduce My Pain",
    name: "MIKEY D.",
    review:
      "I came to see Dr. Rao K Ali for a consultation for low back pain from years of doing gymnastics. I was greeted by Dr. Rao K Ali with a big smile and with his full attention. He listened to all my pain areas and stories of how I injured myself. He was able to make a care plan to treat my low back pain and his plan has helped reduce my pain tremendously. I highly recommend Dr. Rao K Ali.",
  },
  {
    heading: "I Can Stand & Walk Again",
    name: "PETER H.",
    review:
      "Compared to the condition I was in, I would endorse more than ninety percent relief. This doctor took on my difficult case as I was on heavy pain medication and had several surgeries. He believed in me and in helping me through this difficult time. I believe in him completely. I can actually stand and walk straight again. Mind you I am finally off the narcotics medications. Doctor Ali changed my life I will be forever grateful.",
  },

  {
    heading: "A Complete Doctor",
    name: "HIKIMI K.",
    review:
      "He is a complete doctor who cares about his patients and with me, he has helped so much and understands that about the pain I am in and he talks to me about what can be done to help me without taking a lot of pills. I trust him.",
  },
  {
    heading: "Knowledge, Professionalism & Compassion",
    name: "BENJAMIN D.",
    review:
      "Dr. Ali!. His balanced mix of knowledge, professionalism & compassion is second to none while working with patients who suffer from pain on a daily basis. He helps me understand the reasons for the particular medications & the doses he prescribes. I would recommend him to everyone!!!",
  },

  {
    heading: "Genuine Care",
    name: "BARBI K.",
    review:
      "Dr. Ali is an amazing doctor! He takes time talking with me about my pain and is extremely genuine about my care. I feel very secure in the help that I receive. He takes a personal interest in my well-being. I wish other doctors in the medical field would care about their patients like Doctor Ali. He is an excellent doctor.",
  },
  {
    heading: "Painless",
    name: "ALEX S.",
    review:
      "Doctor Ali is amazing. He did back surgery on me all through a simple and small needle. No cutting, suturing or bleeding. I was reluctant to have surgery but he showed me his videos of people who found great relief through surgery. Now, I feel 100% better. It was painless. Recommendation straight away for all of you.",
  },

  {
    heading: "I Feel A Lot Better",
    name: "JESSICA H.",
    review:
      "Dr. Ali was able to help me with my back pain, he did some injections. I was in lots of pain, standing walking, but now with Injections and some meds, I feel a lot better. Dr Rao K ALi is Great doctor. I would recommend him to everyone!!!!",
  },
  {
    heading: "Given Me Relief",
    name: "RAELYN H.",
    review:
      "Been a patient for several years. Really like his knowledge and professionalism and has given me some relief with different procedures. His staff is very friendly and helpful. Would recommend him for people that have serious back issues like myself.",
  },
  {
    heading: "A Godsend",
    name: "NANCY M.",
    review:
      "Dr. Ali has been a godsend for me. I have seen several pain management Drs but he is the first that has made a significant difference in my pain level. When I first came to see Dr. Ali I was taking 6 Norco per day and still in pain. I am now down to 3 per day as needed and can relax if my due date for refill passes because I have pills left because more than likely I have meds left. I have complete days now that I can skip my meds. That has not happened to me in a long long time. Thank you Dr. Ali.",
  },
  {
    heading: "Dr. Ali Cares About His Patients",
    name: "SHANNON S.",
    review:
      "Dr. Ali cares about his patients he doesn't give up on his patients he keeps working with them to get the pain down to at least 90-95%. If you have a CNA that takes care of you, he will explain everything he is doing so the CNA also understand. For instance, I was due to come in on a day that was icy snow and was told to stay home. Well, the wires were coming out which it was time for 5hem to. Well, I could not make it we were snowed in. I will always recommend him and his staff.",
  },
];
const reviews = () => {
  return (
    <>
      <Head>
        <title>Patients Reviews: Hear What Our Customers Say</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/reviews/`}
        />
        <meta
          name="description"
          content="Premier Pain Centers has helped many people with pain management services! Read what our past clients have to say about us. Schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Our Patients Reviews"
        homePageUrl="/"
        homePageText="Home"
        activePageText="reviews"
        bgImage="/images/testimonial-bg.jpg"
      />

      <div className="mb-2">
        <div className="container">
          <div className=" row mt-3">
            {review.map((item, i) => {
              return (
                <div className="col-sm-12 col-lg-6 mb-4" key={i}>
                  <div
                    className="feedback-item"
                    style={{ border: "1px solid #0046c0" }}
                  >
                    <h5>{item.heading}</h5>
                    <p>{item.review}</p>
                    <b>{item.name}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default reviews;
