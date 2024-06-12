'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

function DisplayModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleChangeTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const CurrentThemeButton = () => {
    return currentTheme === 'dark' ? <MdLightMode className=" w-10 h-10" /> : <MdDarkMode className="w-10 h-10" />;
  };

  return (
    <button className="" onClick={handleChangeTheme}>
      <CurrentThemeButton />
    </button>
  );
}

export default DisplayModeButton;
