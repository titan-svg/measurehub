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
          <tr className="border-b border-gray-200 bg-muted/50">
            <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Cliente</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground hidden md:table-cell">Empresa</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground hidden lg:table-cell">Email</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Dashboards</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Estado</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-b border-gray-100 hover:bg-muted/30 transition-colors"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-medium text-sm">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{client.name}</p>
                    <p className="text-sm text-muted-foreground md:hidden">{client.company}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-muted-foreground hidden md:table-cell">{client.company}</td>
              <td className="py-4 px-4 text-muted-foreground hidden lg:table-cell">{client.email}</td>
              <td className="py-4 px-4 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary/10 text-secondary rounded-full font-semibold">
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
                    className="p-2 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
                    title="Ver detalles"
                  >
                    <Icon name="eye" />
                  </Link>
                  <button
                    className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
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
