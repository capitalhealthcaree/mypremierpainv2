import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="expertise-area pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/images/dallas-pain-clinic-why-choose-us.png"
                alt="About"
                className="img-fluid"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <h2>Benefits of Choosing Our Clinic</h2>
                <p>
                  Everyone needs to visit a clinic for primary care and
                  treatments. Dallas pain clinic is one of the top pain clinics
                  in Dallas. We are providing advanced and innovative medical
                  facilities in the{" "}
                  <Link href={`/`} rel="preload">
                    Dallas pain clinic
                  </Link>
                  . Dallas pain clinics provide emergency medical care, but
                  patients can make appointments and consultations! We provide
                  emergency healthcare, so the process is seamless and you'll
                  get help right away. Some patients can't afford
                  multi-specialty hospital care. Therefore, Dallas pain clinics
                  offer affordable primary care.{" "}
                  <Link href={`https://g.co/kgs/khGXvpN`} rel="preload">
                    Best pain Clinic in Dallas{" "}
                  </Link>
                  offers all the facilities to treat various illnesses.
                </p>
                <p>
                  Our doctors, nurses, physical therapists, and dietitians,
                  including the{" "}
                  <Link href={`/meet-our-team/william-moore-md/`} rel="preload">
                    best pain doctor in Dallas
                  </Link>
                  , have years of experience. Thus, the{" "}
                  <Link href={`https://g.co/kgs/JK4JC6y`} rel="preload">
                    Dallas pain clinic near me
                  </Link>{" "}
                  guarantees a quick recovery. Monitoring and supervision while
                  treatment helps control the condition. The facility offers
                  patient-specific consulting hours to track recovery.
                  Specialists treat and advise patients on nutrition, exercise,
                  and medicines. Even chronic patients receive preventive care
                  and it helps to improve disease control.
                </p>

                <p>
                  Our trained and compassionate staff combines cutting-edge
                  medical technology and evidence-based procedures to treat a
                  variety of ailments. We treat symptoms and long-term wellbeing
                  and prevention holistically. Our dedication to excellence
                  ensures the best service for routine checkups and specialist
                  treatments. Our convenient appointment scheduling and
                  integrated care make your health and well-being our first
                  focus;{" "}
                  <Link href={`/appointment/`} rel="preload">
                    book an appointment with our expert doctors in Dallas
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
