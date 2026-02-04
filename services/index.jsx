import React from "react";
import { Navbar8 } from "./components/Navbar8";
import { Header64 } from "./components/Header64";
import { Layout423 } from "./components/Layout423";
import { Layout525 } from "./components/Layout525";
import { Testimonial22 } from "./components/Testimonial22";
import { Cta31 } from "./components/Cta31";
import { Footer9 } from "./components/Footer9";

export default function Page({ pageData, services }) {
  return (
    <div>
      <Navbar8 />
      <Header64 data={pageData} />
      <Layout423 data={pageData} />
      <Layout525 data={pageData} services={services} />
      <Testimonial22 data={pageData} />
      <Cta31 data={pageData} />
      <Footer9 />
    </div>
  );
}
