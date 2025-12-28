'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, MessageCircle, 
  Bot, Sparkles, Zap, Globe 
} from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const servicesDropdown = [
  { 
    href: '/services#whatsapp-automation', 
    label: 'WhatsApp Automation',
    icon: MessageCircle,
    description: 'Automated messaging and responses'
  },
  { 
    href: '/services#chatbot-setup', 
    label: 'Chatbot Setup',
    icon: Bot,
    description: 'Custom AI-powered chatbots'
  },
  { 
    href: '/services#ai-replies', 
    label: 'AI Auto-Replies',
    icon: Sparkles,
    description: 'Smart responses using AI'
  },
  { 
    href: '/services#workflows', 
    label: 'Custom Workflows',
    icon: Zap,
    description: 'Tailored automation flows'
  },
  { 
    href: '/services#multilingual', 
    label: 'Multi-language Support',
    icon: Globe,
    description: 'Reach global audience'
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl text-secondary-900">
              AutoHub<span className="text-primary-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className="relative"
                onMouseEnter={() => link.label === 'Services' && setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {link.label === 'Services' ? (
                  <button 
                    className={`flex items-center px-4 py-2 font-medium transition-colors ${
                      servicesOpen || pathname.startsWith('/services')
                        ? 'text-primary-500'
                        : 'text-secondary-600 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-90' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    href={link.href}
                    className={`px-4 py-2 font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary-500'
                        : 'text-secondary-600 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                <AnimatePresence>
                  {link.label === 'Services' && servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-secondary-100 py-3 mt-2"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {servicesDropdown.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-secondary-50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-5 h-5 text-primary-500" />
                          </div>
                          <div>
                            <p className="font-medium text-secondary-900">{service.label}</p>
                            <p className="text-sm text-secondary-500">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-600 hover:text-secondary-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-secondary-100"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-secondary-600 hover:text-primary-500 hover:bg-secondary-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link href="/contact" className="btn-primary w-full">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
