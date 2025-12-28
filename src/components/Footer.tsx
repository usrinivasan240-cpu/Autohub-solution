'use client';

import Link from 'next/link';
import { 
  MessageCircle, Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin, Instagram,
  Send, ArrowRight
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'WhatsApp Automation', href: '/services#whatsapp-automation' },
    { label: 'Chatbot Setup', href: '/services#chatbot-setup' },
    { label: 'AI Auto-Replies', href: '/services#ai-replies' },
    { label: 'Custom Workflows', href: '/services#workflows' },
    { label: 'Multi-language Support', href: '/services#multilingual' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api-docs' },
    { label: 'Support Center', href: '/support' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/autohub', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/autohub', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/autohub', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/autohub', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-secondary-400">
                Get the latest updates on automation and AI for your business.
              </p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-secondary-400"
                />
              </div>
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl">
                AutoHub<span className="text-primary-400">.</span>
              </span>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-sm">
              Empowering businesses with intelligent WhatsApp and AI-based communication automation. 
              Save time, boost engagement, and grow faster.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@autohub.in" className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@autohub.in</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91-XXXXX-XXXXX</span>
              </a>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="w-5 h-5" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-secondary-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} AutoHub Solutions. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
