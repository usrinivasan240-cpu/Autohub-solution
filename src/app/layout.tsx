import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AutoHub Solutions - WhatsApp & AI Automation for Businesses',
    template: '%s | AutoHub Solutions',
  },
  description: 'Transform your business communication with intelligent WhatsApp automation, AI-powered chatbots, and custom workflows. Scale faster, engage better.',
  keywords: [
    'WhatsApp automation',
    'AI chatbot',
    'business automation',
    'customer engagement',
    'multi-language support',
    'chatbot development',
  ],
  authors: [{ name: 'AutoHub Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://autohub.in',
    siteName: 'AutoHub Solutions',
    title: 'AutoHub Solutions - WhatsApp & AI Automation for Businesses',
    description: 'Transform your business communication with intelligent WhatsApp automation and AI-powered chatbots.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoHub Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoHub Solutions - WhatsApp & AI Automation',
    description: 'Transform your business communication with intelligent automation',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              borderRadius: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
