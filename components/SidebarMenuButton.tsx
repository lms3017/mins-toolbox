'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SidebarMenuButtonProps = {
  href: string;
  children: React.ReactNode;
  menuIcon?: React.ReactElement;
};

function SidebarMenuButton({ href, menuIcon, children }: SidebarMenuButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2.5 m-2 px-4 rounded-xl transition duration-200 ${
        isActive
          ? 'text-primary-500'
          : 'active:bg-primary-200 hover:bg-primary-100 dark:active:bg-primary-500 dark:hover:bg-primary-300'
      }`}
    >
      <div className="flex items-center space-x-2">
        {menuIcon}
        <div>{children}</div>
      </div>
    </Link>
  );
}

export default SidebarMenuButton;
