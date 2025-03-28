import React from "react";

export default function HealingLightPsychiatry() {
  const whyChooseReasons = [
    {
      title: "Holistic Mental Health Care",
      description:
        "Our integrative treatment plans address both mind and body for complete healing.",
    },
    {
      title: "Online Mental Health Support",
      description:
        "Access care from the comfort of your home with our reliable telehealth mental health services.",
    },
    {
      title: "Expert Psychiatric Services",
      description:
        "From medication management to therapy, we offer a full spectrum of mental health Psychiatry services.",
    },
    {
      title: "Personalized Care",
      description:
        "Each patient receives a tailored plan, addressing both the symptoms and the underlying causes of mental health conditions.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <div className="pe-md-4">
            <h1 className="mb-4">
              Expert Care from a Mental Health Specialist in Dallas
            </h1>
            <p>
              At Premier Pain Centers, you'll receive compassionate care from
              Ronnie Pollard, a dedicated and highly qualified, board-certified
              mental health psychiatrist in Dallas. Our welcoming,
              non-judgmental environment ensures that your mental health and
              comfort are always our top priorities.
            </p>
            <p>
              Whether you need comprehensive psychiatric care or support with
              medication management, we work collaboratively with you to develop
              a treatment plan that aligns with your goals. Our services empower
              you to regain control of your life and achieve lasting well-being.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="text-white p-4 rounded"
            style={{ backgroundColor: "#0046c0" }}
          >
            <h2 className="text-white mb-4">Why Choose US?</h2>
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="d-flex align-items-start mb-3">
                <div className="flex-shrink-0 me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="text-white">
                  <h5 className="text-white mb-1">{reason.title}</h5>
                  <p className="text-white small">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
