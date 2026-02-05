"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header64({ data }) {
  const heading = data?.locations_hero_heading || "Our locations";
  const description = data?.locations_hero_description || "We serve patients across California with the same standard of care at every clinic.";
  const primaryButtonText = data?.locations_hero_primary_button_text || "Book";
  const primaryButtonUrl = data?.locations_hero_primary_button_url || "#";
  const secondaryButtonText = data?.locations_hero_secondary_button_text || "Call";
  const secondaryButtonUrl = data?.locations_hero_secondary_button_url || "#";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
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
    </section>
  );
}
