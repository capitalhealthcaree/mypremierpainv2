import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const faqs = [
  {
    id: "a",
    question: "What is neuropathy?",
    answer: {
      paragraph:
        " Neuropathy, or peripheral neuropathy, happens when the nerves outside your brain and spinal cord are damaged. It often leads to numbness, pain, or weakness in your hands and feet. Some people also have issues with digestion, urination, or blood circulation.",
    },
  },
  {
    id: "b",
    question: "What causes neuropathy?",
    answer: {
      paragraph:
        " Common causes include diabetes, infections, autoimmune diseases (like lupus or rheumatoid arthritis), and injuries. Other risk factors are:",
      bullets: [
        "Inherited disorders (e.g., Charcot-Marie-Tooth disease)",
        "Tumors pressing on nerves",
        "Bone marrow disorders",
        "Kidney, liver, or thyroid issues",
        "Alcohol overuse, vitamin deficiencies, and exposure to toxins",
      ],
    },
  },
  {
    id: "c",
    question: "How is neuropathy treated?",
    answer: {
      paragraph:
        "At Premier Pain Centers, Dr. Ben Wolfington offers personalized treatment plans. Options may include:",
      bullets: [
        "Medications like pain relievers, anti-seizure drugs, or antidepressants",
        "Physical therapy for muscle weakness",
        "TENS therapy (mild electrical stimulation)",
        "Immunosuppressive treatments for autoimmune conditions",
        "Surgery, if tumors are pressing on nerves",
      ],
    },
  },
  {
    id: "d",
    question: "Can neuropathy be prevented?",
    answer: {
      paragraph:
        " Yes. Eat a balanced diet, stay active, avoid alcohol and toxins, and quit smoking. If you have conditions like diabetes or rheumatoid arthritis, regular checkups with your doctor are essential.To learn more or schedule an appointment with Dr. Ben Wolfington at Premier Pain Centers, call 469-562-4188 today.",
    },
  },
];

const FaqContent = () => {
  return (
    <div className="container pt-5">
      <div className="faq-content">
        <div className="section-title">
          <h2
            style={{
              color: "black",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion allowZeroExpanded preExpanded={["a"]}>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} uuid={faq.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>{faq.question}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{faq.answer.paragraph}</p>
                {faq.answer.bullets && (
                  <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                    {faq.answer.bullets.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqContent;
