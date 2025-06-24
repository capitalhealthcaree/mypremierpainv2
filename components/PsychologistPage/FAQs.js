import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

// FAQ Data
const faqs = [
  {
    id: "a",
    question: "Why am I being asked to do a psychological evaluation?",
    answer:
      "Prior to certain surgeries it is required by insurances to perform a psychological assessment. The goal is to ensure the patient understands the prescribed surgery risks and benefits as well as uncover any barriers that would prevent a successful surgery and recovery. Having a surgery is an important decision and we want to help you navigate the decision. We know that there are many things that led up to needing surgery so there is a need to discuss those and ensure you are prepared for what is to come.",
  },
  {
    id: "b",
    question: "Will my insurance pay for this?",
    answer:
      "Typically, insurances will pay for the psychological assessments. Each plan and situation is different. PsyClear will seek authorization prior to performing the evaluation. PsyClear will then bill the insurance company for the services rendered. The portion of the charges that insurance does not pay may be the responsibility of the patient. Your insurance plan may also have a deductible and % copay.",
  },
  {
    id: "c",
    question:
      "I work during business hours during the week. Are there evening or weekend times available?",
    answer:
      "Yes, PsyClear works with your schedule and has availability during certain evening hours and some weekends. Availability will vary. In certain situations where you live far from the location certain insurances will allow a phone consultation.",
  },
  {
    id: "d",
    question: "How long will this take?",
    answer:
      "Most evaluations from start to finish will take 1 hour. This includes the pre-assessment tests and a clinical interview.",
  },
  {
    id: "e",
    question: "Is this a one-time occurrence?",
    answer:
      "Yes, this is typically a one-time evaluation. In situations where the psychologist does not recommend proceeding with surgery until certain issues can be resolved, it may be necessary to complete another evaluation in the future.",
  },
];

const FaqContent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="faq-content">
            <h2>Frequently Asked Questions</h2>

            <Accordion allowZeroExpanded preExpanded={["a"]}>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} uuid={faq.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{faq.question}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{faq.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
