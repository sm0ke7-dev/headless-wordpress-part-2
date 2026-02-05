import { getPage, getLocations, getGlobalSettings } from "../../lib/wp";
import { generateBreadcrumbSchema } from "../../lib/json-ld";
import LocationsPage from "../../locations";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("locations");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: (pageData?.acf?.seo_title as string) || "Our Locations | Physical Therapy Clinics",
    description: (pageData?.acf?.seo_description as string) || "Find a physical therapy clinic near you. Modern facilities with experienced clinicians ready to help you recover.",
    alternates: {
      canonical: `${baseUrl}/locations`,
    },
    openGraph: {
      title: (pageData?.acf?.seo_title as string) || "Our Locations | Physical Therapy Clinics",
      description: (pageData?.acf?.seo_description as string) || "Find a physical therapy clinic near you. Modern facilities with experienced clinicians ready to help you recover.",
      images: (pageData?.acf?.seo_image as { url: string })?.url ? [{ url: (pageData.acf.seo_image as { url: string }).url }] : [],
      type: "website",
      url: `${baseUrl}/locations`,
    },
    twitter: {
      card: "summary_large_image",
      title: (pageData?.acf?.seo_title as string) || "Our Locations | Physical Therapy Clinics",
      description: (pageData?.acf?.seo_description as string) || "Find a physical therapy clinic near you. Modern facilities with experienced clinicians ready to help you recover.",
      images: (pageData?.acf?.seo_image as { url: string })?.url ? [(pageData.acf.seo_image as { url: string }).url] : [],
    },
  };
}

export default async function Locations() {
  const [pageData, locations, globalSettings] = await Promise.all([
    getPage("locations"),
    getLocations(),
    getGlobalSettings(),
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationsPage
        pageData={pageData?.acf}
        locations={locations}
        globalSettings={globalSettings}
      />
    </>
  );
}
