import { IconType } from 'react-icons';
import { TiCalendar } from 'react-icons/ti';

export type MenuType = {
  NAME: string;
  PATH: string;
  ICON: IconType;
};

const MAIN = {
  SAMPLE: {
    MENU1: { NAME: '메뉴1', PATH: '/sample/menu1', ICON: TiCalendar },
    MENU2: { NAME: '메뉴2', PATH: '/sample/menu2', ICON: TiCalendar },
    MENU3: { NAME: '메뉴3', PATH: '/sample/menu3', ICON: TiCalendar },
  },
};

export const ROUTES = {
  MAIN,
} as const;
type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
