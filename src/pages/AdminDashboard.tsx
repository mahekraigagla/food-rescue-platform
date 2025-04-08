
import React from 'react';
import { User, Package, Building, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';
import StatsCard from '@/components/StatsCard';
import { useAuth } from '@/contexts/AuthContext';
import { useDonation } from '@/contexts/DonationContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

// Mock users for the admin dashboard
const mockUsers = [
  {
    id: '1',
    name: 'John Donor',
    email: 'donor@example.com',
    role: 'donor',
    status: 'active',
    created: '2025-03-15',
  },
  {
    id: '2',
    name: 'Helping Hands NGO',
    email: 'ngo@example.com',
    role: 'ngo',
    status: 'active',
    created: '2025-03-10',
  },
  {
    id: '4',
    name: 'Green Restaurant',
    email: 'green@example.com',
    role: 'donor',
    status: 'pending',
    created: '2025-04-05',
  },
  {
    id: '5',
    name: 'Food Rescue Mission',
    email: 'rescue@example.com',
    role: 'ngo',
    status: 'active',
    created: '2025-03-25',
  },
];

const AdminDashboard = () => {
  const { donations } = useDonation();
  
  const totalDonations = donations.length;
  const pendingDonations = donations.filter(d => d.status === 'pending').length;
  const completedDonations = donations.filter(d => d.status === 'delivered').length;
  const totalUsers = mockUsers.length;
  
  const approveUser = (id: string) => {
    toast.success('User approved successfully');
  };
  
  const disableUser = (id: string) => {
    toast.success('User disabled successfully');
  };
  
  return (
    <DashboardLayout title="Admin Dashboard" allowedRoles={['admin']}>
      <div className="grid gap-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Users"
            value={totalUsers}
            icon={<User className="h-5 w-5" />}
          />
          <StatsCard
            title="Total Donations"
            value={totalDonations}
            icon={<Package className="h-5 w-5" />}
          />
          <StatsCard
            title="Active NGOs"
            value={mockUsers.filter(u => u.role === 'ngo' && u.status === 'active').length}
            icon={<Building className="h-5 w-5" />}
          />
          <StatsCard
            title="Completion Rate"
            value={`${Math.round((completedDonations / totalDonations) * 100)}%`}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>
        
        {/* Tabs for admin functions */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Users Tab */}
          <TabsContent value="users" className="pt-6">
            <div className="bg-white rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'donor' ? 'outline' : 'default'} className={user.role === 'donor' ? 'bg-wastenot-orange/10 text-wastenot-orange' : 'bg-wastenot-green text-white'}>
                          {user.role === 'donor' ? 'Donor' : 'NGO'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'outline'} className={user.status === 'active' ? 'bg-green-500' : 'bg-yellow-500/10 text-yellow-500'}>
                          {user.status === 'active' ? 'Active' : 'Pending'}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.created}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {user.status === 'pending' ? (
                            <Button 
                              size="sm" 
                              onClick={() => approveUser(user.id)}
                              className="bg-wastenot-green hover:bg-wastenot-darkgreen"
                            >
                              Approve
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => disableUser(user.id)}
                            >
                              Disable
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          {/* Donations Tab */}
          <TabsContent value="donations" className="pt-6">
            <div className="bg-white rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Donor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Pickup Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {donations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.id}</TableCell>
                      <TableCell>{donation.donorName}</TableCell>
                      <TableCell>{donation.foodType}</TableCell>
                      <TableCell>{new Date(donation.pickupTime).toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={
                          donation.status === 'pending' ? 'bg-yellow-500' :
                          donation.status === 'accepted' ? 'bg-blue-500' :
                          donation.status === 'picked-up' ? 'bg-purple-500' :
                          donation.status === 'delivered' ? 'bg-green-500' :
                          'bg-red-500'
                        }>
                          {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{donation.assignedToName || '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-4">Donation Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Pending</span>
                    <span className="font-bold">{pendingDonations}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-500 h-full" 
                      style={{ width: `${(pendingDonations / totalDonations) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Accepted</span>
                    <span className="font-bold">
                      {donations.filter(d => d.status === 'accepted').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full" 
                      style={{ 
                        width: `${(donations.filter(d => d.status === 'accepted').length / totalDonations) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>In Transit</span>
                    <span className="font-bold">
                      {donations.filter(d => d.status === 'picked-up').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-purple-500 h-full" 
                      style={{ 
                        width: `${(donations.filter(d => d.status === 'picked-up').length / totalDonations) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Completed</span>
                    <span className="font-bold">{completedDonations}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ width: `${(completedDonations / totalDonations) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-4">User Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Donors</span>
                    <span className="font-bold">
                      {mockUsers.filter(u => u.role === 'donor').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-wastenot-orange h-full" 
                      style={{ 
                        width: `${(mockUsers.filter(u => u.role === 'donor').length / totalUsers) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>NGOs</span>
                    <span className="font-bold">
                      {mockUsers.filter(u => u.role === 'ngo').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-wastenot-green h-full" 
                      style={{ 
                        width: `${(mockUsers.filter(u => u.role === 'ngo').length / totalUsers) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Active Users</span>
                    <span className="font-bold">
                      {mockUsers.filter(u => u.status === 'active').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full" 
                      style={{ 
                        width: `${(mockUsers.filter(u => u.status === 'active').length / totalUsers) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Pending Users</span>
                    <span className="font-bold">
                      {mockUsers.filter(u => u.status === 'pending').length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-500 h-full" 
                      style={{ 
                        width: `${(mockUsers.filter(u => u.status === 'pending').length / totalUsers) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
