import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PwaRegistration from "@/components/PwaRegistration";
import BackToTopButton from "@/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiWebx - AI Tools Directory",
  description: "Discover the best AI-powered tools for your next project",
  metadataBase: new URL('http://localhost:3000'),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: "AiWebx - AI Tools Directory",
    description: "Discover the best AI-powered tools for your next project",
    url: "http://localhost:3000",
    siteName: "AiWebx",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AiWebx logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AiWebx - AI Tools Directory",
    description: "Discover the best AI-powered tools for your next project",
    images: ["/android-chrome-512x512.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}
        <PwaRegistration />
        <BackToTopButton />
      </body>
    </html>
  );
}
