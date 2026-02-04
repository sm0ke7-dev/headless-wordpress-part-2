import React from "react";
import { Navbar8 } from "./components/Navbar8";
import { Header64 } from "./components/Header64";
import { Layout503 } from "./components/Layout503";
import { Team5 } from "./components/Team5";
import { Gallery18 } from "./components/Gallery18";
import { Contact19 } from "./components/Contact19";
import { Contact6 } from "./components/Contact6";
import { Footer9 } from "./components/Footer9";

export default function Page({ locationData }) {
  return (
    <div>
      <Navbar8 />
      <Header64 data={locationData} />
      <Layout503 data={locationData} />
      <Team5 data={locationData} />
      <Gallery18 data={locationData} />
      <Contact19 data={locationData} />
      <Contact6 data={locationData} />
      <Footer9 />
    </div>
  );
}
