import Link from "next/link";
const treatedConditions = [
  "Back Pain",
  "Joint Pain",
  "Headaches",
  "Hip Pain",
  "Leg Pain",
  "Shoulder Pain",
  "Sports Injury",
  "Neck Pain",
  "Knee Pain",
  "Car Accident Injury",
];

const chronicPain = [
  "Diabetes and cancer",
  "Fibromyalgia",
  "Problems with circulation",
  "Painful back",
  "Headaches",
];

const painManagementTreatments = [
  "Celiac Plexus Block",
  "Cooled Radiofrequency",
  "Discectomy",
  "DRG Stimulation",
  "Foraminotomy",
  "Intrathecal Pump Implant",
  "IV Drug Infusions",
  "Kyphoplasty",
  "Laminotomy Mesquite",
  "Laser Facet Ablation",
  "Lumbar Sympathetic Block",
  "Media Branch Block",
  "Nerve Blocks",
  "PRP",
  "Root Blocks",
  "Sacroiliac Joint Injection",
  "Spinal Cord Stimulator",
  "Stellate Ganglion Block",
  "Trigger Point Injections",
  "Vertebroplasty",
  "TMS therapy in Dallas",
];

export default function MesquiteContent() {
  return (
    <div className="container pt-5">
      <p>
        Are you looking for the best back pain treatment in Mesquite? Chronic
        pain intensity and frequency vary. Chronic pain is likely if you
        experience consistent pain for six months. The primary causes of chronic
        pain are:
      </p>
      <div className="container pb-4">
        <div className="row">
          {treatedConditions.map((condition, index) => (
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
        Pain specialists work with patients to diagnose and coordinate an
        individualized treatment program to get you back to your daily routine.
        Our{" "}
        <Link href="/meet-our-team/" rel="preload">
          pain management doctors in Mesquite TX
        </Link>{" "}
        use a multifaceted, diagnosis-specific approach to treat all kinds of
        pain. These pain specialists use minimally invasive interventional
        procedures, hospital-based services, and medication management when
        needed. Chronic pain can cause physical and mental distress, especially
        when there is no known cause or treatment. However, our pain management
        specialist can relieve pain.
      </p>
      <h2>We Treat All Types of Pain in Mesquite</h2>
      <p>
        All people have felt pain, but it's different. Some pain is temporary;
        others are permanent. Following are the pain conditions:
      </p>
      <h3>Acute Pain</h3>
      <p>
        Minutes or months can cure acute pain. Surgery, broken bones, cuts, and
        childbirth often cause it. Opioids, ice packs, heat packs, and physical
        therapy can treat acute pain.
      </p>
      <h3>Chronic Pain</h3>
      <p>
        Chronic pain lasts over six months and is mild to severe daily. Often
        caused by health conditions like:
      </p>
      <div className="container pb-4">
        <div className="row">
          {chronicPain.map((condition, index) => (
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
        Chronic pain can lower the quality of life without treatment. Depression
        or anxiety may result. ​Pain can be eased with antidepressants, opioids,
        and our{" "}
        <Link href="/psychiatric-services-in-dallas-tx/" rel="preload">
          psychiatric services in Dallas
        </Link>
        .
      </p>
      <h3>Neuropathic Pain</h3>
      <p>
        Damage to nerves leads to neuropathic pain. Pain can be sharp, stabbing,
        burning, or shooting. Feeling touch, cold, or hot might be difficult.
      </p>
      <p>
        Cancer, alcohol, stroke, amputation, chemotherapy, radiation, and
        diabetes can all cause nerve pain. Sometimes called a significant kind
        of pain, nerve pain is like radicular pain. Our neuropathic pain clinic
        in Mesquite can help you to treat all types of nerve pain in the best
        possible ways.
      </p>
      <h3>Nociceptive Pain</h3>
      <p>
        Damaged tissue causes nociceptive pain. Sharp, sudden, or throbbing
        pain. This discomfort results from exterior injuries such as collisions
        with objects or blows. Nociceptive pain affects bones, joints, muscles,
        tendons, and skin. Physical therapy, over-the-counter medications,
        antidepressants, and painkillers can all aid.
      </p>
      <h2>Different Pain Management Treatments</h2>
      <p>
        Are you looking for a neck pain relief clinic in Mesquite? Pain
        treatment can be accomplished with physical therapy, heat therapy, and
        acupuncture. The nature, extent, medical condition, and personal choice
        of the pain will all affect the plans to address it.
      </p>
      <p>
        Physical therapy Mesquite exercises help to reduce discomfort and
        increase mobility. Therapies can help with back, neck, shoulder, and
        knee discomfort, whether it is short-term or long-lasting. To reduce
        discomfort and inflammation, physical therapists could use stretching
        and massaging. If you are suffering from shoulder pain, our{" "}
        <Link href="/meet-our-team/rao-k-ali/" rel="preload">
          shoulder pain specialist in Mesquite
        </Link>{" "}
        by using advanced treatments such as the RICE method.
      </p>
      <p>
        Muscles, bones, and injury-induced pain are all treated using heat
        therapy. It reduces inflammation and relieves muscular stress. It can
        also help to relieve arthritis and fibromyalgia-related rigidity by
        improving blood circulation.
      </p>
      <p>
        Traditional Chinese medicine uses acupuncture to relieve discomfort.
        Putting needles into certain body parts relaxes and releases energy.
        Among its benefits are relief from lower back pain, neck discomfort,
        migraines, and depression.Alternative methods of handling pain:
      </p>
      <div className="container pb-4">
        <div className="row">
          {painManagementTreatments.map((condition, index) => (
            <div key={index} className="col-6 col-md-6 col-lg-4">
              <div className="d-flex align-items-center">
                <div className="me-2">•</div>
                <div>{condition}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2>Why Do You Need Premier Pain Centers in Mesquite?</h2>
      <p>
        Premier Pain Centers is the{" "}
        <Link href="https://g.co/kgs/kYSwXTP" rel="preload">
          best pain clinic in Mesquite
        </Link>
        . Pain, either acute or chronic, can affect your ability to live, walk,
        and work. Using custom treatments that reach the source of your pain and
        provide you with long-term relief, our pain specialists have much
        experience.
      </p>
      <p>
        We distinguish ourselves by means of our comprehensive, patient-centered
        attitude. We design treatment plans for everyone since every person is
        different. Our physicians use minimally invasive techniques,
        regenerative medicine, and physical therapy for joint pain management
        Mesquite, neck, back, nerve, and sports injuries that do not require
        surgery or medication.
      </p>
      <p>
        We believe in informing our patients and treating them kindly at Premier
        Pain Centers. We hear your concerns and discuss your treatment
        possibilities, letting you decide on your health. Our{" "}
        <Link href="/contact-locations/mesquite/" rel="preload">
          pain management clinic in Mesquite
        </Link>
        , deals with many insurance policies and provides several payment
        choices to make therapy affordable. This is the right place to stop in
        pain by scheduling an appointment right now!
      </p>
      <h2>Make an Appointment</h2>
      <p>
        Book a pain consultation in Mesquite Premier Pain Centers so you can get
        long-term relief from acute or chronic pain. Our specialists perform
        minimal incisions to address pain in the neck, back, joints, nerves, and
        other regions. We create treatment programs to assist you in getting
        your quality of life and mobility back. One can schedule an appointment
        by phone at our office or by means of our easy-to-use portal. Our
        cordial employees will review your insurance and guarantee the process
        runs freely.{" "}
        <Link href="/appointment/" rel="preload">
          Schedule an appointment with a pain specialist
        </Link>{" "}
        today at 469-562-4188 to take the first step towards a pain free life!
      </p>
    </div>
  );
}
