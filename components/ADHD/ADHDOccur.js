import Link from "next/link";
const About = () => {
  return (
    <>
      <div className="symptoms-area pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className=" about-right">
                <h2>When does an ADHD Evaluation Occur?</h2>
                <p>
                  When a parent, teacher, or paediatrician sees ADHD symptoms in
                  a kid that affect their home and school performance, an ADHD
                  examination is done. ADHD is commonly diagnosed in kids first.
                  The American Academy of Pediatrics (AAP) advises doctors to
                  periodically survey parents, teachers, and other caregivers on
                  their child's behaviour at home and school.
                </p>
                <p>
                  If you detect behavioural changes in your kid or adult ADHD
                  symptoms, your doctor may recommend an online ADHD assessment.
                  There's no ADHD cure. ADHD can cause learning and behavioural
                  issues. Therefore, early examination and diagnosis can enhance
                  the quality of life.
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
                <img src="/images/ADHDOccour.png" alt="Symptoms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
