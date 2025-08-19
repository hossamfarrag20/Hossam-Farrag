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
  title: "Hossam Farrag - Frontend & Fullstack Developer",
  description:
    "Skilled in React, Next.js, Tailwind, Django. I build responsive, SEO-optimized, fullstack websites that deliver exceptional user experiences.",
  icons: {
    icon: "/logo.ico", // أو أي مسار في public
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  keywords: [
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Django",
    "Web Development",
    "Hossam Farrag",
  ],
  authors: [{ name: "Hossam Farrag" }],
  creator: "Hossam Farrag",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hossamfarrag.dev",
    title: "Hossam Farrag - Frontend & Fullstack Developer",
    description:
      "Skilled in React, Next.js, Tailwind, Django. I build responsive, SEO-optimized, fullstack websites.",
    siteName: "Hossam Farrag Portfolio",
    images: [
      {
        url: "/assets/1734089557422.jpg",
        width: 1200,
        height: 630,
        alt: "Hossam Farrag - Frontend & Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hossam Farrag - Frontend & Fullstack Developer",
    description:
      "Skilled in React, Next.js, Tailwind, Django. I build responsive, SEO-optimized, fullstack websites.",
    images: ["/assets/1734089557422.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
