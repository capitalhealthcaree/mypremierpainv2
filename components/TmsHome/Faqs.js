import Link from "next/link";
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
          <div className="section-title">
            <h2>FAQS</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="container">
                <div className="faq-content">
                  <Accordion allowZeroExpanded>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What is TMS Therapy?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          TMS stimulates nerve cells noninvasively with
                          electromagnetic pulses. Some term TMS repetitive
                          transcranial magnetic stimulation (rTMS) because it
                          involves electrical impulses. The terms are generally
                          interchangeable. TMS therapies centers offer mental
                          health services in Dallas.Conditions TMS may help:
                        </p>
                        <ul>
                          <li>Depression</li>
                          <li>Anxiety from OCD</li>
                          <li>PTSD</li>
                          <li>
                            Parkinson'sParkinson's, MS, or stroke-related motor
                            dysfunction
                          </li>
                        </ul>
                        <p>
                          FDA-approved TMS treats depression. It helps those who
                          don't respond to antidepressants and psychotherapy.
                          There is also evidence that TMS may assist with
                          anxiety and Parkinson's disease.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>How does TMS Work?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          <Link
                            href="/meet-our-team/dr-pollard-psychiatrist-dallas/"
                            rel="preload"
                          >
                            Board-Certified Psychiatrist in Dallas
                          </Link>{" "}
                          performs outpatient TMS therapy. This allows medical
                          clinics to perform it. No overnight stay is needed if
                          done in a hospital. Remove magnet-sensitive jewellery
                          before the operation.What to expect during TMS:
                        </p>
                        <ul>
                          <li>
                            Wear earplugs to reduce magnetic impulse clicking,
                            per your technician. Comfortable chairs will be
                            provided. You won't need general anaesthesia and
                            will be awake during treatment.
                          </li>
                          <li>
                            For your first session, your technician will measure
                            your head to implant the magnetic coil. Other
                            measurements will be taken to customize TMS
                            settings.
                          </li>
                          <li>
                            Your expert will insert the coil above your brain's
                            front. Treatment begins next.
                          </li>
                          <li>
                            A clicking sound indicates magnetic impulse release.
                            A tapping or knocking sensation will occur beneath
                            the magnetic coil.
                          </li>
                          <li>
                            Treatment takes 30–60 minutes. After the surgery,
                            you can drive home and resume normal activities.
                          </li>
                        </ul>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Does Insurance Reimburse Magstim TMS Treatments?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Healthcare insurance frequently takes time to cover
                          novel treatments like Magstim TMS. TMS Therapy is
                          helpful in treating depression, in many centers
                          offering TMS Treatment Covered by Insurance in Dallas.
                          Thus, many commercial and Medicare plans now cover it.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Does TMS Resemble ECT?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Both processes are pretty different. Both are
                          effective depression treatments, although safety and
                          tolerability differ. In TMS Therapy, patients sit in a
                          chair and are awake and alert during the 19-37 minute
                          procedure without anaesthesia. Patients can
                          self-transport to therapy.
                        </p>
                        <p>
                          In clinical trials with over 10,000 Magstim TMS
                          Therapy treatments, no seizures occurred. These
                          studies also found no memory impairment with TMS
                          Therapy.
                        </p>
                        <p>
                          In contrast, "shock therapy," or ECT, purposely
                          triggers a seizure. ECT patients need general
                          anaesthesia and muscle relaxants. ECT patients are
                          observed for minutes or hours following treatment
                          since recovery is sluggish. ECT can cause short-term
                          confusion and memory loss, and some patients may have
                          permanent memory disturbances. ECT side effects
                          require extensive carer support.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            What are Magstim TMS Therapy Side Effects?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Clinical investigations have shown Magstim TMS Therapy
                          to be safe and well-tolerated. The most common side
                          effect of over 10,000 active therapies in clinical
                          studies was scalp soreness. This mild-to-moderate side
                          effect decreased after the first week of medication.
                          Fewer than 5% of Magstim TMS Therapy patients quit
                          owing to side effects.
                        </p>
                        <p>
                          Over 10,000 Magstim TMS treatments were seizure-free
                          in clinical trials. However, treatment may cause a
                          seizure. This risk is comparable to oral
                          antidepressants. Magstim TMS Therapy works; however,
                          not all patients benefit. Monitoring patients for
                          deteriorating symptoms, suicidal behaviour, and
                          strange behaviour is crucial. Families and carers
                          should also monitor patients and tell their doctor if
                          symptoms worsen.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="faq-content">
                  <Accordion allowZeroExpanded>
                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Does TMS Therapy Impair Memory?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No, Magstim TMS Therapy was extensively tested for
                          memory effects. Clinical investigations showed that
                          Magstim TMS Therapy does not impair memory or focus.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="g">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is TMS Therapy Comfortable?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No, scalp soreness during treatment was the most
                          common side effect. After the first week of treatment,
                          this adverse effect was mild to moderate and less
                          common. This pain can be treated with an
                          over-the-counter painkiller. If these adverse effects
                          persist, your doctor may temporarily reduce magnetic
                          field pulse strength to make therapy more comfortable.
                          Fewer than 5% of Magstim TMS Therapy patients quit
                          owing to side effects.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="h">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What Magstim TMS Therapy Involves?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          TMS Therapy is usually given five times a week for
                          19–37 minutes, depending on the psychiatrist for TMS
                          Therapy in Dallas protocol, for 4-6 weeks. Clinical
                          judgment determines additional therapies.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="i">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Can Individuals Intolerant to Antidepressants Use
                            TMS Therapy?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Magstim does not circulate in the blood, so it does
                          not cause weight gain, sexual dysfunction, nausea, dry
                          mouth, sedation, etc. Clinical trials reported mild to
                          moderate headache and scalp discomfort as the most
                          common side effects, decreasing after the first week.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="j">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>
                            Is TMS Therapy Like Other Therapies Using Magnets to
                            Treat Illnesses?
                          </span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          No. TMS Therapy uses pulsed magnetic fields for
                          therapeutic purposes. The magnetic field strength
                          resembles MRI magnetic fields. Popular low-intensity,
                          static magnetic fields are very different from these
                          methods. These items produce weak, undirected static
                          fields that cannot activate brain cells.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
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
