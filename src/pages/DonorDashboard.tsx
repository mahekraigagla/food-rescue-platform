
import React from 'react';
import { Package, Calendar, Check, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/DashboardLayout';
import DonationCard from '@/components/DonationCard';
import StatsCard from '@/components/StatsCard';
import { useAuth } from '@/contexts/AuthContext';
import { useDonation } from '@/contexts/DonationContext';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const { currentUser } = useAuth();
  const { getUserDonations } = useDonation();
  
  const donations = currentUser ? getUserDonations(currentUser.id) : [];
  const pendingDonations = donations.filter(d => d.status === 'pending');
  const acceptedDonations = donations.filter(d => d.status === 'accepted');
  const deliveredDonations = donations.filter(d => ['picked-up', 'delivered'].includes(d.status));
  
  return (
    <DashboardLayout title="Donor Dashboard" allowedRoles={['donor']}>
      <div className="grid gap-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Donations"
            value={donations.length}
            icon={<Package className="h-5 w-5" />}
          />
          <StatsCard
            title="Pending Donations"
            value={pendingDonations.length}
            icon={<Calendar className="h-5 w-5" />}
          />
          <StatsCard
            title="Completed Donations"
            value={deliveredDonations.length}
            icon={<Check className="h-5 w-5" />}
          />
          <StatsCard
            title="Meals Provided (Est.)"
            value={(deliveredDonations.length * 15).toString()}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>
        
        <div className="flex justify-end">
          <Button asChild className="bg-wastenot-green hover:bg-wastenot-darkgreen">
            <Link to="/create-donation">
              <Plus className="h-4 w-4 mr-2" />
              New Donation
            </Link>
          </Button>
        </div>
        
        {/* Tabs for donation status */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="pt-6">
            {donations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No donations yet</h3>
                <p className="text-muted-foreground mb-4">Start by creating your first donation</p>
                <Button asChild className="bg-wastenot-green hover:bg-wastenot-darkgreen">
                  <Link to="/create-donation">Create Donation</Link>
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pending" className="pt-6">
            {pendingDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No pending donations</h3>
                <p className="text-muted-foreground">All your donations have been accepted or completed</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="accepted" className="pt-6">
            {acceptedDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acceptedDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No accepted donations</h3>
                <p className="text-muted-foreground">Donations will appear here once NGOs accept them</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="pt-6">
            {deliveredDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliveredDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No completed donations</h3>
                <p className="text-muted-foreground">Completed donations will appear here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DonorDashboard;
