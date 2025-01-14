import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { PlusCircle, UserPlus, DollarSign, ArrowRightLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const { connected, address } = useWallet();
  const [groups, setGroups] = useState([
    {
      id: '1',
      name: 'Beach Trip',
      members: ['Alice', 'Bob', 'Charlie'],
      totalAmount: 1200,
      yourShare: 400,
      yourBalance: -150,
    },
    {
      id: '2',
      name: 'House Expenses',
      members: ['David', 'Emma'],
      totalAmount: 800,
      yourShare: 400,
      yourBalance: 200,
    },
  ]);

  if (!connected) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-lg mx-auto p-8 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-transparent">Connect Your Wallet</h2>
          <p className="text-gray-700 mb-6">Please connect your wallet to access your dashboard and manage your expenses</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Your Dashboard
            </h1>
            <p className="text-gray-400">Manage your groups and expenses</p>
          </div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2 transition-all hover:scale-105">
            <PlusCircle size={20} />
            Create New Group
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <UserPlus className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Add Friends</h3>
            </div>
            <p className="text-gray-400 mb-4">Connect with friends to split expenses</p>
            <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors">
              Add Now 
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="group p-6 rounded-2xl bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                <DollarSign className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Add Expense</h3>
            </div>
            <p className="text-gray-400 mb-4">Record a new expense to split</p>
            <button className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors">
              Add Now 
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="group p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                <ArrowRightLeft className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Settle Up</h3>
            </div>
            <p className="text-gray-400 mb-4">Pay or request pending balances</p>
            <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
              Settle Now 
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Groups List */}
        <div className="p-8 rounded-2xl bg-black/50 backdrop-blur-xl border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Your Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((group) => (
              <Link
                key={group.id}
                to={`/group/${group.id}`}
                className="group p-6 rounded-xl bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{group.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    group.yourBalance >= 0 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/20'
                  }`}>
                    {group.yourBalance >= 0 ? '+' : ''}{group.yourBalance} SOL
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{group.members.join(', ')}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Total: {group.totalAmount} SOL</span>
                  <span>Your share: {group.yourShare} SOL</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;