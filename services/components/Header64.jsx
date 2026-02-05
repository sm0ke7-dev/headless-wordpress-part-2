"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header64({ data }) {
  const heading = data?.services_hero_heading || "Our services";
  const description = data?.services_hero_description || "Targeted relief built on evidence. Results you can track from day one.";

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
          <Button title="Book">Book</Button>
          <Button title="Call" variant="secondary">Call</Button>
        </div>
      </div>
    </section>
  );
}
