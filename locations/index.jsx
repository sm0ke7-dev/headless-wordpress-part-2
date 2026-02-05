import React from "react";
import { Navbar8 } from "../components/Navbar8";
import { Header64 } from "./components/Header64";
import { Faq4 } from "./components/Faq4";
import { Cta31 } from "./components/Cta31";
import { Footer9 } from "../components/Footer9";

export default function Page({ pageData, locations, globalSettings }) {
  return (
    <div>
      <Navbar8 />
      <Header64 data={pageData} locations={locations} />
      <Faq4 data={pageData} />
      <Cta31 data={pageData} />
      <Footer9 data={globalSettings} />
    </div>
  );
}
