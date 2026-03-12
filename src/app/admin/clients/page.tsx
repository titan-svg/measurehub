'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ClientsTable } from '@/components/dashboard/ClientsTable';
import { mockClients } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout user={{ name: 'Admin User', role: 'admin' }}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Gestión de{' '}
              <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                Clientes
              </span>
            </h1>
            <p className="text-gray-600 mt-1">Administra los accesos y permisos de tus clientes</p>
          </div>
          <Button variant="primary">
            <Icon name="plus" />
            Nuevo Cliente
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Total Clientes</p>
            <p className="text-3xl font-bold text-gray-900">{mockClients.length}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Clientes Activos</p>
            <p className="text-3xl font-bold text-green-600">
              {mockClients.filter(c => c.status === 'active').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Dashboards Asignados</p>
            <p className="text-3xl font-bold text-[#00B4D8]">
              {mockClients.reduce((sum, c) => sum + c.dashboardsAssigned, 0)}
            </p>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por nombre, empresa o email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={statusFilter === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter('all')}
                >
                  Todos
                </Button>
                <Button
                  variant={statusFilter === 'active' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter('active')}
                >
                  Activos
                </Button>
                <Button
                  variant={statusFilter === 'inactive' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter('inactive')}
                >
                  Inactivos
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ClientsTable clients={filteredClients} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
