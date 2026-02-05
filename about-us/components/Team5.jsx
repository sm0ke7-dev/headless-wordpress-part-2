"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team5({ teamMembers = [], data }) {
  // Fallback team members if no data from WordPress
  const defaultTeamMembers = [
    {
      acf: {
        name: "Dr. Michael Torres",
        role: "Physical therapist",
        bio: "DPT from UC Davis. Specializes in sports injuries and post-op recovery. Twelve years clinical experience.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Dr. Michael Torres" },
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      acf: {
        name: "Jennifer Park",
        role: "Physical therapist",
        bio: "Licensed PT with focus on chronic pain and movement dysfunction. Certified in manual therapy and functional assessment.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Jennifer Park" },
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      acf: {
        name: "David Okafor",
        role: "Physical therapist",
        bio: "Specializes in athletic rehabilitation and return-to-sport protocols. Works with competitive athletes across multiple sports.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "David Okafor" },
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      acf: {
        name: "Lisa Hernandez",
        role: "Physical therapist",
        bio: "Expert in post-operative care and functional restoration. Trained in advanced assessment and treatment planning.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Lisa Hernandez" },
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      acf: {
        name: "Robert Kim",
        role: "Physical therapist",
        bio: "Focuses on occupational rehabilitation and work-related injuries. Certified in ergonomic assessment and workplace solutions.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Robert Kim" },
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      acf: {
        name: "Amanda Scott",
        role: "Clinical director",
        bio: "Leads our clinical team and oversees treatment protocols. Ensures every patient receives evidence-based, measurable care.",
        photo: { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Amanda Scott" },
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;
  const eyebrow = data?.team_section_eyebrow || "Expertise";
  const heading = data?.team_section_heading || "Our clinicians";
  const description = data?.team_section_description || "Licensed specialists trained in evidence-based rehabilitation.";
  const joinHeading = data?.team_join_heading || "Join us";
  const joinDescription = data?.team_join_description || "We're building a team that values clarity and results.";
  const joinButton = data?.team_join_button || "Open positions";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {displayTeamMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
                <img
                  src={member.acf?.photo?.url || member.acf?.image?.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  alt={member.acf?.photo?.alt || member.acf?.name || "Team member"}
                  className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  {member.acf?.name || member.title?.rendered}
                </h5>
                <h6 className="md:text-md">{member.acf?.role || member.acf?.position}</h6>
              </div>
              <p>
                {member.acf?.bio || member.acf?.description}
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-center">
                {member.acf?.linkedin && (
                  <a href={member.acf.linkedin}>
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                )}
                {member.acf?.twitter && (
                  <a href={member.acf.twitter}>
                    <FaXTwitter className="size-6 p-0.5" />
                  </a>
                )}
                {member.acf?.dribbble && (
                  <a href={member.acf.dribbble}>
                    <BiLogoDribbble className="size-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {joinHeading}
          </h4>
          <p className="md:text-md">
            {joinDescription}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button title={joinButton} variant="secondary">
              {joinButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
