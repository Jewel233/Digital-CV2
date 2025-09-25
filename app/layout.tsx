// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jewel Shaji – Business Analyst & AI Enthusiast",
  description:
    "Digital CV of Jewel Shaji – Business Analyst specializing in AI-driven tools, data storytelling, and rapid prototyping.",
  generator: "v0.app",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {/* optional global nav here */}
        {children}
      </body>
    </html>
  );
}
