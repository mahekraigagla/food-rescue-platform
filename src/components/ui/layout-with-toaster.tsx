
import React from 'react';
import { Toaster } from 'sonner';

interface LayoutWithToasterProps {
  children: React.ReactNode;
}

const LayoutWithToaster: React.FC<LayoutWithToasterProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors />
    </>
  );
};

export default LayoutWithToaster;
