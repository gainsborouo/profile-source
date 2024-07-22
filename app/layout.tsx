import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://profile.userwei.com'),
  title: "userwei's Profile",
  description: "All information about userwei's personal websites, projects, and contact details.",
  openGraph: {
    url: "https://profile.userwei.com",
    title: "userwei's Profile",
    description: "All information about userwei's personal websites, projects, and contact details.",
    siteName: "userwei's Profile",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-246M48Z0HR" />
    </html>
  );
}
