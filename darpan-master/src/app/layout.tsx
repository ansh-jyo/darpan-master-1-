import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darpan-monitor.in"), // Added for custom domain support
  title: {
    template: "%s | DARPAN",
    default: "DARPAN — National Infrastructure Intelligence",
  },
  description: "Predictive monitoring, early warning alerts, and risk intelligence for India's national infrastructure project ecosystem.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DARPAN — National Infrastructure Intelligence",
    description: "Monitor and execute national infrastructure projects safely.",
    url: "https://darpan-monitor.in",
    siteName: "DARPAN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARPAN — Infrastructure Intelligence",
    description: "National scope infrastructure tracking mechanism.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "DARPAN Infrastructure Diagnostics",
    "url": "https://darpan-monitor.in",
    "logo": "https://darpan-monitor.in/darpan-logo.png",
    "description": "National infrastructure project portfolio dashboard."
  };

  const breadcrumbLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Command Center",
      "item": "https://darpan-monitor.in/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://darpan-monitor.in/projects"
    }]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </body>
    </html>
  );
}