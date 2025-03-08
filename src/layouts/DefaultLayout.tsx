import React from 'react';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
