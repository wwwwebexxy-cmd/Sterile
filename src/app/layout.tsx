import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sterileuae.com"),
  title: "Sterile Manufacturing LLC | UAE-Made Medical Disposables",
  description:
    "Sterile Manufacturing LLC produces dependable medical disposables and custom paper cups from Al Jurf Industrial 2, Ajman, UAE.",
  keywords: [
    "medical disposables UAE",
    "medical disposable manufacturer Ajman",
    "sharps containers UAE",
    "medicine cups manufacturer",
    "custom paper cups UAE",
    "Sterile Manufacturing LLC",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Sterile Manufacturing LLC | Made for safer care",
    description:
      "UAE-made medical disposables and brand-ready paper cups for healthcare, hospitality and institutional buyers.",
    url: "https://sterileuae.com",
    siteName: "Sterile Manufacturing LLC",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/images/product-range.png",
        width: 1280,
        height: 720,
        alt: "Sterile Manufacturing medical disposable product range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterile Manufacturing LLC | Made for safer care",
    description:
      "UAE-made medical disposables and brand-ready paper cups from Ajman.",
    images: ["/images/product-range.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Sterile Manufacturing LLC",
  alternateName: "STERILE MANUFACTURING L.L.C UAE",
  url: "https://sterileuae.com",
  logo: "https://sterileuae.com/images/sterile-logo-transparent.png",
  image: "https://sterileuae.com/images/product-range.png",
  description:
    "UAE manufacturer of single-use medical disposables and custom paper cups.",
  telephone: "+971503755006",
  email: "sterileuae@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Jerf Industrial 2",
    addressLocality: "Ajman",
    addressCountry: "AE",
  },
  areaServed: ["United Arab Emirates", "GCC", "Middle East"],
  sameAs: ["https://www.instagram.com/sterilemanufacturing/"],
  knowsAbout: [
    "medical disposables",
    "sharps containers",
    "specimen containers",
    "medicine cups",
    "custom paper cups",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Sterile Manufacturing produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterile Manufacturing produces single-use plastic medical disposables such as medicine cups, specimen containers, stool containers, deep bottles, sharps containers, male urinals, kidney trays and rectangular basins. The company also offers custom paper cups.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Sterile Manufacturing located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sterile Manufacturing is located in Al Jerf Industrial 2, Ajman, United Arab Emirates.",
      },
    },
    {
      "@type": "Question",
      name: "Can paper cups be customized for a brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The paper cup range supports custom sizes, colours, printed patterns and brand messages, including double-wall options in 4 oz, 6.5 oz, 8 oz and 12 oz formats.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
