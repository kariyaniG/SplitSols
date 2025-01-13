import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    try {
      // Implement Phantom wallet connection here
      setConnected(true);
      setAddress('dummy-address');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <WalletContext.Provider value={{ connected, address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
