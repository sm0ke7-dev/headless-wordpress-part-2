"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta31({ data }) {
  const heading = data?.cta_heading || "Ready to move without pain?";
  const description = data?.cta_description || "Book your evaluation today. We'll assess what's wrong and show you exactly how to fix it.";
  const primaryButtonText = data?.cta_primary_button_text || "Book an evaluation";
  const primaryButtonUrl = data?.cta_primary_button_url || "#";
  const secondaryButtonText = data?.cta_secondary_button_text || "Call now";
  const secondaryButtonUrl = data?.cta_secondary_button_url || "#";
  const ctaImage = data?.cta_image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";
  const ctaImageAlt = data?.cta_image?.alt || "CTA image";

  return (
    <section id="relume" className="bg-brand-primary px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button asChild title={primaryButtonText}>
              <a href={primaryButtonUrl}>{primaryButtonText}</a>
            </Button>
            <Button asChild title={secondaryButtonText} variant="secondary">
              <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
            </Button>
          </div>
        </div>
        <img
          src={ctaImage}
          className="size-full object-cover"
          alt={ctaImageAlt}
        />
      </div>
    </section>
  );
}
