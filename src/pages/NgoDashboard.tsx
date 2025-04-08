
import React from 'react';
import { Package, HeartHandshake, Check, FastForward } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/DashboardLayout';
import DonationCard from '@/components/DonationCard';
import StatsCard from '@/components/StatsCard';
import { useAuth } from '@/contexts/AuthContext';
import { useDonation } from '@/contexts/DonationContext';

const NgoDashboard = () => {
  const { currentUser } = useAuth();
  const { getUserDonations, getAvailableDonations } = useDonation();
  
  const myDonations = currentUser ? getUserDonations(currentUser.id) : [];
  const availableDonations = getAvailableDonations();
  const acceptedDonations = myDonations.filter(d => d.status === 'accepted');
  const pickedUpDonations = myDonations.filter(d => d.status === 'picked-up');
  const deliveredDonations = myDonations.filter(d => d.status === 'delivered');
  
  return (
    <DashboardLayout title="NGO Dashboard" allowedRoles={['ngo']}>
      <div className="grid gap-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Available Donations"
            value={availableDonations.length}
            icon={<Package className="h-5 w-5" />}
          />
          <StatsCard
            title="Accepted"
            value={acceptedDonations.length}
            icon={<HeartHandshake className="h-5 w-5" />}
          />
          <StatsCard
            title="In Transit"
            value={pickedUpDonations.length}
            icon={<FastForward className="h-5 w-5" />}
          />
          <StatsCard
            title="Delivered"
            value={deliveredDonations.length}
            icon={<Check className="h-5 w-5" />}
          />
        </div>
        
        {/* Tabs for donation status */}
        <Tabs defaultValue="available" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4">
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="pickup">Pickup</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          
          <TabsContent value="available" className="pt-6">
            {availableDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No available donations</h3>
                <p className="text-muted-foreground">Check back later for new donation opportunities</p>
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
                <p className="text-muted-foreground">Accepted donations will appear here</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pickup" className="pt-6">
            {pickedUpDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pickedUpDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No pickups in progress</h3>
                <p className="text-muted-foreground">Donations being picked up will appear here</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="delivered" className="pt-6">
            {deliveredDonations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliveredDonations.map((donation) => (
                  <DonationCard key={donation.id} donation={donation} />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-muted rounded-lg">
                <h3 className="text-lg font-medium">No delivered donations</h3>
                <p className="text-muted-foreground">Completed deliveries will appear here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default NgoDashboard;
