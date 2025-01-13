import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          
          {/* Main content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Built on Solana</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Split Expenses Seamlessly with Solana
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Create groups, split expenses, and settle instantly using the power of blockchain.
              No more awkward reminders or delayed payments.
            </p>
            
            <div className="flex justify-center gap-6">
              <Link
                to="/dashboard"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 text-lg font-semibold text-purple-400 border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black/50 backdrop-blur-xl border-t border-purple-500/20 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Settlement</h3>
              <p className="text-gray-400">
                Leverage Solana's lightning-fast blockchain for immediate payments and settlements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure & Transparent</h3>
              <p className="text-gray-400">
                Every transaction is recorded on the blockchain, ensuring complete transparency and security.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Group Management</h3>
              <p className="text-gray-400">
                Create and manage multiple groups with different members for various occasions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;