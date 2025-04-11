import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/condition-talk-therapy.png" alt="Symptoms" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>What Conditions Might Help Talk Therapy?</h2>
                <p>
                  Therapy can help anyone, from those seeking clarity and
                  direction to those with mental health issues. However,
                  psychotherapy may help with the following conditions:
                </p>
                <ul>
                  <li>Clinical or situational depression</li>
                  <li>Social or generalized anxiety disorder</li>
                  <li>Bipolar disorder</li>
                  <li>
                    {" "}
                    <Link
                      href="/depression-treatment-in-dallas-tx/"
                      rel="preload"
                    >
                      Talk therapy for depression
                    </Link>
                  </li>
                  <li>Eating disorders</li>
                  <li>Phobias</li>
                  <li>Schizophrenia</li>
                  <li>Post-traumatic stress</li>
                  <li>
                    <Link href="/ptsd-treatment-in-dallas-tx/" rel="preload">
                      Talk therapy for PTSD
                    </Link>
                  </li>
                  <li>Disorders such as OCD and adjustment disorders</li>
                  <li>
                    Not all conditions that may benefit from talk therapy are
                    included here. Talk therapy can help with anything that
                    disrupts daily living.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
