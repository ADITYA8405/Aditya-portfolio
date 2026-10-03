import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "../styles/globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description =
  "Aditya Jain is a B.Tech CSBS student building mobile applications and exploring data. Projects in Flutter, Kotlin, Python and more.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
const title = "Aditya Jain | Mobile apps & data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Aditya Jain" }],
  openGraph: { title, description, type: "website", siteName: "Aditya Jain", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aditya Jain: Mobile apps & data analytics" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
