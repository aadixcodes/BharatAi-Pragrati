'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Courses', href: '#courses' },
    { name: 'AI', href: '#ai' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact Us', href: '#contact-us' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/BharataiLogo.webp" 
              alt="Bharat AI Logo" 
              width={150} 
              height={50} 
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 text-xl hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Call-to-Action Button */}
          <div className="hidden md:block">
            <Link href="/join">
              <button className="px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full hover:from-orange-500 hover:to-orange-600 transition-colors">
                Join Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`text-gray-800 hover:text-orange-500 focus:outline-none transition-colors ${isMobileMenuOpen ? 'hidden' : 'block'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40" 
              onClick={toggleMobileMenu}
            />
          )}

          {/* Mobile Navigation Drawer */}
          <div
            className={`
              fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div className="flex bg-white min-h-screen flex-col p-6 space-y-4 mt-12">
              {/* <button 
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-gray-800 hover:text-orange-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button> */}

<div className="absolute top-4 left-4 right-4 flex justify-between items-center mb-6">
  {/* Logo on the left side */}
  <Link href="/" className="flex items-center">
    <Image 
      src="/assets/BharataiLogo.webp" 
      alt="Bharat AI Logo" 
      width={120} 
      height={40} 
      className="rounded-full"
    />
  </Link>

  {/* X button on the right side */}
  <button 
    onClick={toggleMobileMenu}
    className="text-gray-800 hover:text-orange-500 transition-colors"
  >
    <X className="w-6 h-6" />
  </button>
</div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="bg-orange-400/20 text-gray-800 hover:bg-orange-400/40 hover:text-orange-500 text-lg font-semibold px-4 py-2 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/join" onClick={toggleMobileMenu}>
                <button className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;