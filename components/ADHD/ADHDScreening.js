import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/ADHDScreening.png" alt="Symptoms" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>How does ADHD Screening Work?</h2>
                <p>
                  Medical professionals diagnose in phases. The screening
                  process incorporates recommendations from the American
                  Psychiatric Association's DSM-5-TR™.
                </p>
                ADHD testing services takes three steps:
                <ul className="ms-4">
                  <ul>
                    <li>Determine if ADHD symptoms hinder daily life.</li>
                    <li>
                      Rule out sleep disruptions, social issues, adjustment
                      disorders, and depression as reasons for the symptoms.
                    </li>
                    <li>
                      Find comorbidities such as learning disabilities, anxiety
                      disorders, intellectual disabilities, and mood disorders.
                    </li>
                  </ul>
                </ul>
                A typical ADHD diagnosis and evaluation includes:
                <ul className="ms-4">
                  <ul>
                    <li>
                      A medical, or neurophysiological testing for ADHD
                      assessment determines if you or your child has ADHD
                      symptoms, including hyperactivity, inattention, or
                      impulsivity.
                    </li>
                    <li>
                      Recording symptoms with rating scales and other methods
                      assures you or your child fulfils standards.
                    </li>
                    <li>
                      An interview asks about your child's home and school
                      behaviour.
                    </li>
                    <li>
                      Inattention or hyperactivity/impulsivity for children: six
                      or more symptoms in one or both categories over the last
                      six months.
                    </li>
                    <li>
                      At least five ADHD behaviours in one category (inattention
                      or hyperactivity/impulsivity) for six months for adults.
                    </li>
                    <li>
                      Two or more witnesses must identify symptomatic behaviour
                      in adults or children at home, school, or work.
                    </li>
                    <li>Debilitating conditions impair daily life.</li>
                    <li>Childhood symptoms usually begin before 12.</li>
                  </ul>
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
