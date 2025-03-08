import React from 'react';
import { Outlet } from 'react-router-dom';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
