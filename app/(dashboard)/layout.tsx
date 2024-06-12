import React from 'react';
import { SideBar, Header } from '@/components';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-background">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
