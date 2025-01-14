import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import GroupDetails from './pages/GroupDetails';
import Profile from './pages/Profile';
import { WalletProvider } from './context/WalletContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black text-white">
          <Navbar />
          <main className="pt-20 flex-grow"> {/* Added padding-top to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/group/:id" element={<GroupDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
};

export default App;