
export type UserRole = 'donor' | 'ngo' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  address?: string;
  phone?: string;
  profileImage?: string;
  preferences?: string[];
  createdAt: string;
}

export interface Donation {
  id: string;
  donorId: string;
  donorName: string;
  foodType: string;
  quantity: string;
  description: string;
  location: string;
  pickupTime: string;
  status: 'pending' | 'accepted' | 'picked-up' | 'delivered' | 'cancelled';
  assignedTo?: string;
  assignedToName?: string;
  createdAt: string;
}

export interface DonationStats {
  total: number;
  pending: number;
  completed: number;
}

export interface DashboardStats {
  totalDonations: number;
  pendingDonations: number;
  completedDonations: number;
  activeNgos?: number;
  activeDonors?: number;
  mealsProvided?: number;
}
