'use client';
import React from 'react';
import { SideBar, Header } from '@/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-background-light1 dark:bg-background-dark1">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
