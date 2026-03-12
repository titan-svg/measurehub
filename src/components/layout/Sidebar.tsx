'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, IconName } from '@/components/ui/Icons';

interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'admin' | 'client';
}

const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: 'dashboard' },
  { label: 'Clientes', href: '/admin/clients', icon: 'users' },
  { label: 'Dashboards', href: '/admin/dashboards', icon: 'chart' },
  { label: 'Encuestas', href: '/admin/surveys', icon: 'survey' },
  { label: 'Configuración', href: '/admin/settings', icon: 'settings' },
];

const clientNavItems: NavItem[] = [
  { label: 'Inicio', href: '/client', icon: 'home' },
  { label: 'Mis Dashboards', href: '/client/dashboards', icon: 'chart' },
  { label: 'Configuración', href: '/client/settings', icon: 'settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, role }) => {
  const pathname = usePathname();
  const navItems = role === 'admin' ? adminNavItems : clientNavItems;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto lg:shadow-md ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MeasureHub
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                          : 'text-gray-600 hover:bg-muted hover:text-primary'
                      }`}
                    >
                      <Icon name={item.icon} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-100">
            <Link
              href="/login"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              <Icon name="logout" />
              <span className="font-medium">Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
