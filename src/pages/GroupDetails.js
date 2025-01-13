import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import { Users, Receipt, ArrowRightLeft } from 'lucide-react';

const GroupDetails = () => {
  const { id } = useParams();
  const { connected } = useWallet();
  const [group] = useState({
    id: id,
    name: 'Beach Trip',
    members: ['Vivek', 'Mohit', 'Abhi'],
    expenses: [
      {
        id: 1,
        description: 'Hotel Booking',
        amount: 500,
        paidBy: 'Vivek',
        date: '2024-01-10',
        split: 'equal'
      },
      {
        id: 2,
        description: 'Groceries',
        amount: 150,
        paidBy: 'Mohit',
        date: '2024-01-11',
        split: 'equal'
      }
    ],
    balances: {
      Vivek: 200,
      Mohit: -100,
      Abhi: -100
    }
  });

  if (!connected) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-6">Please connect your wallet to view group details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Group Header */}
      <div className="bg-gray-800/30 rounded-xl p-8 mb-12">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{group.name}</h1>
            <div className="flex items-center gap-2 text-gray-400">
              <Users size={16} />
              <span>{group.members.join(', ')}</span>
            </div>
          </div>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center gap-2">
            <ArrowRightLeft size={16} />
            Settle Up
          </button>
        </div>
      </div>

      {/* Expenses List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Expenses</h2>
        <div className="space-y-4">
          {group.expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-gray-800/20 p-6 rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{expense.description}</h3>
                <p className="text-gray-400 text-sm">
                  Paid by {expense.paidBy} on {expense.date}
                </p>
              </div>
              <span className="text-lg font-bold text-purple-400">${expense.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Balances */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Balances</h2>
        <div className="space-y-4">
          {Object.entries(group.balances).map(([member, balance]) => (
            <div
              key={member}
              className="bg-gray-800/20 p-4 rounded-lg flex items-center justify-between"
            >
              <span className="text-gray-300">{member}</span>
              <span
                className={`font-bold ${
                  balance > 0 ? 'text-green-400' : balance < 0 ? 'text-red-400' : 'text-gray-400'
                }`}
              >
                {balance > 0 ? `+${balance}` : balance < 0 ? `${balance}` : 'Settled'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Expense Button */}
      <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-semibold">
        Add Expense
      </button>
    </div>
  );
};

export default GroupDetails;
