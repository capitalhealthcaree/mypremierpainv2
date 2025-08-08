export default function HealingLightPsychiatry() {
  const whyChooseReasons = [
    {
      title: "Holistic Mental Health Approach",
      description:
        "For complete recovery, our integrative care plans center on both mental and physical health.",
    },
    {
      title: "Online Mental Health Support",
      description:
        "Get online psychiatry consultation services conveniently using our reliable telehealth best mental health services.",
    },
    {
      title: "Expert Psychiatric Solutions",
      description:
        "From counseling to medication management, our centers offer the best mental care psychiatric treatments.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Every patient is given a personalized plan to address the causes of psychiatric problems.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <div className="pe-md-4">
            <h1 className="mb-4">Psychiatry Treatments</h1>
            <p>
              Therapy may be required for mental illnesses. Certain mental
              conditions respond positively to antidepressants and
              antipsychotics. These medicines change the brain's chemistry, thus
              lessening symptoms. One must take medicine exactly as directed.
              Before stopping any mental illness medication, see your doctor. An
              expert in mental health can enable you to conquer obstacles and
              control disease symptoms. Health experts can give one-on-one or
              small-group psychotherapy. Psychiatry near you in Dallas offers
              cognitive-behavioural therapy, which is part of psychotherapy. Its
              goal is to change poor habits and thinking. Depressed people could
              benefit from alternative treatments. One may include herbs,
              massage, acupuncture, yoga, and meditation. Before using any herbs
              or supplements, seek advice from your doctor. They could affect
              different medicines. Not all diseases respond to medication.
              Therefore, your physician may recommend brain stimulation. These
              medications change how brain cells and nerves react to stimulants
              and process chemicals. Two such cases are TMS and ECT.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="text-white p-4 rounded"
            style={{ backgroundColor: "#0046c0" }}
          >
            <h2 className="text-white mb-4">Why Choose Us?</h2>
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
