"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout520({ data }) {
  const eyebrow = data?.features_section_eyebrow || "Why we work";
  const heading = data?.features_section_heading || "Three things that matter";
  const description = data?.features_section_description || "Built on evidence. Delivered with clarity.";

  const defaultFeatures = [
    {
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Feature image" },
      heading: "Measurable progress from day one",
      description: "Track your strength, range, and function with real data.",
      link: "#"
    },
    {
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Feature image" },
      heading: "Rehab that fits your life",
      description: "Flexible scheduling for athletes, professionals, and anyone busy.",
      link: "#"
    },
    {
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Feature image" },
      heading: "Evidence-based methods",
      description: "Every treatment plan rests on research, not assumptions.",
      link: "#"
    }
  ];

  const acfFeatures = [data?.feature_1, data?.feature_2, data?.feature_3].filter(Boolean);
  const features = acfFeatures.length > 0 ? acfFeatures : defaultFeatures;

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
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="relative p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src={feature.image?.url || feature.background_image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  className="size-full object-cover"
                  alt={feature.image?.alt || feature.background_image?.alt || "Feature image"}
                />
              </div>
              <div className="relative z-10">
                <div className="mb-5 md:mb-6">
                  <img
                    src={feature.icon?.url || "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"}
                    className="size-12"
                    alt={feature.icon?.alt || "Icon"}
                  />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {feature.heading || feature.title}
                </h3>
                <p className="text-text-alternative">
                  {feature.description || feature.content}
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
