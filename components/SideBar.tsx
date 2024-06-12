import React from 'react';
import { SidebarMenuButton } from '@/components';
import { TiCalendar } from 'react-icons/ti';
import { TiChartLine } from 'react-icons/ti';

function SideBar() {
  return (
    <div className="bg-gray-100 w-64 h-screen border-gray-200 border-r-2">
      <div className="p-4 bg-primary-600 text-white">
        <h1 className="text-xl font-bold">{"Min's Toolbox"}</h1>
      </div>
      <div className="mt-4">
        <p className="p-4 text-gray-500">프로젝트</p>
        <nav>
          <SidebarMenuButton href="/menu1" menuIcon={<TiCalendar />}>
            메뉴1
          </SidebarMenuButton>
          <SidebarMenuButton href="/menu2" menuIcon={<TiChartLine />}>
            메뉴2
          </SidebarMenuButton>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
