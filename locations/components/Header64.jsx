"use client";

import React from "react";

export function Header64({ data }) {
  const heading = data?.locations_hero_heading || "Our locations";
  const description = data?.locations_hero_description || "We serve patients across California with the same standard of care at every clinic.";

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
