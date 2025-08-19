import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="expertise-area">
        <div className="container">
          <div className="row align-items-center">
            <h2>Treatment Approach</h2>
            <p>
              Dr. Rao Ali follows a patient-focused approach, taking the time to
              understand each patient’s symptoms, medical history, and goals. He
              develops customized treatment plans aimed at reducing pain,
              restoring mobility, and enhancing overall well-being.
            </p>
            <h2>Advanced Pain Management Techniques</h2>
            <p>
              Dr. Ali is skilled in a variety of procedures, including:
              <ul>
                <li>
                  <Link href={`/interventional-pain-management/`} rel="preload">
                    Interventional pain procedures in Dallas
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/blog/update/epidural-steroid-injections/`}
                    rel="preload"
                  >
                    Epidural steroid injections
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/treatments/occipital-nerve-block/`}
                    rel="preload"
                  >
                    Occipital Nerve Block
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/treatments/trigger-point-injections/`}
                    rel="preload"
                  >
                    Trigger Point Injections
                  </Link>
                </li>
                <li>
                  <Link href={`/talk-therapy-dallas/`} rel="preload">
                    Talk Therapy for depression
                  </Link>
                </li>
                <li>
                  <Link href={`/tms-therapy/`} rel="preload">
                    TMS therapy &amp; rehabilitation support
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/medication-management-in-dallas/`}
                    rel="preload"
                  >
                    Medication management
                  </Link>
                </li>
              </ul>
            </p>
            <h2>Professional Achievements</h2>
            <p>
              Dr. Ali has presented more than 20 posters and publications
              nationally and internationally. He has organized CME programs and
              trained physicians in workshops worldwide. He is a past president
              of the Richland County Medical Society and an active member of:
              <ul>
                <li>
                  American Society of Interventional Pain Physicians (ASIPP)
                </li>
                <li>North American Neuromodulation Society (NANS)</li>
                <li>Texas Pain Society</li>
              </ul>
            </p>
            <h2>Why Choose Dr. Ali as Your Pain Management Doctor in TX</h2>
            <ul>
              <li>
                <b>Expert Pain Management:</b> Dr. Rao Ali specializes in
                advanced pain relief techniques designed to target the root
                cause of discomfort. His expertise ensures effective and
                long-lasting relief for patients.
              </li>
              <li>
                <b>Personalized Treatment Plans:</b> Every patient receives a
                customized care plan that considers their unique medical history
                and lifestyle. This tailored approach maximizes effectiveness
                and speeds up recovery.
              </li>
              <li>
                <b>Minimally Invasive Procedures:</b> Dr. Rao Ali offers modern,
                minimally invasive treatments that reduce risks and shorten
                recovery times. These procedures help patients return to normal
                activities faster.
              </li>
              <li>
                <b>Cutting-Edge Technology:</b> Utilizing the latest medical
                advancements, Dr. Rao Ali provides state-of-the-art solutions
                for chronic and acute pain. Patients benefit from treatments
                proven to deliver lasting relief.
              </li>
              <li>
                <b>Compassionate Care:</b> With a patient-focused approach, Dr.
                Rao Ali ensures every individual feels heard, supported, and
                cared for. Comfort and trust are central to every step of
                treatment.
              </li>
              <li>
                <b>Proven Results:</b> Positive patient outcomes and reviews
                reflect Dr. Rao Ali’s success in treating a wide range of pain
                conditions. His track record demonstrates both skill and
                dedication.
              </li>
              <li>
                <b>Comprehensive Solutions:</b> From medication management to
                physical therapy and interventional procedures, patients receive
                complete care under one roof. This holistic approach addresses
                both symptoms and causes of pain.
              </li>
            </ul>

            <h2>Dr. Rao Ali Performed Procedures at Premier Pain Centers</h2>
            <ul>
              <li>Epidural Injections</li>
              <li>Facet Blocks</li>
              <li>Spinal Cord Stimulator Trials &amp; Implants</li>
              <li>Radiofrequency Ablation</li>
              <li>Joint Injections</li>
              <li>Minimally Invasive Spine Surgery</li>
              <li>Minimally Invasive Joint Surgery</li>
            </ul>
          </div>
          <div className="map-area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.0127327391965!2d-96.72465682393651!3d32.97706587373522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f0052f2127f%3A0x3c7ead0c32591544!2sRao%20K.%20Ali%20MD%20-%20Pain%20Physician%20in%20Dallas!5e0!3m2!1sen!2sus!4v1755617505554!5m2!1sen!2sus"
              height="550"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
