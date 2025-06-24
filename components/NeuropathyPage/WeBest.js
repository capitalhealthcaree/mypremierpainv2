export default function HealingLightPsychiatry() {
  const whyChooseReasons = [
    {
      description: "We Have a High Success Rate of Wellness",
      icon: "/images/neuropathy/success.png",
    },
    {
      description: "Helping People Get Their Lives Back Since 2019",
      icon: "/images/neuropathy/help.png",
    },
    {
      description: "Every Patient Becomes a Part of Our Family",
      icon: "/images/neuropathy/family-care.png",
    },
    {
      description: "We Highly Value Excellent Customer Care",
      icon: "/images/neuropathy/care.png",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <div
            className="text-white p-4 rounded"
            style={{
              backgroundColor: "",
              opacity: "0.8",
              boxShadow: "0px 0px 25px 0px rgba(221, 221, 221, 0.7490196078)",
            }}
          >
            <div className="section-title">
              <h2
                style={{
                  color: "black",
                }}
              >
                WHY WE'RE THE BEST
              </h2>
            </div>
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="d-flex align-items-start">
                <ul
                  className="m-0"
                  style={{
                    color: "black",paddingLeft:"0rem"

                  }}
                >
                  <li
                    className="py-2"
                    style={{
                      listStyleType: "none",
                      fontSize: "20px",
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    <img
                      className="mb-3"
                      src={reason.icon}
                      alt="Expertise"
                      style={{ width: "45px", height: "45px" }}
                    />{" "}
                    {reason.description}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src="/images/neuropathy/we-best.jpg" alt="Symptoms" />
        </div>
      </div>
    </div>
  );
}
