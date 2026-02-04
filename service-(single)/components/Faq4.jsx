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
  const description = data?.faq_description || "Common questions about how treatment works and what to expect.";

  const defaultFaqItems = [
    {
      question: "How long is each session?",
      answer: "Most sessions run 45 to 60 minutes. The first evaluation takes longer so we can do a complete assessment. We'll tell you what to expect before you arrive."
    },
    {
      question: "Does insurance cover this?",
      answer: "Most plans do. We verify your coverage before your first visit so there are no surprises. Call us or use our online verification tool to check your benefits."
    },
    {
      question: "How many sessions will I need?",
      answer: "It depends on your injury and how your body responds. We give you an honest estimate after the first session. Some patients see real progress in four to six weeks. Others need longer."
    },
    {
      question: "Can I come while working?",
      answer: "Yes. We have early morning, evening, and weekend appointments at all locations. Schedule what fits your life, not the other way around."
    },
    {
      question: "What if I'm post-op?",
      answer: "We work with post-op patients all the time. Bring your surgical notes and clearance from your doctor. We'll build a safe plan that respects your healing timeline."
    }
  ];

  const faqItems = data?.faq_items && data.faq_items.length > 0 ? data.faq_items : defaultFaqItems;

  const footerHeading = data?.faq_footer_heading || "More questions?";
  const footerDescription = data?.faq_footer_description || "Reach out to our team directly.";
  const footerButtonText = data?.faq_footer_button_text || "Contact";

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
          {faqItems.map((item, index) => (
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
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {item.answer}
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
