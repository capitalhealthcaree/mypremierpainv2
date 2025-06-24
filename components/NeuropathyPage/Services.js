const services = [
  {
    title: "Neuropathy",
    link: "/services/details",
    description:
      "A nerve disorder causing pain, tingling, numbness, or weakness, usually affecting hands, feet, or other extremities.",
  },
  {
    title: "Phantom Limb Syndrome",
    link: "/services/details",
    description:
      "A neurological condition where individuals feel pain, tingling, or sensations in a limb that’s been amputated.",
  },
  {
    title: "Chemotherapy Induced Neuropathy",
    link: "/services/details",
    description:
      "Nerve damage from cancer treatment causing pain, numbness, tingling, or muscle weakness.",
  },
  {
    title: "Trigeminal Neuralgia",
    link: "/services/details",
    description:
      "Chronic facial pain condition causing sudden, severe, electric-shock-like sensations along trigeminal nerve.",
  },
  {
    title: "Peripheral Neuropathy",
    link: "/services/details",
    description:
      "A condition involving nerve damage that causes pain, numbness, tingling, and weakness in hands or feet.",
  },
  {
    title: "Diabetic Neuropathy",
    link: "/services/details",
    description:
      "A diabetes-related nerve disorder causing pain, numbness, and weakness, primarily in the legs, feet, and hands.",
  },
  {
    title: "Pain Management",
    link: "/services/details",
    description:
      "A medical strategy focused on diagnosing, treating, and relieving chronic or acute pain conditions effectively.",
  },
  {
    title: "Postherpetic Nerve Pain (Post Shingles)",
    link: "/services/details",
    description:
      "Chronic nerve pain after shingles, causing burning, stabbing, or extreme skin sensitivity symptoms.",
  },
];

const ServicesCard = () => {
  return (
    <>
      <div className="services-area">
        <div className="container">
          <div className="section-title">
            <h2>Our Neuropathy Services</h2>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div className="service-item">
                  <div className="service-front">
                    <i className={service.icon}></i>
                    {/* <Link href={service.link}> */}
                    <h3>{service.title}</h3>
                    {/* </Link> */}
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
