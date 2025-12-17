import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Suyash Tripathi
              </h3>
              <p className="text-sm text-gray-600">
                Full Stack Developer & Designer
              </p>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-gray-600 flex items-center justify-center gap-1">
              © {currentYear} Made with <FaHeart className="text-red-500 animate-pulse" /> by Suyash Tripathi
            </p>
            <p className="text-sm text-gray-500 mt-1">
              All rights reserved
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            {[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Sitemap", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS, and ❤️
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;