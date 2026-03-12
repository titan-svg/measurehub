'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-accent to-accent-light text-white hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-lg active:scale-[0.98]',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]',
    ghost: 'text-primary hover:bg-muted active:bg-gray-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
