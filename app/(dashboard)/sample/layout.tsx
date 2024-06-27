'use client';
import React from 'react';
import { SideBar, Header } from '@/components';
import { ROUTES } from '@/constants/routes';

export default function Layout({ children }: { children: React.ReactNode }) {
  const menus = Object.values(ROUTES.MAIN.SAMPLE);

  return (
    <div className="flex bg-background-light1 dark:bg-background-dark1">
      <SideBar menus={menus} />
      <div className="flex-1">
        <Header />
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
