export default function HealingLightPsychiatry() {
  const whyChooseReasons = [
    {
      description: "FDA-approved for TRD and MDD with suicidal thoughts",
    },
    {
      description: "Works through a unique NMDA receptor pathway",
    },
    {
      description: "Provides rapid symptom relief, often within hours",
    },
    {
      description: "Administered in a safe, supervised clinical environment",
    },
    {
      description:
        "Used alongside an oral antidepressant for enhanced effectiveness",
    },
    {
      description:
        "Suitable for adults who have not improved with other depression treatments",
    },
    {
      description:
        "Helps improve mood, reduce anxiety, and restore daily functioning",
    },
    {
      description:
        "Treatment sessions are tailored to each patient’s individual needs",
    },
    {
      description:
        "Offered at certified clinics like Premier Pain Centers in Dallas for quality care",
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
            <h3 className="text-white">Key Benefits of Spravato®</h3>
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
            <h3 className="mb-4">What is Spravato®? Helps with Depression</h3>
            <p>
              Spravato® (esketamine) is an FDA-approved nasal spray specifically
              designed for adults struggling with treatment-resistant depression
              or major depressive disorder accompanied by suicidal thoughts.
              Unlike traditional antidepressants that can take weeks to work,
              Spravato® targets the brain’s NMDA receptors, offering faster
              relief from debilitating symptoms. This innovative treatment is
              always paired with an oral antidepressant to enhance effectiveness
              and is administered under the close supervision of medical
              professionals in a certified clinic. At Premier Pain Centers in
              Dallas, we provide Spravato® in a safe, supportive environment,
              helping patients find hope, restore emotional balance, and regain
              control of their mental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
