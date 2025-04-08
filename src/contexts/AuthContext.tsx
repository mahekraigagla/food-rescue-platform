import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { User, UserRole } from '@/types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const mockUsers: User[] = [
  {
    id: '1',
    email: 'donor@example.com',
    name: 'John Donor',
    role: 'donor',
    address: '123 Main St, City',
    phone: '123-456-7890',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'ngo@example.com',
    name: 'Helping Hands NGO',
    role: 'ngo',
    address: '456 Charity Ave, Town',
    phone: '987-654-3210',
    preferences: ['Cooked Food', 'Vegetables', 'Fruits'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date().toISOString(),
  }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('wasteNotUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const user = mockUsers.find(u => u.email === email);
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('wasteNotUser', JSON.stringify(user));
        toast.success(`Welcome back, ${user.name}!`);
        navigate(`/${user.role}-dashboard`);
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string, role: UserRole) => {
    setLoading(true);
    try {
      if (mockUsers.some(u => u.email === email)) {
        toast.error('User with this email already exists.');
        return;
      }

      const newUser: User = {
        id: (mockUsers.length + 1).toString(),
        email,
        name,
        role,
        createdAt: new Date().toISOString(),
      };

      mockUsers.push(newUser);
      
      setCurrentUser(newUser);
      localStorage.setItem('wasteNotUser', JSON.stringify(newUser));
      
      toast.success(`Welcome to WasteNot, ${name}!`);
      navigate(`/${role}-dashboard`);
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('wasteNotUser');
    navigate('/');
    toast.success('Successfully logged out.');
  };

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
