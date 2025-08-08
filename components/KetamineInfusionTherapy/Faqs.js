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
          <div className="faq-content">
            <Accordion allowZeroExpanded>
              <AccordionItem uuid="1">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is Ketamine Infusion Therapy?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Ketamine is a safe, proven medication originally used in anesthesia, now widely recognized for its effectiveness in treating chronic pain and treatment-resistant depression. It works by “resetting” the brain and spinal cord pathways involved in pain, mood, and opioid tolerance, often when other treatments have failed.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="2">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What conditions do you treat with Ketamine Therapy?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                    <li>Treatment-Resistant Depression</li>
                    <li>Anxiety & Panic Disorders</li>
                    <li>PTSD (Post-Traumatic Stress Disorder)</li>
                    <li>Bipolar Depression</li>
                    <li>Suicidal Thoughts (non-emergent)</li>
                    <li>Chronic Pain</li>
                    <li>Neuropathic Pain (nerve pain)</li>
                    <li>Fibromyalgia</li>
                    <li>Complex Regional Pain Syndrome (CRPS)</li>
                    <li>Migraine & Severe Headaches</li>
                    <li>Phantom Limb Pain</li>
                    <li>Cancer-Related Pain</li>
                    <li>Opioid Tolerance</li>
                    <li>Opioid Dependence (non-active addiction)</li>
                    <li>Inadequate Relief from High-Dose Opioids</li>
                    <li>Opioid-Induced Hyperalgesia</li>
                    <li>Long-Term Side Effects</li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="3">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How does Ketamine help?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                    <li>Fast-acting relief, often within hours or days</li>
                    <li>Reduces or eliminates the need for opioids</li>
                    <li>Improves mood, function, and quality of life</li>
                    <li>Non-addictive, non-opioid-based treatment</li>
                    <li>Neuro-regenerative effects on the brain and spinal cord</li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="4">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why choose Premier Pain Centers?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                    <li>Board-Certified Physicians</li>
                    <li>Evidence-Based Protocols</li>
                    <li>Continuous Monitoring During Infusion</li>
                    <li>Calm, Private, Outpatient Environment</li>
                    <li>Personalized Treatment Plans for Pain & Mental Health</li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="5">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is your cash-pay pricing?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Initial Evaluation + First Infusion starts at $500. Follow-up infusions are based on individual protocol. Affordable infusion packages are available. No insurance is required.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
