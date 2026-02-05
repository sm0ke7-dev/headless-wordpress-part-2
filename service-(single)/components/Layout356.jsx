"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout356({ data }) {
  const defaultSteps = [
    {
      number: "01",
      nav_title: "Assessment",
      eyebrow: "Step one",
      heading: "We find what's actually wrong",
      description: "Your first session is thorough. We test range of motion, strength, and how you move. This tells us the real source of your pain, not just where it hurts.",
      primary_button_text: "Details",
      secondary_button_text: "More",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg", alt: "Assessment image" }
    },
    {
      number: "02",
      nav_title: "Treatment",
      eyebrow: "Step two",
      heading: "Custom treatment that adapts",
      description: "Based on your assessment, we design exercises and manual therapy specific to your condition. As you improve, we adjust the plan to match your progress and recovery goals.",
      primary_button_text: "Details",
      secondary_button_text: "More",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg", alt: "Treatment image" }
    },
    {
      number: "03",
      nav_title: "Independence",
      eyebrow: "Step three",
      heading: "You move on your own",
      description: "The goal isn't endless treatment. We teach you how to maintain your recovery and prevent re-injury. You leave with the tools to manage your body independently.",
      primary_button_text: "Details",
      secondary_button_text: "More",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg", alt: "Independence image" }
    }
  ];

  const steps = data?.service_process_steps && data.service_process_steps.length > 0 ? data.service_process_steps : defaultSteps;

  return (
    <section id="relume">
      <div className="sticky top-0">
        {steps.map((step, index) => {
          const stickyClasses = index === 0
            ? "lg:sticky lg:pb-0 top-0 lg:mb-32"
            : index === 1
            ? "lg:sticky lg:pb-0 lg:top-16 lg:-mt-16 lg:mb-16"
            : "lg:sticky lg:pb-0 lg:top-32 lg:mb-16";

          return (
            <Fragment key={index}>
              <div className="relative -top-32 h-0" />
              <div className={`relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 ${stickyClasses}`}>
                <div className="px-[5%]">
                  <div className="container">
                    <a href="#" className="flex h-16 w-full items-center underline">
                      <span className="mr-5 font-semibold md:mr-6 md:text-md">
                        {step.number}
                      </span>
                      <h3 className="font-semibold md:text-md">{step.nav_title}</h3>
                    </a>
                    <div className="py-8 md:py-10 lg:py-12">
                      <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                        <div>
                          <p className="mb-3 font-semibold md:mb-4">{step.eyebrow}</p>
                          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            {step.heading}
                          </h2>
                          <p className="md:text-md">
                            {step.description}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Button asChild title={step.primary_button_text} variant="secondary">
                              <a href={step.primary_button_url || "#"}>{step.primary_button_text}</a>
                            </Button>
                            <a href={step.secondary_button_url || "#"}>
                              <Button
                                title={step.secondary_button_text}
                                variant="link"
                                size="link"
                                iconRight={<RxChevronRight />}
                              >
                                {step.secondary_button_text}
                              </Button>
                            </a>
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={step.image?.url || `https://d22po4pjz3o32e.cloudfront.net/placeholder-image-${index + 1}.svg`}
                            className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                            alt={step.image?.alt || `${step.nav_title} image`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
