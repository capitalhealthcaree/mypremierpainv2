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
                <img
                  src="http://res.cloudinary.com/dngmflrpx/image/upload/v1734988962/ghtmq6hva8ykostixeml.jpg"
                  alt="Symptoms"
                />
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
                          <span>How does TMS work?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          While performing TMS treatment, a secure, localized
                          magnetic pulse is exposed to the head. This triggers
                          small electrical signals in the cerebral cortex and
                          stimulates the nerve cells.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Can TMS be used to treat anxiety?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          As there have been some studies carried out on TMS
                          therapy for anxiety, there has been no prominent
                          research in recent times to declare TMS as a treatment
                          for anxiety.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is TMS right for you?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          You might undergo the TMS therapy treatment if you
                          experience severe depression that is unresponsive to
                          antidepressant medicines. Before you search for tms
                          therapy near me while planning your treatment, you
                          should be examined by a TMS psychiatrist.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is TMS for Me?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Consider TMS therapy if you have a diagnosis of major
                          depressive disorder. Traditional depression treatments
                          fail. People usually fail 2-4 drug trials before
                          initiating TMS. You may be dissatisfied with your
                          pharmaceutical results, unable to tolerate side
                          effects, or have a disease that prevents you from
                          taking depression medications. Depression and anxiety
                          disrupt your life.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="e">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>What does TMS Feel Like?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Everyone experiences it differently, but many patients
                          typically express the following: Tapping on the head.
                          There is mild scalp and facial muscular tightness near
                          the treatment area. By the second and third days, many
                          of the sensations from your initial TMS session will
                          disappear or be mild. Many patients soon adjust to
                          TMS, so the bad feelings disappear. It may feel
                          unusual, but TMS is not unpleasant and should be easy
                          to handle. TMS should not cause pain, and because of
                          its progressive administration, patients should not
                          feel any discomfort.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="f">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>Is TMS Covered by Insurance?</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Insurance companies usually cover only medically
                          required operations. Many insurance companies cover
                          transcranial magnetic stimulation (TMS) treatments for
                          depression because they are medically required. Before
                          arranging TMS sessions, check with your benefits
                          administrator, because insurance companies may have
                          coverage limits.
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
