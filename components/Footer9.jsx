"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer9({ data }) {
  const formState = useForm();

  // Logo
  const logo = data?.footer_logo || {
    url: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image"
  };

  // Newsletter
  const newsletterHeading = data?.footer_newsletter_heading || "Get rehab insights and recovery tips delivered monthly.";
  const newsletterDisclaimer = data?.footer_newsletter_disclaimer || "We respect your privacy and only send what matters.";

  // Assemble service links
  const serviceLinks = [
    data?.footer_service_link_1,
    data?.footer_service_link_2,
    data?.footer_service_link_3,
    data?.footer_service_link_4,
    data?.footer_service_link_5,
  ].filter(Boolean);

  const defaultServiceLinks = [
    { label: "Physical therapy", url: "#" },
    { label: "Sports medicine", url: "#" },
    { label: "Post-op rehab", url: "#" },
    { label: "Pain management", url: "#" },
    { label: "Locations", url: "#" },
  ];

  const services = serviceLinks.length > 0 ? serviceLinks : defaultServiceLinks;

  // Assemble location links
  const locationLinks = [
    data?.footer_location_link_1,
    data?.footer_location_link_2,
    data?.footer_location_link_3,
    data?.footer_location_link_4,
    data?.footer_location_link_5,
  ].filter(Boolean);

  const defaultLocationLinks = [
    { label: "San Jose", url: "#" },
    { label: "Sacramento", url: "#" },
    { label: "Long Beach", url: "#" },
    { label: "Contact us", url: "#" },
    { label: "About us", url: "#" },
  ];

  const locations = locationLinks.length > 0 ? locationLinks : defaultLocationLinks;

  // Social media URLs
  const socialFacebook = data?.social_facebook_url || "#";
  const socialInstagram = data?.social_instagram_url || "#";
  const socialTwitter = data?.social_twitter_url || "#";
  const socialLinkedin = data?.social_linkedin_url || "#";
  const socialYoutube = data?.social_youtube_url || "#";

  // Legal links
  const legalLinks = [
    data?.footer_legal_link_1,
    data?.footer_legal_link_2,
    data?.footer_legal_link_3,
  ].filter(Boolean);

  const defaultLegalLinks = [
    { label: "Terms of Service", url: "#" },
    { label: "Cookies Settings", url: "#" },
    { label: "Privacy Policy", url: "#" },
  ];

  const legal = legalLinks.length > 0 ? legalLinks : defaultLegalLinks;

  // Copyright
  const copyrightText = data?.footer_copyright_text || "Physio Physical Therapy. All rights reserved.";

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 border border-border-primary p-8 md:gap-y-16 md:p-12 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <img
                src={logo.url}
                alt={logo.alt || "Logo image"}
                className="inline-block"
              />
            </a>
            <p className="mb-5 md:mb-6">
              {newsletterHeading}
            </p>
            <div className="max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button
                  title="Subscribe"
                  variant="secondary"
                  size="sm"
                  className="items-center justify-center"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs">
                {newsletterDisclaimer}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Services</h2>
              <ul>
                {services.map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <a href={link.url} className="flex items-center gap-3">
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Locations</h2>
              <ul>
                {locations.map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <a href={link.url} className="flex items-center gap-3">
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Follow us</h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a href={socialFacebook} className="flex items-center gap-3">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href={socialInstagram} className="flex items-center gap-3">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href={socialTwitter} className="flex items-center gap-3">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href={socialLinkedin} className="flex items-center gap-3">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href={socialYoutube} className="flex items-center gap-3">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">© {new Date().getFullYear()} {copyrightText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {legal.map((link, index) => (
              <li key={index} className="underline">
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
