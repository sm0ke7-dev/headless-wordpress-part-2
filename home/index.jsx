"use client";

import React from "react";
import { Navbar8 } from "./components/Navbar8";
import { Header84 } from "./components/Header84";
import { Layout520 } from "./components/Layout520";
import { Layout367 } from "./components/Layout367";
import { Layout423 } from "./components/Layout423";
import { Testimonial22 } from "./components/Testimonial22";
import { Team5 } from "./components/Team5";
import { Cta31 } from "./components/Cta31";
import { Footer9 } from "./components/Footer9";

export default function Page({ pageData, testimonials, teamMembers }) {
  return (
    <div>
      <Navbar8 />
      <Header84 data={pageData?.acf} />
      <Layout520 data={pageData?.acf} />
      <Layout367 data={pageData?.acf} />
      <Layout423 data={pageData?.acf} />
      <Testimonial22 testimonials={testimonials} />
      <Team5 teamMembers={teamMembers} />
      <Cta31 data={pageData?.acf} />
      <Footer9 />
    </div>
  );
}
