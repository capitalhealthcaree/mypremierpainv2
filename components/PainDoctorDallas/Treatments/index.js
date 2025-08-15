import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="expertise-area pb-4">
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
            <p>
              Dr. Ali stands out for his patient-focused approach, combining
              advanced interventional techniques with a deep understanding of
              each individual’s pain journey. He prioritizes accurate diagnosis,
              customized treatment plans, and minimally invasive procedures to
              help patients regain mobility and improve quality of life.
            </p>
            <p>
              Patients appreciate Dr. Ali compassionate care, clear
              communication, and dedication to achieving the best possible
              outcomes. His approachable manner and expertise help patients feel
              comfortable and confident in their treatment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
