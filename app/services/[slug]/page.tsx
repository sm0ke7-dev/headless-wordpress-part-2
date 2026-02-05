import { getService, getServices, getFeaturedImageUrl, getGlobalSettings } from "../../../lib/wp";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "../../../lib/json-ld";
import ServiceSinglePage from "../../../service-(single)";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service: any) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const serviceData = await getService(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: (serviceData?.acf?.seo_title as string) || `${serviceData?.title?.rendered} | Physical Therapy Service`,
    description: (serviceData?.acf?.seo_description as string) || `Learn about our ${serviceData?.title?.rendered} service. Evidence-based physical therapy treatment.`,
    alternates: {
      canonical: `${baseUrl}/services/${params.slug}`,
    },
    openGraph: {
      title: (serviceData?.acf?.seo_title as string) || `${serviceData?.title?.rendered} | Physical Therapy Service`,
      description: (serviceData?.acf?.seo_description as string) || `Learn about our ${serviceData?.title?.rendered} service. Evidence-based physical therapy treatment.`,
      images: (serviceData?.acf?.seo_image as { url: string })?.url ? [{ url: (serviceData.acf.seo_image as { url: string }).url }] : [],
      type: "website",
      url: `${baseUrl}/services/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: (serviceData?.acf?.seo_title as string) || `${serviceData?.title?.rendered} | Physical Therapy Service`,
      description: (serviceData?.acf?.seo_description as string) || `Learn about our ${serviceData?.title?.rendered} service. Evidence-based physical therapy treatment.`,
      images: (serviceData?.acf?.seo_image as { url: string })?.url ? [(serviceData.acf.seo_image as { url: string }).url] : [],
    },
  };
}

export default async function ServiceSingle({ params }: { params: { slug: string } }) {
  const [serviceData, globalSettings] = await Promise.all([
    getService(params.slug),
    getGlobalSettings(),
  ]);

  const serviceSchema = generateServiceSchema({
    title: serviceData?.title?.rendered,
    description: serviceData?.acf?.service_description,
    slug: params.slug
  });

  const faqSchema = serviceData?.acf?.faq_items ? generateFAQSchema(serviceData.acf.faq_items as any[]) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceData?.title?.rendered || "Service", url: `/services/${params.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceSinglePage
        serviceData={serviceData?.acf}
        bodyContent={serviceData?.content?.rendered ?? null}
        featuredImageUrl={getFeaturedImageUrl(serviceData)}
        globalSettings={globalSettings}
      />
    </>
  );
}
