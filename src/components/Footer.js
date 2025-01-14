import React from 'react';
import { Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-purple-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                SplitSol
              </span>
            </a>
            <p className="text-gray-400">Because splitting bills should be seamless.</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-400">Follow us:</span>
              <a href="#" className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                <Youtube className="w-5 h-5 text-purple-400" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Navigate Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">Dashboard</a></li>
              <li><a href="/profile" className="text-gray-400 hover:text-purple-400 transition-colors">Profile</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/documentation" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="/tutorials" className="text-gray-400 hover:text-purple-400 transition-colors">Tutorials</a></li>
              <li><a href="/support" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;