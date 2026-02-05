"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22({ data }) {
  const heading = data?.testimonials_heading || "Real results";
  const description = data?.testimonials_description || "Athletes and busy professionals share their wins";

  const defaultTestimonials = [
    {
      logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" },
      quote: "I stopped limping after three weeks. No guessing, just steady progress.",
      avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Avatar" },
      name: "Marcus Chen",
      position: "Runner, tech executive",
      button_text: "Read case study"
    },
    {
      logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" },
      quote: "My shoulder works again. They showed me exactly what was wrong and fixed it.",
      avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Avatar" },
      name: "Jennifer Walsh",
      position: "Post-op patient, consultant",
      button_text: "Read case study"
    },
    {
      logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" },
      quote: "Back pain gone. I'm lifting weights and sleeping through the night now.",
      avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Avatar" },
      name: "David Morales",
      position: "Athlete, construction manager",
      button_text: "Read case study"
    }
  ];

  const acfTestimonials = [
    data?.testimonial_1,
    data?.testimonial_2,
    data?.testimonial_3,
  ].filter(Boolean);

  const testimonials = acfTestimonials.length > 0 ? acfTestimonials : defaultTestimonials;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">
            {description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src={testimonial.logo?.url || "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"}
                    alt={testimonial.logo?.alt || "Company logo"}
                    className="max-h-12"
                  />
                </div>
                <blockquote className="md:text-md">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div>
                    <img
                      src={testimonial.avatar?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                      alt={testimonial.avatar?.alt || `${testimonial.name} avatar`}
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
              {testimonial.button_text && (
                <div className="mt-6 md:mt-8">
                  <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                    {testimonial.button_text}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
