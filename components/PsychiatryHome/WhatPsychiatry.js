export default function HealingLightPsychiatry() {
  const whyChooseReasons = [
    {
      description: "Excessive alcohol or drug consumption",
    },
    {
      description: "Cutting ties with friends and social contacts",
    },
    {
      description: "Changes in sex drive",
    },
    {
      description:
        "Perception disorders including hallucinations and delusions",
    },
    {
      description: "Overstated worry",
    },
    {
      description: "Fatigue",
    },
    {
      description: "Loneliness or grief",
    },
    {
      description: "Not being able to sense the emotional state of others",
    },
    {
      description: "Extreme annoyance or rage",
    },
    {
      description: "Weight, beauty, or diet obsession",
    },
    {
      description:
        "Difficulty concentrating, acquiring knowledge, or managing everyday chores",
    },
    {
      description: "Emotional rollercoasters from 'lows' to 'highs'",
    },
    {
      description: "Self-mutilation or suicidal thoughts",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <div
            className="text-white p-4 rounded"
            style={{ backgroundColor: "#0046c0" }}
          >
            <h3 className="text-white">Symptoms of Mental Health Conditions</h3>
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="d-flex align-items-start">
                <ul className="text-white m-0">
                  <li className="text-white font-weight-bold">
                    {reason.description}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="pe-md-4">
            <h1 className="mb-4">What is Psychiatry?</h1>
            <p>
              Psychiatry prevents, treats, and diagnoses mental, emotional, and
              behavioral disorders. Particularly for substance use issues, a
              doctor who treats mental health is known as a psychiatrist.
              Psychiatrists can examine psychological problems' mental and
              physical components.
            </p>
            <p>
              Various factors drive people to seek psychiatric help. Persistent
              depression, hopelessness, or anxiety that never seems to go away
              or problems with functioning could interfere with daily life.
              Throughout the Texas region, we provide in-person and online
              psychiatry services and other kinds of therapy programs. Therapy
              and psychiatric care offer customized, patient-centered therapy
              that addresses all types of medical requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
