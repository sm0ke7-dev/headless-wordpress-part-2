"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header84({ data, featuredImageUrl, bodyContent }) {
  const primaryButtonText = data?.hero_primary_button_text || "Book an Evaluation";
  const secondaryButtonText = data?.hero_secondary_button_text || "Call Now";
  const heroImage = featuredImageUrl || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
  const heroImageAlt = "Hero image";

  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            {bodyContent ? (
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: bodyContent }} />
            ) : (
              <>
                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                  Rehab that works. Results you can measure.
                </h1>
                <p className="md:text-md">
                  We treat pain with precision. No guessing, no endless rest. Just clear methods that get you moving again.
                </p>
              </>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title={primaryButtonText} variant="primary">
                {primaryButtonText}
              </Button>
              <Button title={secondaryButtonText} variant="secondary">
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={heroImage}
              className="w-full object-cover"
              alt={heroImageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
