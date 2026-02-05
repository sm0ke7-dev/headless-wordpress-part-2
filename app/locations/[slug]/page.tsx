import { getLocation, getLocations, getFeaturedImageUrl } from "../../../lib/wp";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "../../../lib/json-ld";
import LocationSinglePage from "../../../location-(single)";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const locations = await getLocations();

  return locations.map((location: any) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locationData = await getLocation(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: locationData?.acf?.seo_title || `${locationData?.title?.rendered} | Physical Therapy Clinic`,
    description: locationData?.acf?.seo_description || `Visit our ${locationData?.title?.rendered} physical therapy clinic. Modern facility with experienced clinicians.`,
    alternates: {
      canonical: `${baseUrl}/locations/${params.slug}`,
    },
    openGraph: {
      title: locationData?.acf?.seo_title || `${locationData?.title?.rendered} | Physical Therapy Clinic`,
      description: locationData?.acf?.seo_description || `Visit our ${locationData?.title?.rendered} physical therapy clinic. Modern facility with experienced clinicians.`,
      images: locationData?.acf?.seo_image?.url ? [{ url: locationData.acf.seo_image.url }] : [],
      type: "website",
      url: `${baseUrl}/locations/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: locationData?.acf?.seo_title || `${locationData?.title?.rendered} | Physical Therapy Clinic`,
      description: locationData?.acf?.seo_description || `Visit our ${locationData?.title?.rendered} physical therapy clinic. Modern facility with experienced clinicians.`,
      images: locationData?.acf?.seo_image?.url ? [locationData.acf.seo_image.url] : [],
    },
  };
}

export default async function LocationSingle({ params }: { params: { slug: string } }) {
  const locationData = await getLocation(params.slug);

  const localBusinessSchema = generateLocalBusinessSchema({
    title: locationData?.title?.rendered,
    description: locationData?.acf?.location_description,
    phone: locationData?.acf?.contact_phone,
    email: locationData?.acf?.contact_email,
    street_address: locationData?.acf?.street_address,
    city: locationData?.acf?.city,
    state: locationData?.acf?.state,
    zip: locationData?.acf?.zip,
    latitude: locationData?.acf?.latitude,
    longitude: locationData?.acf?.longitude,
    hours: locationData?.acf?.hours,
    rating: locationData?.acf?.rating
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: locationData?.title?.rendered || "Location", url: `/locations/${params.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationSinglePage
        locationData={locationData?.acf}
        bodyContent={locationData?.content?.rendered ?? null}
        featuredImageUrl={getFeaturedImageUrl(locationData)}
      />
    </>
  );
}
