import React from 'react';
import { cn } from '@/utils/cn';
import { HTMLButtonProps } from '@/types/htmlPropsType';

type AvatarProps = HTMLButtonProps & {
  label: string;
  src?: string;
  className?: string;
};

function Avatar({ label, className, ...rest }: AvatarProps) {
  return (
    <button
      {...rest}
      className={cn(
        'relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-400 dark:bg-gray-400',
        className
      )}
    >
      <span className="text-gray-100">{label}</span>
    </button>
  );
}

export default Avatar;
