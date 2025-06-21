import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How to contact with riders emergency ?",
    answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A]). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A]). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A]). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur.",
  },
  {
    question: "New update fixed all bug and issues",
    answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A]). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      <h4 className="section-label">FREQUENT QUESTION</h4>
      <h2 className="section-title">Do you have any question</h2>

      <div className="accordion">
        {faqData.map((item, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <span className="icon">@</span>
              <span className="question">{item.question}</span>
            </div>
            {activeIndex === index && item.answer && (
              <div className="accordion-body">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
