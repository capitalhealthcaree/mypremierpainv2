import Link from "next/link";

const expertiseData = [
  {
    title: "Back and Lower Back Pain",
    description: (
      <>
        Lower back pain can result from muscle strain, herniated discs,
        arthritis, or spinal issues. Dr. Ali provides non-surgical and minimally
        invasive{" "}
        <Link href="/conditions-we-treat/back-pain/" rel="preload">
          <b>treatments to relieve back pain in Dallas</b>
        </Link>
        , helping patients return to daily activities without chronic
        discomfort.
      </>
    ),
  },
  {
    title: "Neck Pain",
    description: (
      <>
        Neck pain often develops from poor posture, whiplash injuries, or
        cervical spine problems. We offer targeted{" "}
        <Link href="/conditions-we-treat/neck-pain/" rel="preload">
          <b> neck pain treatment in Dallas</b>
        </Link>{" "}
        to address stiffness, nerve irritation, and inflammation for lasting
        relief.
      </>
    ),
  },
  {
    title: "Headaches and Migraines",
    description: (
      <>
        Chronic headaches or migraines can significantly impact daily life. Dr.
        Ali uses advanced pain management techniques to identify triggers and
        reduce the frequency and{" "}
        <Link href="/conditions-we-treat/headaches/" rel="preload">
          <b> intensity of headaches in Dallas</b>
        </Link>{" "}
        patients.
      </>
    ),
  },
  {
    title: "Sciatica and Leg Pain",
    description: (
      <>
        Sciatica causes sharp, radiating pain from the lower back down the leg
        due to nerve compression. Our{" "}
        <Link href="/conditions-we-treat/leg-pain/" rel="preload">
          <b> Dallas sciatica treatments</b>
        </Link>{" "}
        focus on reducing nerve pressure and restoring normal function.
      </>
    ),
  },
  {
    title: "Neuropathy",
    description: (
      <>
        Peripheral neuropathy can lead to numbness, burning, or tingling in the
        hands and feet. Dr. Ali specializes in{" "}
        <Link href="/blog/treatments/neuropathy-pain/" rel="preload">
          <b> neuropathy treatment in Dallas</b>
        </Link>{" "}
        , offering therapies to improve nerve health and comfort.
      </>
    ),
  },
  {
    title: "Joint Pain",
    description: (
      <>
        Knee, shoulder and hip joint pain may arise from injury, arthritis, or
        overuse. We provide{" "}
        <Link href="/conditions-we-treat/joint-pain/" rel="preload">
          <b>joint pain relief in Dallas</b>
        </Link>{" "}
        through injections, regenerative medicine, and customized rehabilitation
        plans.
      </>
    ),
  },
  {
    title: "Sports Injuries",
    description: (
      <>
        From sprains to overuse injuries, athletes rely on our{" "}
        <Link href="/conditions-we-treat/sports-injury/" rel="preload">
          <b>Dallas sports injury treatments</b>
        </Link>{" "}
        to recover quickly and safely. Dr. K.Ali focuses on restoring strength,
        flexibility, and performance.
      </>
    ),
  },
];

const OurExpertise = () => {
  return (
    <div className="expertise-area pb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="section-title">
            <h2>Pain Conditions We Treat in Dallas</h2>
            <p className="mt-3">
              At Premier Pain Centers, Rao K. Ali, MD, a leading pain doctor in
              Dallas, offers advanced diagnosis and treatment for a wide range
              of pain conditions. Our goal is to help patients restore mobility,
              reduce discomfort, and improve quality of life through
              compassionate, personalized care.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="expertise-item">
              <div className="row">
                {expertiseData.map((item, index) => (
                  <div key={index} className="col-sm-4 col-lg-4">
                    <div className="expertise-inner">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
