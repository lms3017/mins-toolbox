import React from 'react';
import { SideBar, Header } from '@/components';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-background">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
