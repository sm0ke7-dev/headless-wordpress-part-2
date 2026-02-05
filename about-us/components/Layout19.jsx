"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19({ data }) {
  const eyebrow = data?.about_story_eyebrow || "Our story";
  const heading = data?.about_story_heading || "Built on what actually works";
  const description = data?.about_story_description || "Physio Pain Center exists because too many people accept pain as permanent. We don't. Our clinicians combine evidence-based practice with real accountability, tracking every improvement so you know exactly where you stand.";

  const defaultBulletPoints = [
    { text: "Evidence-based treatment protocols" },
    { text: "Measurable progress tracking" },
    { text: "Licensed clinicians with specialized expertise" }
  ];

  const acfPoints = [
    data?.about_story_point_1,
    data?.about_story_point_2,
    data?.about_story_point_3,
  ].filter(Boolean).map(text => ({ text }));

  const bulletPoints = acfPoints.length > 0 ? acfPoints : defaultBulletPoints;

  const primaryButtonText = data?.about_story_primary_button_text || "Learn more";
  const secondaryButtonText = data?.about_story_secondary_button_text || "Visit";
  const storyImage = data?.about_story_image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";
  const storyImageAlt = data?.about_story_image?.alt || "About us image";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              {description}
            </p>
            {bulletPoints.length > 0 && (
              <ul className="my-4 list-disc pl-5">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="my-1 self-start pl-2">
                    <p>{point.text || point.content}</p>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title={primaryButtonText} variant="secondary">
                {primaryButtonText}
              </Button>
              <Button
                title={secondaryButtonText}
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div>
            <img
              src={storyImage}
              className="w-full object-cover"
              alt={storyImageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
