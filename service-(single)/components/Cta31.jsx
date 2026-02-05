"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta31({ data }) {
  const heading = data?.cta_heading || "Start your evaluation today";
  const description = data?.cta_description || "No waiting. No guessing. Just answers and a plan that works.";
  const primaryButtonText = data?.cta_primary_button_text || "Book";
  const secondaryButtonText = data?.cta_secondary_button_text || "Call";
  const primaryButtonUrl = data?.cta_primary_button_url || "#";
  const secondaryButtonUrl = data?.cta_secondary_button_url || "#";
  const image = data?.cta_image || { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg", alt: "CTA image" };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
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
          src={image.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
          className="size-full object-cover"
          alt={image.alt || "CTA image"}
        />
      </div>
    </section>
  );
}
