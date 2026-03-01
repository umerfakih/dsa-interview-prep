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
  title: "Umer Fakih — Backend Engineer & Tech Lead",
  description:
    "Backend Engineer and Tech Lead building scalable systems, fintech platforms, and blockchain-based applications. Specializing in NestJS, TypeScript, Solidity, and AI automation.",
  keywords: [
    "Backend Engineer",
    "Tech Lead",
    "Blockchain Developer",
    "NestJS",
    "TypeScript",
    "Solidity",
    "Web3",
    "Fintech",
    "System Architecture",
    "AI Automation",
    "Umer Fakih",
  ],
  authors: [{ name: "Umer Fakih", url: "https://linkedin.com/in/umer-fakih" }],
  openGraph: {
    title: "Umer Fakih — Backend Engineer & Tech Lead",
    description:
      "Building scalable systems, fintech platforms, and blockchain applications for production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Fakih — Backend Engineer & Tech Lead",
    description:
      "Building scalable systems, fintech platforms, and blockchain applications for production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-white`}
      >
        {/* Scroll progress indicator */}
        <div className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
