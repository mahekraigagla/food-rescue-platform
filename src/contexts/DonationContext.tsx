
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { Donation } from '@/types';
import { useAuth } from './AuthContext';

interface DonationContextType {
  donations: Donation[];
  loading: boolean;
  createDonation: (donationData: Omit<Donation, 'id' | 'donorId' | 'donorName' | 'status' | 'createdAt'>) => Promise<void>;
  updateDonationStatus: (id: string, status: Donation['status'], assignedTo?: string, assignedToName?: string) => Promise<void>;
  getUserDonations: (userId: string) => Donation[];
  getAvailableDonations: () => Donation[];
  getDonationById: (id: string) => Donation | undefined;
}

// Mock donations
const initialDonations: Donation[] = [
  {
    id: '1',
    donorId: '1',
    donorName: 'John Donor',
    foodType: 'Cooked Food',
    quantity: '5 kg',
    description: 'Leftover food from office event, including sandwiches and pastries.',
    location: '123 Main St, City',
    pickupTime: '2025-04-08T14:00:00Z',
    status: 'pending',
    createdAt: '2025-04-08T10:30:00Z',
  },
  {
    id: '2',
    donorId: '1',
    donorName: 'John Donor',
    foodType: 'Vegetables',
    quantity: '3 kg',
    description: 'Fresh vegetables including carrots, tomatoes, and lettuce.',
    location: '123 Main St, City',
    pickupTime: '2025-04-09T11:00:00Z',
    status: 'accepted',
    assignedTo: '2',
    assignedToName: 'Helping Hands NGO',
    createdAt: '2025-04-08T09:15:00Z',
  },
  {
    id: '3',
    donorId: '1',
    donorName: 'John Donor',
    foodType: 'Bread',
    quantity: '10 loaves',
    description: 'Freshly baked bread from local bakery.',
    location: '123 Main St, City',
    pickupTime: '2025-04-08T16:30:00Z',
    status: 'delivered',
    assignedTo: '2',
    assignedToName: 'Helping Hands NGO',
    createdAt: '2025-04-07T17:45:00Z',
  }
];

const DonationContext = createContext<DonationContextType | null>(null);

export const DonationProvider = ({ children }: { children: React.ReactNode }) => {
  const [donations, setDonations] = useState<Donation[]>(initialDonations);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const createDonation = async (donationData: Omit<Donation, 'id' | 'donorId' | 'donorName' | 'status' | 'createdAt'>) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      if (!currentUser) {
        toast.error('You must be logged in to create a donation.');
        return;
      }

      const newDonation: Donation = {
        id: (donations.length + 1).toString(),
        donorId: currentUser.id,
        donorName: currentUser.name,
        ...donationData,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      setDonations([...donations, newDonation]);
      toast.success('Donation created successfully!');
    } catch (error) {
      console.error('Create donation error:', error);
      toast.error('An error occurred while creating the donation.');
    } finally {
      setLoading(false);
    }
  };

  const updateDonationStatus = async (id: string, status: Donation['status'], assignedTo?: string, assignedToName?: string) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      const updatedDonations = donations.map((donation) =>
        donation.id === id
          ? { ...donation, status, ...(assignedTo && { assignedTo, assignedToName }) }
          : donation
      );
      
      setDonations(updatedDonations);
      toast.success(`Donation status updated to ${status}!`);
    } catch (error) {
      console.error('Update donation status error:', error);
      toast.error('An error occurred while updating the donation.');
    } finally {
      setLoading(false);
    }
  };

  const getUserDonations = (userId: string) => {
    return donations.filter(
      (donation) => donation.donorId === userId || donation.assignedTo === userId
    );
  };

  const getAvailableDonations = () => {
    return donations.filter((donation) => donation.status === 'pending');
  };

  const getDonationById = (id: string) => {
    return donations.find((donation) => donation.id === id);
  };

  const value = {
    donations,
    loading,
    createDonation,
    updateDonationStatus,
    getUserDonations,
    getAvailableDonations,
    getDonationById,
  };

  return <DonationContext.Provider value={value}>{children}</DonationContext.Provider>;
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};
