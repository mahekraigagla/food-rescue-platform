
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import DonorDashboard from './pages/DonorDashboard';
import NgoDashboard from './pages/NgoDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CreateDonation from './pages/CreateDonation';
import NotFound from './pages/NotFound';
import LayoutWithToaster from './components/ui/layout-with-toaster';

import { AuthProvider } from './contexts/AuthContext';
import { DonationProvider } from './contexts/DonationContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <DonationProvider>
            <LayoutWithToaster>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/donor-dashboard" element={<DonorDashboard />} />
                <Route path="/ngo-dashboard" element={<NgoDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/create-donation" element={<CreateDonation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LayoutWithToaster>
          </DonationProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
