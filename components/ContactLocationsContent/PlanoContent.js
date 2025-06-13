import Link from "next/link";
const conditions = [
  "Back pain",
  "Arthritis",
  "Fibromyalgia",
  "Joint pain",
  "Muscle pain",
  "Depression",
  "Pinched Nerves",
  "Osteoarthritis and rheumatoid arthritis",
  "Neck Pain",
  "Herniated Disc",
  "Sciatica",
  "Hip Pain",
  "OCD Treatment",
  "Tinnitus",
  "Trauma",
  "Anxiety",
  "Occipital Neuropathy",
  "Car Accident Injury",
  "Shoulder Pain",
  "Sports Injury",
  "Spinal Stenosis",
];

const treatmentOptions = [
  "Physical therapy",
  "Foraminotomy",
  "Intrathecal Pump Implant",
  "IV Drug Infusions",
  "Kyphoplasty",
  "Laminotomy",
  "Laser Facet Ablation",
  "Lumbar Sympathetic Block",
  "Media Branch Block",
  "PRP",
  "Sacroiliac Joint Injection",
  "Stellate Ganglion Block",
  "Trigger Point Injections",
  "Vertebroplasty",
  "Topical shots",
  "Managing medication",
  "Nerve blocks and ablations stop pain signals.",
  "Ablation of nerves with radiofrequency waves to stop brain pain signals",
  "Massage",
  "Acupuncture",
  "TMS therapy in Dallas",
];

const injectionProcedures = [
  "Injections of epidural steroids",
  "Injections of facing joints",
  "Sacroiliac joints injected",
  "Lesioning by radiofrequency",
  "Neurostimulators",
  "Intrathecal drug pumps",
  "Individual nerve root injections",
  "Discograms",
  "Lumbar sympathetic blocks",
  "Racz method",
  "Stellate ganglion parts",
  "Vertebroplasties",
  "Lumbar decompression with minimal invasiveness",
];

export default function PlanoContent() {
  return (
    <div className="container pt-5">
      <p>
        Are you suffering from chronic pain? We understand your pain at the
        Premier Pain Centers. The right pain clinic affects your health,
        mobility, and quality of life. Premier Pain Centers' experienced team
        will schedule pain management reassessments after treatment to keep your
        pain under control. Our team of{" "}
        <Link href="/contact-locations/plano/" rel="preload">
          pain management in Plano
        </Link>{" "}
        can help with back, muscle, joint, spinal, arthritis, neck, and other
        painful conditions! Pain management uses multiple methods to find and
        treat a patient's pain. It aims to relieve chronic pain and improve
        quality of life.Pain management doctors know how to find and treat
        different kinds of pain. They make treatment plans for people with
        chronic pain that are specific to their physical and emotional needs.
      </p>
      <p>
        Specialists in pain management help people feel better, function better,
        and reduce pain. Medication, physical therapy, or a healthy diet may all
        be part of the multidisciplinary approach.
      </p>
      <h2>Pain Conditions Treated at Premier Pain Centers in Plano</h2>
      <p>
        Acute and chronic pain exist. Less than 3–6 months for acute pain. It
        usually results from soft tissue damage like a cut, wound, or sprained
        ankle. However, chronic pain lasts longer than 6 months. It usually has
        an underlying condition like arthritis and is less intense, but
        flare-ups are common. some common conditions treated by our centers:
      </p>
      <div className="container pb-4">
        <div className="row">
          {conditions.map((condition, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <div className="me-2">•</div>
                <div>{condition}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>
        If you are suffering from back pain and living in Plano, contact us to
        get the best back pain relief in plano.
      </p>

      <h2>Pain Management Treatments</h2>
      <p>
        You need a customized pain management plan because everyone experiences
        pain differently. Our{" "}
        <Link href="/meet-our-team/rao-k-ali/" rel="preload">
          pain physician in Plano
        </Link>{" "}
        can relieve lower back and joint pain, arthritis, headaches, nerve
        damage, cancer, and other conditions. The following are pain management
        solutions:
      </p>
      <div className="container pb-4">
        <div className="row">
          {treatmentOptions.map((condition, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <div className="me-2">•</div>
                <div>{condition}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2>Outpatient Surgery</h2>
      <p>
        <Link href="/meet-our-team/" rel="preload">
          Pain management doctors in Plano{" "}
        </Link>{" "}
        at the Premier Pain Centers perform the following surgeries:
      </p>
      <div className="container pb-4">
        <div className="row">
          {injectionProcedures.map((condition, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <div className="me-2">•</div>
                <div>{condition}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2>Why Choose Premier Pain Centers in Plano?</h2>
      <p>
        Premier Pain Centers is the best pain relief center in Plano, providing
        multidisciplinary and cost-effective healthcare for acute and chronic
        pain patients in a socially conscious and academically rigorous
        environment. The Center specializes in treating difficult cases where
        conservative therapy has failed.
      </p>
      <ul>
        <li>
          <b>Comprehensive Pain Management:</b> Our full-service clinic includes
          experienced doctors, behavioral medicine specialists, and more. We
          offer advanced pain treatments designed to improve patients' quality
          of life.
        </li>
        <li>
          <b>Personalized Treatment Approach:</b> Our board-certified
          specialists especially{" "}
          <Link href="/psychiatric-services-in-dallas-tx/" rel="preload">
            best psychiatrist in Dallas
          </Link>{" "}
          provide holistic pain relief through:
          <ul>
            <li>Minimally invasive procedures</li>
            <li>Physical therapy</li>{" "}
            <li>
              <Link href="/medication-management-in-dallas/" rel="preload">
                Medication management
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Premier Pain Centers also work with most major insurance companies to
        help lower patients' out-of-pocket costs. Our dedicated staff assists
        with coverage checks, paperwork, and maximizing insurance benefits.
        Through cutting-edge medical methods, compassionate care, and flexible
        payment options, we help patients regain mobility, comfort, and a better
        quality of life.
      </p>
      <h2>Book an Appointment at Pain Clinic in Plano</h2>
      <p>
        Want to relieve chronic pain in plano? Our pain management experts at
        7712 San Jacinto Place, Suite 300, Plano, TX 75024, can help. We create
        customized treatment plans to provide the best care using advanced
        medical techniques and holistic approaches. Don't let pain control
        you—start lasting relief today. We can help you live better by providing
        professional, caring care. Call us at 469-562-4188 to{" "}
        <Link href="/appointment/" rel="preload">
          book a pain consultation in Plano
        </Link>{" "}
        with us to start living a pain-free life. Premier Pain Centers
        appointments are the first step to pain relief and quality of life. Our
        expert at a{" "}
        <Link href="https://g.co/kgs/rxu9Xmd" rel="preload">
          pain clinic in plano
        </Link>{" "}
        makes treatment plans just for you based on your needs. We can assist
        you in managing your pain and achieving optimal well-being.
      </p>
    </div>
  );
}
