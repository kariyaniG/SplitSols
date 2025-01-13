import React, { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { Copy, ExternalLink, Clock, ArrowUpDown, UserPlus } from 'lucide-react';

const Profile = () => {
  const { connected, address } = useWallet();
  const [transactions] = useState([
    {
      id: 1,
      type: 'sent',
      amount: 2.5,
      to: '7YUk...3PW9',
      group: 'Beach Trip',
      date: '2024-01-12',
      status: 'completed'
    },
    {
      id: 2,
      type: 'received',
      amount: 1.8,
      from: 'X9nM...7KL2',
      group: 'House Expenses',
      date: '2024-01-10',
      status: 'completed'
    }
  ]);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // Add toast notification here
  };

  if (!connected) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-6">Please connect your wallet to view your profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <div className="bg-gray-800/30 rounded-xl p-8 mb-12">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
            <div className="flex items-center gap-3 text-gray-400">
              {/* <span>{address}</span> */}
              <button onClick={copyAddress} className="hover:text-white">
                <Copy size={16} />
              </button>
              <a
                href={`https://explorer.solana.com/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold mb-1">125.5 SOL</div>
            <div className="text-gray-400">Available Balance</div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <UserPlus className="text-purple-400" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold">8</div>
              <div className="text-gray-400">Active Groups</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <ArrowUpDown className="text-green-400" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold">45.8 SOL</div>
              <div className="text-gray-400">Total Settled</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Clock className="text-yellow-400" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold">3.2 SOL</div>
              <div className="text-gray-400">Pending to Settle</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  tx.type === 'sent' ? 'bg-red-500/20' : 'bg-green-500/20'
                }`}>
                  <ArrowUpDown className={tx.type === 'sent' ? 'text-red-400' : 'text-green-400'} size={20} />
                </div>
                <div>
                  <div className="font-semibold">
                    {tx.type === 'sent' ? `Sent to ${tx.to}` : `Received from ${tx.from}`}
                  </div>
                  <div className="text-sm text-gray-400">{tx.group}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${
                  tx.type === 'sent' ? 'text-red-400' : 'text-green-400'
                }`}>
                  {tx.type === 'sent' ? '-' : '+'}{tx.amount} SOL
                </div>
                <div className="text-sm text-gray-400">{tx.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;