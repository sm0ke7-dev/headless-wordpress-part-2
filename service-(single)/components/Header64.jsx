"use client";

import React from "react";

export function Header64({ data }) {
  const heading = data?.service_hero_heading || data?.title || "Pain relief works";
  const description = data?.service_hero_description || "When treatment targets the real problem, not just the symptom. Let's find yours.";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">
          {description}
        </p>
      </div>
    </section>
  );
}
