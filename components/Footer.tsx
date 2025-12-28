import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00D9A3] rounded-lg flex items-center justify-center">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">AutoHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming business communication with intelligent WhatsApp and AI automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/use-cases" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FaWhatsapp className="text-[#00D9A3]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-[#00D9A3]" />
                <span>hello@autohub.solutions</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-[#00D9A3]" />
                <span>+1 (555) 987-6543</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AutoHub Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00D9A3] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
