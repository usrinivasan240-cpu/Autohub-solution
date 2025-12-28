'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-lg flex items-center justify-center">
              <FaWhatsapp className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9A3] bg-clip-text text-transparent">
              AutoHub
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0066FF] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="bg-[#0066FF] text-white px-6 py-2 rounded-lg hover:bg-[#0052CC] transition-colors duration-200 font-medium"
            >
              Admin Login
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#0066FF] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block mt-4 bg-[#0066FF] text-white px-6 py-2 rounded-lg hover:bg-[#0052CC] transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
