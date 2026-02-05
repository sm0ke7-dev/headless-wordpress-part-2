export function generateLocalBusinessSchema(locationData?: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapy",
    "name": locationData?.title || "Physical Therapy Clinic",
    "description": locationData?.description || "Evidence-based physical therapy with measurable results",
    "url": baseUrl,
    "telephone": locationData?.phone || "+1 (408) 555-0147",
    "email": locationData?.email || "hello@example.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationData?.street_address || "1247 Meridian Ave",
      "addressLocality": locationData?.city || "San Jose",
      "addressRegion": locationData?.state || "CA",
      "postalCode": locationData?.zip || "95125",
      "addressCountry": "US"
    },
    "geo": locationData?.latitude && locationData?.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": locationData.latitude,
      "longitude": locationData.longitude
    } : undefined,
    "openingHoursSpecification": locationData?.hours ? locationData.hours.map((day: any) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day.day_of_week,
      "opens": day.opens,
      "closes": day.closes
    })) : [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": locationData?.rating ? {
      "@type": "AggregateRating",
      "ratingValue": locationData.rating.value,
      "reviewCount": locationData.rating.count
    } : undefined
  };
}

export function generateServiceSchema(serviceData?: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": serviceData?.title || "Physical Therapy Service",
    "description": serviceData?.description || "Professional physical therapy treatment",
    "url": `${baseUrl}/services/${serviceData?.slug || ""}`,
    "provider": {
      "@type": "PhysicalTherapy",
      "name": "Physical Therapy Clinic"
    },
    "availableService": {
      "@type": "MedicalProcedure",
      "name": serviceData?.title || "Physical Therapy Service",
      "procedureType": "Physical Therapy"
    }
  };
}

export function generateFAQSchema(faqItems?: any[]) {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question || item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer || item.content
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
}
