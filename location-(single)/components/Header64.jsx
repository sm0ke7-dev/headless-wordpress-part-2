"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header64({ data, featuredImageUrl }) {
  const heading = data?.location_hero_heading || data?.title || "We're here for you";
  const description = data?.location_hero_description || "Expert care and real results at your local Physio Pain Center clinic";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {featuredImageUrl && (
          <div className="mx-auto mb-8 md:mb-12 max-w-3xl">
            <img src={featuredImageUrl} className="w-full object-cover" alt={heading} />
          </div>
        )}
        <div className="mx-auto max-w-lg text-center">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <p className="md:text-md">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Book">Book</Button>
            <Button title="Call" variant="secondary">Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
