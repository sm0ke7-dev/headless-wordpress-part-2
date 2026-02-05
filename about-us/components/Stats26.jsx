"use client";

import React from "react";

export function Stats26({ data }) {
  const heading = data?.stats_heading || "Outcomes that speak for themselves";
  const description = data?.stats_description || "We track what matters. Our patients return to their lives with measurable strength gains, reduced pain, and restored confidence in movement.";

  const defaultStats = [
    {
      stat: "2,400+",
      heading: "Patients treated successfully",
      description: "From acute injury to chronic pain management"
    },
    {
      stat: "6 weeks",
      heading: "Average time to measurable progress",
      description: "Most patients see improvement within first month"
    },
    {
      stat: "94%",
      heading: "Return to activity rate",
      description: "Patients achieve their functional goals"
    }
  ];

  const acfStats = [
    data?.stat_1,
    data?.stat_2,
    data?.stat_3,
  ].filter(Boolean);

  const stats = acfStats.length > 0 ? acfStats : defaultStats;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {heading}
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {stats.map((statItem, index) => (
            <div key={index} className="border border-border-primary p-8">
              <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
                {statItem.stat}
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                {statItem.heading}
              </h3>
              <p className="mt-2">{statItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
