import React from "react";
import { Navbar8 } from "../components/Navbar8";
import { Header64 } from "./components/Header64";
import { Layout22 } from "./components/Layout22";
import { Layout423 } from "./components/Layout423";
import { Layout356 } from "./components/Layout356";
import { Testimonial22 } from "./components/Testimonial22";
import { Cta31 } from "./components/Cta31";
import { Faq4 } from "./components/Faq4";
import { Footer9 } from "./components/Footer9";

export default function Page({ serviceData, bodyContent, featuredImageUrl }) {
  return (
    <div>
      <Navbar8 />
      <Header64 data={serviceData} featuredImageUrl={featuredImageUrl} />
      {bodyContent && (
        <section className="px-[5%] py-12 md:py-16">
          <div className="wp-content container max-w-3xl" dangerouslySetInnerHTML={{ __html: bodyContent }} />
        </section>
      )}
      <Layout22 data={serviceData} />
      <Layout423 data={serviceData} />
      <Layout356 data={serviceData} />
      <Testimonial22 data={serviceData} />
      <Cta31 data={serviceData} />
      <Faq4 data={serviceData} />
      <Footer9 />
    </div>
  );
}
