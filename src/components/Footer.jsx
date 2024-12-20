
'use client';

import Link from 'next/link';
import { Newsletter } from './Newsletter';
import { Phone, Mail as MailIcon, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <Newsletter />
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <MailIcon className="w-5 h-5 text-orange-500" />
                <span>contact@bharatai.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 hover:text-white transition-all"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
        
        <div className="text-center text-gray-600 border-t border-gray-200 pt-8">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}