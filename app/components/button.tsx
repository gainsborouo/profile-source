import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  variant?: 'outline' | 'solid';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'solid', onClick, children, className, href }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded-lg',
    {
      'bg-gray-700 hover:bg-gray-800 active:bg-gray-900 text-gray-300': variant === 'solid',
      'border border-gray-500 text-gray-300 hover:bg-gray-900 active:bg-gray-950': variant === 'outline',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
