import { getPage, getTestimonials, getTeamMembers } from "../../lib/wp";
import { generateBreadcrumbSchema } from "../../lib/json-ld";
import AboutPage from "../../about-us";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPage("about-us");
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    title: pageData?.acf?.seo_title || "About Us | Our Story & Mission",
    description: pageData?.acf?.seo_description || "Learn about our evidence-based approach to physical therapy and the team dedicated to your recovery.",
    alternates: {
      canonical: `${baseUrl}/about-us`,
    },
    openGraph: {
      title: pageData?.acf?.seo_title || "About Us | Our Story & Mission",
      description: pageData?.acf?.seo_description || "Learn about our evidence-based approach to physical therapy and the team dedicated to your recovery.",
      images: pageData?.acf?.seo_image?.url ? [{ url: pageData.acf.seo_image.url }] : [],
      type: "website",
      url: `${baseUrl}/about-us`,
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.acf?.seo_title || "About Us | Our Story & Mission",
      description: pageData?.acf?.seo_description || "Learn about our evidence-based approach to physical therapy and the team dedicated to your recovery.",
      images: pageData?.acf?.seo_image?.url ? [pageData.acf.seo_image.url] : [],
    },
  };
}

export default async function AboutUsPage() {
  const [pageData, testimonials, teamMembers] = await Promise.all([
    getPage("about-us"),
    getTestimonials(),
    getTeamMembers(),
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPage
        pageData={pageData?.acf}
        testimonials={testimonials}
        teamMembers={teamMembers}
      />
    </>
  );
}
