import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <>
      <div className="spread-area py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spread-img">
              <img src="/images/tms-therapy-clinic-in-dallas.jpg" alt="Symptoms" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="container">
                <div className="faq-content">
                  <div className="section-title">
                    <h2>FAQS</h2>
                  </div>
                  <Accordion allowZeroExpanded>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What is TMS Therapy?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          TMS stands for transcranial magnetic stimulation. It
                          is used to treat depression by stimulating the brain
                          non-invasively using electromagnetic fields, similar
                          to those produced by an MRI machine. During TMS
                          Therapy, a magnetic field is administered in very
                          short pulses to the part of the brain that research
                          has demonstrated to be associated with depression. The
                          typical initial course of treatment is about 19-37
                          minutes daily over 4-6 weeks.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How does TMS Therapy work?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          The NeuroStar TMS Therapy system uses short pulses of
                          magnetic fields to stimulate the area of the brain
                          that is thought to function abnormally in patients
                          with depression. The magnetic field produces an
                          electric current in the brain that stimulates the
                          brain cells (neurons). This results in changes that
                          are thought to be beneficial in the treatment of
                          depression.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Is TMS Therapy like other alternative therapies
                            which use magnets to treat some illnesses?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No. TMS Therapy involves a unique method of using
                          pulsed magnetic fields for therapeutic benefit. The
                          intensity of the magnetic field is similar to that of
                          the magnetic fields used in magnetic resonance
                          imaging, or MRI. These techniques differ radically
                          from the popular use of low intensity, static magnetic
                          fields. These products deliver weak and undirected
                          static fields that are not capable of activating brain
                          cells.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem> */}

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Can I also take antidepressant(s) if I am receiving
                            NeuroStar TMS Therapy?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Yes. In clinical trials, NeuroStar TMS Therapy was
                          safely administered with and without other
                          antidepressant medications.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is TMS Therapy uncomfortable?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No, the most common side effect related to treatment
                          was scalp discomfort during treatment sessions. This
                          side effect was generally mild to moderate, and
                          occurred less frequently after the first week of
                          treatment. If necessary, you can treat this discomfort
                          with an over-the-counter analgesic. If these side
                          effects persist, your doctor can temporarily reduce
                          the strength of the magnetic field pulses being
                          administered in order to make treatment more
                          comfortable. Less than 5% of patients treated with
                          NeuroStar TMS Therapy discontinued treatment due to
                          side effects.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Does TMS therapy cause memory loss?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          TMS Therapy was systematically evaluated for its
                          effects on memory.
                        </p>
                        <p>
                          The clinical trials demonstrated that TMS therapy does
                          not result in adverse effects on memory or
                          concentration
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* <AccordionItem uuid="g">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Does TMS therapy hurt?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          The most common adverse event related to TMS therapy
                          was scalp pain or discomfort at the treatment area
                          during active treatments, which was transient and mild
                          to moderate in severity. The incidence of this side
                          effect declined markedly after the first week of
                          treatment.
                        </p>
                        <p>
                          Less than 5% of patients discontinued the study due to
                          adverse events.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem> */}

                    {/* <AccordionItem uuid="h">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Can NeuroStar TMS Therapy cause brain tumors?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No, NeuroStar TMS Therapy uses the same type and
                          strength of magnetic fields as MRIs (magnetic
                          resonance imaging), which have been used in tens of
                          millions of patients around the world and have not
                          been shown to cause tumors. The magnetic energy used
                          in a full course of TMS Therapy is a small fraction of
                          just one brain scan with an MRI.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem> */}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
