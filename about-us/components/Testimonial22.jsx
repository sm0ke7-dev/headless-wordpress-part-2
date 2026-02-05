"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22({ testimonials = [], data }) {
  // Fallback testimonials if no data from WordPress
  const defaultTestimonials = [
    {
      acf: {
        quote: "I went from barely walking to running again in eight weeks. They showed me exactly what was wrong and how to fix it.",
        name: "Marcus Chen",
        role: "Runner, San Jose",
        avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Marcus Chen" },
        logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" }
      }
    },
    {
      acf: {
        quote: "After surgery, I was terrified. Their plan made sense and I could see my progress every session. I'm back to work pain-free.",
        name: "Sarah Williams",
        role: "Office manager, Sacramento",
        avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Sarah Williams" },
        logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" }
      }
    },
    {
      acf: {
        quote: "No more guessing. They measured everything and adjusted my treatment when I improved. That's the kind of care I needed.",
        name: "James Rodriguez",
        role: "Athlete, Long Beach",
        avatar: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "James Rodriguez" },
        logo: { url: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Logo" }
      }
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const heading = data?.testimonials_section_heading || "Real results";
  const subheading = data?.testimonials_section_subheading || "What our patients say";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{subheading}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
              <div className="rb-5 mb-5 md:mb-6">
                {testimonial.acf?.logo?.url && (
                  <div className="mb-8 md:mb-10 lg:mb-12">
                    <img
                      src={testimonial.acf.logo.url}
                      alt={testimonial.acf.logo.alt || "Logo"}
                      className="max-h-12"
                    />
                  </div>
                )}
                <blockquote className="md:text-md">
                  "{testimonial.acf?.quote || testimonial.acf?.testimonial}"
                </blockquote>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  {testimonial.acf?.avatar?.url && (
                    <div>
                      <img
                        src={testimonial.acf.avatar.url}
                        alt={testimonial.acf.avatar.alt || "Testimonial avatar"}
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.acf?.name || testimonial.title?.rendered}</p>
                    <p>{testimonial.acf?.role || testimonial.acf?.position}</p>
                  </div>
                </div>
              </div>
              {testimonial.acf?.case_study_link && (
                <div className="mt-6 md:mt-8">
                  <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                    Read case study
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
