import React from 'react';
import { SidebarMenuButton } from '@/components';

function SideBar() {
  return (
    <div className="bg-gray-100 w-64 h-screen border-gray-200 border-r-2">
      <div className="p-4">
        <h1 className="text-xl font-bold">{"Min's"}</h1>
        <h1 className="text-xl font-bold">{'Toolbox'}</h1>
      </div>
      <div className="mt-4">
        <p className="p-4 text-gray-500">프로젝트</p>
        <nav>
          <SidebarMenuButton href="/menu1">메뉴1</SidebarMenuButton>
          <SidebarMenuButton href="/menu2">메뉴2</SidebarMenuButton>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
