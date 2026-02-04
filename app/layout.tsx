import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physio Physical Therapy",
  description: "Professional physical therapy services tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
