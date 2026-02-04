"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact19({ data }) {
  const eyebrow = data?.contact_eyebrow || "Reach us";
  const heading = data?.contact_heading || "Get in touch";
  const description = data?.contact_description || "Questions about your condition or ready to start? We're here to help.";

  const emailHeading = data?.contact_email_heading || "Email";
  const emailDescription = data?.contact_email_description || "Send us a message and we'll respond within one business day";
  const email = data?.contact_email || "hello@relume.io";

  const phoneHeading = data?.contact_phone_heading || "Phone";
  const phoneDescription = data?.contact_phone_description || "Call to schedule or verify your insurance coverage";
  const phone = data?.contact_phone || "+1 (408) 555-0147";

  const officeHeading = data?.contact_office_heading || "Office";
  const officeDescription = data?.contact_office_description || "Monday to Friday 7am to 7pm, Saturday 8am to 2pm";
  const address = data?.contact_address || "1247 Meridian Ave, San Jose CA 95125";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">
            {description}
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              {emailHeading}
            </h3>
            <p className="mb-5 md:mb-6">
              {emailDescription}
            </p>
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              {phoneHeading}
            </h3>
            <p className="mb-5 md:mb-6">
              {phoneDescription}
            </p>
            <a className="underline" href={`tel:${phone.replace(/\s/g, '')}`}>
              {phone}
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              {officeHeading}
            </h3>
            <p className="mb-5 md:mb-6">
              {officeDescription}
            </p>
            <a className="underline" href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
