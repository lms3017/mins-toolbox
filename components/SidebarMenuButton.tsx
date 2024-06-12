import React from 'react';
import Link from 'next/link';

export type SidebarMenuButtonProps = {
  href: string;
  children: React.ReactNode;
};

function SidebarMenuButton({ href, children }: SidebarMenuButtonProps) {
  return (
    <Link
      href={href}
      className="block py-2.5 px-4 rounded-3xl transition duration-200 hover:bg-gray-200 active:bg-primary-200"
    >
      {children}
    </Link>
  );
}

export default SidebarMenuButton;
