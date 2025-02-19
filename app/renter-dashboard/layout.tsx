// 'use client';'next/navigation';

import { Sidebar } from './sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="absolute right-0 left-0 top-0 flex overflow-y-hidden h-screen bg-base-200">
      <Sidebar />
      {/* <BottomMenu /> */}
      <div className="flex-1 overflow-y-auto flex-grow bg-white">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
