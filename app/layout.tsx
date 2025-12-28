import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AutoHub Solutions - WhatsApp & AI Automation for Business",
  description: "Transform your business with AI-powered WhatsApp automation. AutoHub Solutions provides intelligent chatbots, automated workflows, and multi-language support for businesses of all sizes.",
  keywords: "WhatsApp automation, AI chatbot, business automation, customer communication, WhatsApp Business API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
