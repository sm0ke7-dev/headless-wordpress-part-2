import { getPage, getServices } from "../../lib/wp";
import { generateBreadcrumbSchema } from "../../lib/json-ld";
import ServicesPage from "../../services";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("services");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: pageData?.acf?.seo_title || "Physical Therapy Services | Treatment Options",
    description: pageData?.acf?.seo_description || "Comprehensive physical therapy services for athletes, busy professionals, and post-op patients. Evidence-based treatment that gets results.",
    alternates: {
      canonical: `${baseUrl}/services`,
    },
    openGraph: {
      title: pageData?.acf?.seo_title || "Physical Therapy Services | Treatment Options",
      description: pageData?.acf?.seo_description || "Comprehensive physical therapy services for athletes, busy professionals, and post-op patients. Evidence-based treatment that gets results.",
      images: pageData?.acf?.seo_image?.url ? [{ url: pageData.acf.seo_image.url }] : [],
      type: "website",
      url: `${baseUrl}/services`,
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.acf?.seo_title || "Physical Therapy Services | Treatment Options",
      description: pageData?.acf?.seo_description || "Comprehensive physical therapy services for athletes, busy professionals, and post-op patients. Evidence-based treatment that gets results.",
      images: pageData?.acf?.seo_image?.url ? [pageData.acf.seo_image.url] : [],
    },
  };
}

export default async function Services() {
  const [pageData, services] = await Promise.all([
    getPage("services"),
    getServices(),
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPage
        pageData={pageData?.acf}
        services={services}
      />
    </>
  );
}
