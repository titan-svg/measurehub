'use client';

import React from 'react';
import Link from 'next/link';
import { Client } from '@/types';
import { Icon } from '@/components/ui/Icons';

interface ClientsTableProps {
  clients: Client[];
}

export const ClientsTable: React.FC<ClientsTableProps> = ({ clients }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Cliente</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 hidden md:table-cell">Empresa</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 hidden lg:table-cell">Email</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Dashboards</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Estado</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-500 md:hidden">{client.company}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600 hidden md:table-cell">{client.company}</td>
              <td className="py-4 px-4 text-gray-600 hidden lg:table-cell">{client.email}</td>
              <td className="py-4 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#00B4D8]/10 text-[#00B4D8] rounded-full font-medium">
                  {client.dashboardsAssigned}
                </span>
              </td>
              <td className="py-4 px-4 text-center">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {client.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={`/admin/clients/${client.id}`}
                    className="p-2 text-gray-400 hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 rounded-lg transition-colors"
                    title="Ver detalles"
                  >
                    <Icon name="eye" />
                  </Link>
                  <button
                    className="p-2 text-gray-400 hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 rounded-lg transition-colors"
                    title="Editar"
                  >
                    <Icon name="edit" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
