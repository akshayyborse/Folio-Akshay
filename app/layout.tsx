import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akshay Borse — Frontend Engineer",
  description:
    "Frontend Engineer and Web Designer, currently at Oceanmonks. Focused on interfaces and experiences, working remotely, India.",
  generator: "Next.js",
  applicationName: "Akshay Borse",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Akshay Borse — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Oceanmonks. Focused on interfaces and experiences, working remotely, India.",
    url: "https://www.oceanmonks.in/",
    siteName: "www.oceanmonks.in",
    images: [
      {
        url: "https://raw.githubusercontent.com/akshayyborse/personal/refs/heads/main/Akshay_dev_image.png",
        width: 1200,
        height: 630,
        alt: "Akshay Borse — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Borse — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Oceanmonks. Focused on interfaces and experiences, working remotely, India.",
    creator: "akshayyborse",
    creatorId: "1243720976552144897",
    images: [
      "https://raw.githubusercontent.com/akshayyborse/personal/refs/heads/main/Akshay_dev_image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
