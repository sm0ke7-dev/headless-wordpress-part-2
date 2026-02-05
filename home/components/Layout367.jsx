"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout367({ data }) {
  const eyebrow = data?.process_section_eyebrow || "Process";
  const heading = data?.process_section_heading || "What to expect";
  const description = data?.process_section_description || "We start with facts, not assumptions about your pain.";

  const defaultSteps = [
    {
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon" },
      eyebrow: "",
      heading: "Initial evaluation",
      description: "We assess your movement, strength, and what limits you most.",
      button_text: "Schedule"
    },
    {
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon" },
      eyebrow: "",
      heading: "Custom treatment plan",
      description: "A tailored program built around your goals, schedule, and how your body responds.",
      button_text: "Schedule"
    },
    {
      icon: null,
      eyebrow: "Progress",
      heading: "Track results and adjust as you improve",
      description: "You measure your gains in strength, range, and function. We adjust your plan based on what the data shows. No guessing, no endless cycles.",
      button_text: "Continue",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg", alt: "Progress tracking" }
    }
  ];

  const acfSteps = [data?.process_step_1, data?.process_step_2, data?.process_step_3].filter(Boolean);
  const steps = acfSteps.length > 0 ? acfSteps : defaultSteps;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {steps[0] && (
              <div className="flex flex-col border border-border-primary">
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                  <div>
                    {steps[0].icon?.url && (
                      <div className="mb-5 md:mb-6">
                        <img
                          src={steps[0].icon.url}
                          className="size-12"
                          alt={steps[0].icon.alt || "Icon"}
                        />
                      </div>
                    )}
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      {steps[0].heading || steps[0].title}
                    </h3>
                    <p>
                      {steps[0].description || steps[0].content}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                      <Button variant="secondary">{steps[0].button_text || "Schedule"}</Button>
                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Learn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {steps[1] && (
              <div className="flex flex-col border border-border-primary">
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                  <div>
                    {steps[1].icon?.url && (
                      <div className="mb-5 md:mb-6">
                        <img
                          src={steps[1].icon.url}
                          className="size-12"
                          alt={steps[1].icon.alt || "Icon"}
                        />
                      </div>
                    )}
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      {steps[1].heading || steps[1].title}
                    </h3>
                    <p>
                      {steps[1].description || steps[1].content}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                      <Button variant="secondary">{steps[1].button_text || "Schedule"}</Button>
                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Learn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {steps[2] && (
              <div className="flex flex-col border border-border-primary md:col-span-2 md:row-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                  <div>
                    {steps[2].eyebrow && (
                      <p className="mb-2 text-sm font-semibold">{steps[2].eyebrow}</p>
                    )}
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      {steps[2].heading || steps[2].title}
                    </h3>
                    <p>
                      {steps[2].description || steps[2].content}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title={steps[2].button_text || "Continue"} variant="secondary">
                      {steps[2].button_text || "Continue"}
                    </Button>
                    <Button
                      title="Learn"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
                {steps[2].image?.url && (
                  <div>
                    <img
                      src={steps[2].image.url}
                      alt={steps[2].image.alt || "Process step image"}
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
