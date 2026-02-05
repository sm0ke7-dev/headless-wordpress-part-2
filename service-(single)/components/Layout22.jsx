"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22({ data }) {
  const icon = data?.service_approach_icon || { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Icon" };
  const heading = data?.service_approach_heading || "Treatment built on what actually works";
  const description = data?.service_approach_description || "We measure everything. Range of motion, strength, function. You'll know exactly where you stand and where you're headed. No vague promises, just clear progress.";
  const primaryButtonText = data?.service_approach_primary_button_text || "Learn";
  const secondaryButtonText = data?.service_approach_secondary_button_text || "More";
  const primaryButtonUrl = data?.service_approach_primary_button_url || "#";
  const secondaryButtonUrl = data?.service_approach_secondary_button_url || "#";
  const image = data?.service_approach_image || { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Service approach image" };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src={icon.url || "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"}
                className="size-20"
                alt={icon.alt || "Icon"}
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild title={primaryButtonText} variant="secondary">
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>
              <a href={secondaryButtonUrl}>
                <Button
                  title={secondaryButtonText}
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  {secondaryButtonText}
                </Button>
              </a>
            </div>
          </div>
          <div>
            <img
              src={image.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
              className="w-full object-cover"
              alt={image.alt || "Service approach image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
