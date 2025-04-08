
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Clock, MapPin, Package, Info } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Donation } from '@/types';
import { useAuth } from '@/contexts/AuthContext';
import { useDonation } from '@/contexts/DonationContext';

interface DonationCardProps {
  donation: Donation;
  showActions?: boolean;
}

const DonationCard: React.FC<DonationCardProps> = ({ donation, showActions = true }) => {
  const { currentUser } = useAuth();
  const { updateDonationStatus } = useDonation();

  const getStatusColor = (status: Donation['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'accepted':
        return 'bg-blue-500';
      case 'picked-up':
        return 'bg-purple-500';
      case 'delivered':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleAccept = () => {
    if (!currentUser) return;
    updateDonationStatus(donation.id, 'accepted', currentUser.id, currentUser.name);
  };

  const handlePickup = () => {
    updateDonationStatus(donation.id, 'picked-up');
  };

  const handleDeliver = () => {
    updateDonationStatus(donation.id, 'delivered');
  };

  const handleCancel = () => {
    updateDonationStatus(donation.id, 'cancelled');
  };

  const renderActionButtons = () => {
    if (!showActions) return null;
    
    // NGO user actions
    if (currentUser?.role === 'ngo') {
      if (donation.status === 'pending') {
        return (
          <Button onClick={handleAccept} className="w-full bg-wastenot-green hover:bg-wastenot-darkgreen">
            Accept Donation
          </Button>
        );
      }
      
      if (donation.status === 'accepted' && donation.assignedTo === currentUser.id) {
        return (
          <Button onClick={handlePickup} className="w-full bg-wastenot-orange hover:bg-wastenot-orange/90">
            Mark as Picked Up
          </Button>
        );
      }
      
      if (donation.status === 'picked-up' && donation.assignedTo === currentUser.id) {
        return (
          <Button onClick={handleDeliver} className="w-full bg-wastenot-green hover:bg-wastenot-darkgreen">
            Mark as Delivered
          </Button>
        );
      }
    }
    
    // Donor user actions
    if (currentUser?.role === 'donor' && donation.donorId === currentUser.id) {
      if (donation.status === 'pending') {
        return (
          <Button onClick={handleCancel} variant="destructive" className="w-full">
            Cancel Donation
          </Button>
        );
      }
    }
    
    // Admin actions
    if (currentUser?.role === 'admin') {
      return (
        <div className="grid grid-cols-2 gap-2">
          {donation.status !== 'delivered' && donation.status !== 'cancelled' && (
            <Button onClick={handleDeliver} className="bg-wastenot-green hover:bg-wastenot-darkgreen">
              Mark Delivered
            </Button>
          )}
          {donation.status !== 'cancelled' && (
            <Button onClick={handleCancel} variant="destructive">
              Cancel
            </Button>
          )}
        </div>
      );
    }
    
    return null;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{donation.foodType}</CardTitle>
          <Badge className={`${getStatusColor(donation.status)} text-white`}>
            {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <Package className="h-4 w-4 mr-2 mt-0.5 text-wastenot-green" />
            <span>{donation.quantity} - {donation.description}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-wastenot-green" />
            <span>{donation.location}</span>
          </div>
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 mt-0.5 text-wastenot-green" />
            <span>Pickup: {new Date(donation.pickupTime).toLocaleString()}</span>
          </div>
          <div className="flex items-start">
            <Info className="h-4 w-4 mr-2 mt-0.5 text-wastenot-green" />
            <span>
              Posted {formatDistanceToNow(new Date(donation.createdAt), { addSuffix: true })} by {donation.donorName}
            </span>
          </div>
          {donation.assignedToName && (
            <div className="mt-2">
              <Badge variant="outline" className="bg-wastenot-yellow/10">
                Assigned to: {donation.assignedToName}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        {renderActionButtons()}
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
