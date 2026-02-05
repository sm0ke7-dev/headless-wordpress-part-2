"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout503({ data }) {
  const eyebrow = data?.facility_eyebrow || "Facility";
  const heading = data?.facility_heading || "What sets us apart";
  const description = data?.facility_description || "Modern equipment, experienced clinicians, and a focus on measurable progress. We've built this clinic to move you forward.";
  const primaryButtonText = data?.facility_primary_button_text || "Learn";
  const secondaryButtonText = data?.facility_secondary_button_text || "→";

  const primaryButtonUrl = data?.facility_primary_button_url || "#";
  const secondaryButtonUrl = data?.facility_secondary_button_url || "#";

  const defaultTabs = [
    {
      value: "tab-one",
      trigger_text: "Equipment",
      eyebrow: "Equipment",
      heading: "Professional-grade tools for recovery",
      description: "Our facility features modern equipment for manual therapy, strength training, and movement assessment. Everything you need to rehabilitate properly and build lasting resilience.",
      primary_button_text: "Book",
      secondary_button_text: "→",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Equipment image" }
    },
    {
      value: "tab-two",
      trigger_text: "Expertise",
      eyebrow: "Expertise",
      heading: "Licensed therapists who know movement",
      description: "Our team holds advanced certifications in orthopedics, sports rehabilitation, and manual therapy. They stay current on research and understand how to adapt treatment to what your body needs.",
      primary_button_text: "Book",
      secondary_button_text: "→",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Expertise image" }
    },
    {
      value: "tab-three",
      trigger_text: "Hours",
      eyebrow: "Hours",
      heading: "Open when you need us",
      description: "We offer early morning, evening, and weekend appointments to fit your schedule. Book online or call to find a time that works for you.",
      primary_button_text: "Book",
      secondary_button_text: "→",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Hours image" }
    }
  ];

  const tabs = data?.facility_tabs && data.facility_tabs.length > 0 ? data.facility_tabs : defaultTabs;

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
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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
        </div>
        <Tabs defaultValue={tabs[0]?.value || "tab-one"} className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                {tab.trigger_text}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent
              key={index}
              value={tab.value}
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 border border-border-primary md:grid-cols-2 md:items-center">
                <div className="p-6 md:p-8 lg:p-12">
                  <p className="mb-3 font-semibold md:mb-4">{tab.eyebrow}</p>
                  <h2 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {tab.heading}
                  </h2>
                  <p>
                    {tab.description}
                  </p>
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    <Button asChild title={tab.primary_button_text} variant="secondary">
                      <a href={tab.primary_button_url || "#"}>{tab.primary_button_text}</a>
                    </Button>
                    <a href={tab.secondary_button_url || "#"}>
                      <Button
                        title={tab.secondary_button_text}
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        {tab.secondary_button_text}
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="aspect-square">
                  <img
                    src={tab.image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                    className="w-full object-cover"
                    alt={tab.image?.alt || `${tab.eyebrow} image`}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
