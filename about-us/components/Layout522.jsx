"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522({ data }) {
  const eyebrow = data?.principles_section_eyebrow || "Approach";
  const heading = data?.principles_section_heading || "Three principles that matter";
  const description = data?.principles_section_description || "Everything we do rests on these foundations.";

  const defaultPrinciples = [
    {
      eyebrow: "Evidence",
      heading: "We follow the science, not trends",
      description: "Current research guides every decision. We test, measure, and adjust based on what the data shows, not what sounds good.",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Evidence principle" },
      icon: null,
      primary_button_text: "Learn more",
      secondary_button_text: "Explore",
      featured: true
    },
    {
      eyebrow: "",
      heading: "You own your recovery",
      description: "We teach you to move better, not create dependency on visits.",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Recovery principle" },
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      button_text: "Explore",
      featured: false
    },
    {
      eyebrow: "",
      heading: "Numbers tell the real story",
      description: "Progress gets tracked, reported, and explained at every step.",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Progress principle" },
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      button_text: "Explore",
      featured: false
    }
  ];

  const principles = data?.principles && data.principles.length > 0 ? data.principles : defaultPrinciples;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {principles.map((principle, index) => (
            principle.featured ? (
              <div key={index} className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src={principle.image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                    className="size-full object-cover"
                    alt={principle.image?.alt || "Principle image"}
                  />
                </div>
                <div className="relative z-10">
                  {principle.eyebrow && (
                    <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                      {principle.eyebrow}
                    </p>
                  )}
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                    {principle.heading}
                  </h3>
                  <p className="text-text-alternative">
                    {principle.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {principle.primary_button_text && (
                      <Button variant="secondary-alt">{principle.primary_button_text}</Button>
                    )}
                    {principle.secondary_button_text && (
                      <Button
                        iconRight={<RxChevronRight />}
                        variant="link-alt"
                        size="link"
                      >
                        {principle.secondary_button_text}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src={principle.image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                    className="size-full object-cover"
                    alt={principle.image?.alt || "Principle image"}
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  {principle.icon && (
                    <div className="mb-3 md:mb-4">
                      <img
                        src={principle.icon.url}
                        className="size-12"
                        alt={principle.icon.alt || "Icon"}
                      />
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                    {principle.heading}
                  </h3>
                  <p className="text-text-alternative">
                    {principle.description}
                  </p>
                  {principle.button_text && (
                    <div className="mt-5 flex items-center md:mt-6">
                      <Button
                        iconRight={<RxChevronRight />}
                        variant="link-alt"
                        size="link"
                      >
                        {principle.button_text}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
