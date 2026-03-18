import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HowToUseHighLevel — Strategy-First GHL Agency Platform",
  description:
    "Describe your GoHighLevel project, get AI-scoped deliverables, and have verified GHL admins build it at 1/10th the cost of traditional agencies.",
  keywords: [
    "GoHighLevel",
    "GHL agency",
    "GHL admin",
    "HighLevel builds",
    "GHL funnels",
    "GHL automation",
  ],
  openGraph: {
    title: "HowToUseHighLevel — Strategy-First GHL Agency Platform",
    description:
      "Describe your project. AI scopes it. Verified GHL admins build it fast at 1/10th the price.",
    type: "website",
    url: "https://howtousehighlevel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "HowToUseHighLevel — Strategy-First GHL Agency Platform",
    description: "Premium GHL builds at 1/10th the agency cost.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* GHL form embed script */}
        <script src="https://link.saassuite.ai/js/form_embed.js" async />
      </body>
    </html>
  );
}
