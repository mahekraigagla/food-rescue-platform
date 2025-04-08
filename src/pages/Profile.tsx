
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  return (
    <DashboardLayout title="My Profile">
      <UserProfile />
    </DashboardLayout>
  );
};

export default Profile;
