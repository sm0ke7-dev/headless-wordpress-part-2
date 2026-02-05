"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout525({ data }) {
  const eyebrow = data?.services_treatment_eyebrow || "Services";
  const heading = data?.services_treatment_heading || "What we treat";
  const description = data?.services_treatment_description || "Specialized care for your injury";

  const defaultServices = [
    {
      eyebrow: "Injury",
      heading: "Sports injury rehabilitation",
      description: "Sprains, strains, overuse injuries. We get athletes back to training with a plan that prevents re-injury.",
      primary_button_text: "Explore",
      secondary_button_text: "Learn",
      featured: true,
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Sports injury rehabilitation" }
    },
    {
      heading: "Post-operative recovery programs",
      description: "Surgery is the start, not the end. We guide you through each phase of healing with precision.",
      button_text: "Learn",
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Post-operative recovery" }
    },
    {
      heading: "Chronic pain management solutions",
      description: "Long-term pain doesn't need to be permanent. We build strategies that reduce pain and restore function.",
      button_text: "Learn",
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Chronic pain management" }
    },
    {
      heading: "Return-to-play programs",
      description: "Sport-specific training to get you back in the game safely and stronger than before.",
      primary_button_text: "Explore",
      secondary_button_text: "Learn",
      featured: true,
      icon: { url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg", alt: "Icon" },
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Return-to-play programs" }
    }
  ];

  const acfServices = [
    data?.service_1,
    data?.service_2,
    data?.service_3,
    data?.service_4,
  ].filter(Boolean);

  const services = acfServices.length > 0 ? acfServices : defaultServices;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {services[0] && (
            <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src={services[0].image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  className="size-full object-cover"
                  alt={services[0].image?.alt || "Service image"}
                />
              </div>
              <div className="relative z-10">
                {services[0].eyebrow && (
                  <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                    {services[0].eyebrow}
                  </p>
                )}
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                  {services[0].heading}
                </h2>
                <p className="text-text-alternative">
                  {services[0].description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {services[0].primary_button_text && (
                    <Button asChild title={services[0].primary_button_text} variant="secondary-alt">
                      <a href={services[0].link || "#"}>{services[0].primary_button_text}</a>
                    </Button>
                  )}
                  {services[0].secondary_button_text && (
                    <a href={services[0].link || "#"}>
                      <Button
                        title={services[0].secondary_button_text}
                        variant="link-alt"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        {services[0].secondary_button_text}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {services[1] && (
                <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50" />
                    <img
                      src={services[1].image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                      className="size-full object-cover"
                      alt={services[1].image?.alt || "Service image"}
                    />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col justify-between">
                    <div>
                      {services[1].icon && (
                        <div className="mb-3 md:mb-4">
                          <img
                            src={services[1].icon?.url || "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"}
                            className="size-12"
                            alt={services[1].icon?.alt || "Service icon"}
                          />
                        </div>
                      )}
                      <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                        {services[1].heading}
                      </h3>
                      <p className="text-text-alternative">
                        {services[1].description}
                      </p>
                    </div>
                    {services[1].button_text && (
                      <div className="mt-5 flex items-center md:mt-6">
                        <a href={services[1].link || "#"}>
                          <Button
                            title={services[1].button_text}
                            variant="link-alt"
                            size="link"
                            iconRight={<RxChevronRight />}
                          >
                            {services[1].button_text}
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {services[2] && (
                <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50" />
                    <img
                      src={services[2].image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                      className="size-full object-cover"
                      alt={services[2].image?.alt || "Service image"}
                    />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col justify-between">
                    <div>
                      {services[2].icon && (
                        <div className="mb-3 md:mb-4">
                          <img
                            src={services[2].icon?.url || "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"}
                            className="size-12"
                            alt={services[2].icon?.alt || "Service icon"}
                          />
                        </div>
                      )}
                      <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                        {services[2].heading}
                      </h3>
                      <p className="text-text-alternative">
                        {services[2].description}
                      </p>
                    </div>
                    {services[2].button_text && (
                      <div className="mt-5 flex items-center md:mt-6">
                        <a href={services[2].link || "#"}>
                          <Button
                            title={services[2].button_text}
                            variant="link-alt"
                            size="link"
                            iconRight={<RxChevronRight />}
                          >
                            {services[2].button_text}
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {services[3] && (
              <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src={services[3].image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                    className="size-full object-cover"
                    alt={services[3].image?.alt || "Service image"}
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    {services[3].icon && (
                      <div className="mb-3 md:mb-4">
                        <img
                          src={services[3].icon?.url || "https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"}
                          className="size-12"
                          alt={services[3].icon?.alt || "Service icon"}
                        />
                      </div>
                    )}
                    <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {services[3].heading}
                    </h3>
                    <p className="text-text-alternative">
                      {services[3].description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {services[3].primary_button_text && (
                      <Button asChild title={services[3].primary_button_text} variant="secondary-alt">
                        <a href={services[3].link || "#"}>{services[3].primary_button_text}</a>
                      </Button>
                    )}
                    {services[3].secondary_button_text && (
                      <a href={services[3].link || "#"}>
                        <Button
                          title={services[3].secondary_button_text}
                          variant="link-alt"
                          size="link"
                          iconRight={<RxChevronRight />}
                        >
                          {services[3].secondary_button_text}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
