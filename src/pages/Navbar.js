import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { Menu, X, ChevronDown, Wallet } from 'lucide-react';

const Navbar = () => {
  const { connected, connectWallet, address } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Groups', path: '/groups' },
  ];

  const isActivePath = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              SplitSol
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActivePath(link.path)
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center gap-4">
            {connected ? (
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/20">
                  {address?.slice(0, 4)}...{address?.slice(-4)}
                </span>
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                >
                  Profile
                </Link>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <Wallet size={18} />
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-purple-500/20 text-purple-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActivePath(link.path)
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {connected ? (
              <>
                <div className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400">
                  {address?.slice(0, 4)}...{address?.slice(-4)}
                </div>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center"
                >
                  Profile
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  connectWallet();
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-2"
              >
                <Wallet size={18} />
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;