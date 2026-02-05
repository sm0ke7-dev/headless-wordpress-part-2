import React from "react";
import { Navbar8 } from "../components/Navbar8";
import { Header64 } from "./components/Header64";
import { Layout19 } from "./components/Layout19";
import { Layout522 } from "./components/Layout522";
import { Team5 } from "./components/Team5";
import { Stats26 } from "./components/Stats26";
import { Testimonial22 } from "./components/Testimonial22";
import { Cta31 } from "./components/Cta31";
import { Footer9 } from "./components/Footer9";

export default function Page({ pageData, testimonials, teamMembers }) {
  return (
    <div>
      <Navbar8 />
      <Header64 data={pageData} />
      <Layout19 data={pageData} />
      <Layout522 data={pageData} />
      <Team5 teamMembers={teamMembers} data={pageData} />
      <Stats26 data={pageData} />
      <Testimonial22 testimonials={testimonials} data={pageData} />
      <Cta31 data={pageData} />
      <Footer9 />
    </div>
  );
}
