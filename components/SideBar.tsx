import React, { useEffect } from 'react';
import { SidebarMenuButton } from '@/components';
import { MenuType } from '@/constants/routes';

type SideBarProps = {
  menus: MenuType[];
};

function SideBar({ menus }: SideBarProps) {
  return (
    <div className="bg-background-light2 dark:bg-background-dark2 w-64 h-screen">
      <div className="p-4 border-b-[1px] border-gray-300">
        <h1 className="text-xl ">{"Min's Toolbox"}</h1>
      </div>
      <div className="mt-4">
        <nav>
          {menus.map((item) => (
            <SidebarMenuButton key={item.PATH} href={item.PATH} menuIcon={<item.ICON />}>
              {item.NAME}
            </SidebarMenuButton>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
