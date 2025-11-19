import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "English Master - Learn English with Expert-Led Online Courses",
  description: "Master English with comprehensive courses from basics to advanced. Learn grammar, vocabulary, speaking, writing, and more. Join 50,000+ students worldwide. Made by Taskkora.",
  keywords: ["English Master", "Learn English", "English Course", "Grammar", "Vocabulary", "Speaking", "IELTS", "Taskkora", "Online Learning"],
  authors: [{ name: "English Master by Taskkora" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "English Master - Learn English with Expert-Led Online Courses",
    description: "Transform your English skills with our comprehensive courses. From basics to IELTS preparation, we've got you covered.",
    url: "https://englishmaster.com",
    siteName: "English Master",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Master - Learn English Online",
    description: "Master English with comprehensive courses from basics to advanced. Join 50,000+ students worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
