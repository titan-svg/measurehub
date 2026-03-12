'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icons';

interface HeaderProps {
  onMenuClick?: () => void;
  user?: {
    name: string;
    role: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors text-gray-600"
            >
              <Icon name="menu" />
            </button>
          )}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MeasureHub
            </span>
          </Link>
        </div>

        {user && (
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-medium text-sm">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
