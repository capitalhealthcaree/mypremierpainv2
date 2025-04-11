import Link from "next/link";
const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>What is Talk Therapy?</h2>
                <p>
                  Talk therapy is how mental health professionals connect with
                  patients. Talk therapy helps detect emotional issues. Premier
                  Pain Centers are the trusted Dallas talk therapy and
                  counselling centers. The centers offer customized therapy for
                  anxiety, depression, OCD, and pain management by registered
                  professionals. Creating a friendly workplace promotes
                  emotional wellbeing and helps people live better, more
                  balanced lives.
                </p>
                <p>
                  Talk therapy for mental health may provide a secure space to
                  discuss daily concerns, medical issues, interpersonal
                  challenges, sorrow and loss, or trauma. Complex issues may
                  lead to mental health diagnoses like sadness or anxiety for
                  others. Online talk therapy services can usually last an hour,
                  sometimes 50 minutes. Your therapist's treatment plan and
                  symptom severity determine how often and long you attend
                  therapy.
                </p>
                <p>
                  You may first attend weekly therapy. Though it may seem like a
                  lot, weekly sessions allow you to get to know your therapist
                  and adjust to the process. As you progress and build coping
                  techniques, meetings may become bimonthly.
                </p>

                <div className="about-item">
                  <Link href="/appointment/" rel="preload">
                    Schedule An Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/what-talk-therapy.png" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
