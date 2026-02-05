"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
  const handleMouseEnter = (index) => () => {
    setHoveredFeatureIdx(index);
  };
  const handleMouseLeave = () => {
    setHoveredFeatureIdx(null);
  };
  const startAnimation = (index) => {
    return hoveredFeatureIdx === index ? "visible" : "hidden";
  };
  return {
    handleMouseEnter,
    handleMouseLeave,
    startAnimation,
  };
};

export function Layout423({ data }) {
  const eyebrow = data?.services_features_eyebrow || "Assessment";
  const heading = data?.services_features_heading || "We evaluate what's wrong";
  const description = data?.services_features_description || "The first step matters most";

  const defaultFeatures = [
    {
      eyebrow: "Evaluation",
      heading: "Personalized evaluations that find the real problem",
      mobile_description: "No guessing. We assess movement, strength, and pain patterns to understand exactly what's limiting you.",
      hover_description: "No guessing. We assess movement, strength, and pain patterns to understand exactly what's limiting you.",
      button_text: "Learn",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Evaluation image" }
    },
    {
      eyebrow: "Treatment",
      heading: "Evidence-based treatment plans",
      mobile_description: "Custom protocols designed for your specific condition, backed by current research and clinical outcomes.",
      hover_description: "Custom protocols designed for your specific condition, backed by current research and clinical outcomes.",
      button_text: "Explore",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Treatment image" }
    },
    {
      eyebrow: "Recovery",
      heading: "Long-term recovery strategies",
      mobile_description: "We teach you how to maintain progress and prevent re-injury so you stay active independently.",
      hover_description: "We teach you how to maintain progress and prevent re-injury so you stay active independently.",
      button_text: "Discover",
      image: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Recovery image" }
    }
  ];

  const acfFeatures = [
    data?.feature_1,
    data?.feature_2,
    data?.feature_3,
  ].filter(Boolean);

  const features = acfFeatures.length > 0 ? acfFeatures : defaultFeatures;

  const hoverState = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          {features.map((feature, index) => (
            <a
              key={index}
              href="#"
              className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseOver={hoverState.handleMouseEnter(index)}
              onMouseLeave={hoverState.handleMouseLeave}
            >
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src={feature.image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  alt={feature.image?.alt || `${feature.eyebrow} image`}
                  className="size-full object-cover"
                />
              </div>
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10">
                  <p className="mb-2 font-semibold text-text-alternative">
                    {feature.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {feature.heading}
                  </h3>
                  <div className="lg:hidden">
                    <p className="mt-5 text-text-alternative md:mt-6">
                      {feature.mobile_description}
                    </p>
                    <div className="mt-6 md:mt-8">
                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        className="text-text-alternative"
                      >
                        {feature.button_text}
                      </Button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  <motion.div
                    className="z-10 hidden lg:block lg:w-[340px]"
                    variants={{
                      hidden: { opacity: 0, height: 0, y: 50 },
                      visible: { opacity: 1, height: "auto", y: 0 },
                    }}
                    initial="hidden"
                    animate={hoverState.startAnimation(index)}
                    exit="hidden"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mt-5 text-text-alternative md:mt-6">
                      {feature.hover_description}
                    </p>
                    <div className="mt-6 md:mt-8">
                      <Button
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        className="text-text-alternative"
                      >
                        {feature.button_text}
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
