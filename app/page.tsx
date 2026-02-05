import { getPage, getTestimonials, getTeamMembers, getFeaturedImageUrl } from "../lib/wp";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "../lib/json-ld";
import HomePage from "../home";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("home");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: pageData?.seo_title || "Physical Therapy | Evidence-Based Treatment",
    description: pageData?.seo_description || "Expert physical therapy with measurable results. We find what's wrong and build a plan that works for your life.",
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: pageData?.seo_title || "Physical Therapy | Evidence-Based Treatment",
      description: pageData?.seo_description || "Expert physical therapy with measurable results. We find what's wrong and build a plan that works for your life.",
      images: pageData?.seo_image?.url ? [{ url: pageData.seo_image.url }] : [],
      type: "website",
      url: baseUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.seo_title || "Physical Therapy | Evidence-Based Treatment",
      description: pageData?.seo_description || "Expert physical therapy with measurable results. We find what's wrong and build a plan that works for your life.",
      images: pageData?.seo_image?.url ? [pageData.seo_image.url] : [],
    },
  };
}

export default async function Home() {
  // Fetch data from WordPress
  const [pageData, testimonials, teamMembers] = await Promise.all([
    getPage("home"),
    getTestimonials(),
    getTeamMembers(),
  ]);

  const localBusinessSchema = generateLocalBusinessSchema(pageData?.business_info);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" }
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
      <HomePage
        pageData={pageData}
        testimonials={testimonials}
        teamMembers={teamMembers}
        featuredImageUrl={getFeaturedImageUrl(pageData)}
        bodyContent={pageData?.content?.rendered ?? null}
      />
    </>
  );
}
