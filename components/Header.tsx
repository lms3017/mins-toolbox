import React from 'react';
import Avatar from './Avatar';
import DisplayModeButton from './DisplayModeButton';

function Header() {
  return (
    <div className="flex justify-end py-2.5 px-6 space-x-4 ">
      <DisplayModeButton />
      <Avatar label="민석" />
    </div>
  );
}

export default Header;
