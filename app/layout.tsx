import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "../styles/globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const description =
  "Aditya Jain is a B.Tech CSBS student building mobile applications and exploring data. Projects in Flutter, Kotlin, Python and more.";

export const metadata: Metadata = {
  title: "Aditya Jain | Mobile apps & data",
  description,
  authors: [{ name: "Aditya Jain" }],
  openGraph: { title: "Aditya Jain", description, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
