"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq4({ data }) {
  const heading = data?.faq_heading || "FAQs";
  const description = data?.faq_description || "Answers to common questions about visiting our clinics";

  const defaultFaqs = [
    {
      question: "Do you accept insurance?",
      answer: "Yes. We work with most major insurance plans and can verify your coverage before your first visit. Call us or use our online verification tool to confirm your benefits."
    },
    {
      question: "What should I bring?",
      answer: "Bring your insurance card, photo ID, and any relevant medical records or imaging. If you're a new patient, arrive 10 minutes early to complete intake forms."
    },
    {
      question: "Is parking available?",
      answer: "All three locations have dedicated patient parking. San Jose and Long Beach offer free lot parking. Sacramento has street parking and a nearby garage."
    },
    {
      question: "How do I schedule?",
      answer: "Book online through our website, call your nearest clinic, or request an appointment through our contact page. We typically have openings within 3-5 business days."
    },
    {
      question: "What are your hours?",
      answer: "All locations are open Monday through Friday, 7 AM to 6 PM. Select Saturday hours are available at San Jose and Long Beach. Check your specific location page for details."
    }
  ];

  const faqs = data?.faqs && data.faqs.length > 0 ? data.faqs : defaultFaqs;

  const footerHeading = data?.faq_footer_heading || "More questions?";
  const footerDescription = data?.faq_footer_description || "Reach out anytime. We're here to help.";
  const footerButtonText = data?.faq_footer_button_text || "Contact us";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">
            {description}
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Button title={footerButtonText} variant="secondary">
              {footerButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
