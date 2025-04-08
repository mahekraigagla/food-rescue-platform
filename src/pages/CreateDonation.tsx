
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DonationForm from '@/components/DonationForm';

const CreateDonation = () => {
  return (
    <DashboardLayout title="Create Donation" allowedRoles={['donor']}>
      <DonationForm />
    </DashboardLayout>
  );
};

export default CreateDonation;
