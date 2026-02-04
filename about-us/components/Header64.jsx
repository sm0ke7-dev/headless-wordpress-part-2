"use client";

import React from "react";

export function Header64({ data }) {
  const heading = data?.about_hero_heading || "Rehab that works";
  const description = data?.about_hero_description || "We treat busy adults, athletes, and post-op patients who want measurable progress.";

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
