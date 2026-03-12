'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { mockDashboards } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

export default function DashboardsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const filteredDashboards = mockDashboards.filter(dashboard => {
    const matchesSearch = dashboard.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || dashboard.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const types = [
    { value: 'all', label: 'Todos' },
    { value: 'climate', label: 'Clima' },
    { value: 'culture', label: 'Cultura' },
    { value: 'experience', label: 'Experiencia' },
    { value: 'sociodemographic', label: 'Sociodemográfico' },
  ];

  return (
    <DashboardLayout user={{ name: 'Admin User', role: 'admin' }}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Gestión de{' '}
              <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                Dashboards
              </span>
            </h1>
            <p className="text-gray-600 mt-1">Administra y asigna dashboards de BI a tus clientes</p>
          </div>
          <Button variant="primary">
            <Icon name="plus" />
            Nuevo Dashboard
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Total</p>
            <p className="text-3xl font-bold text-gray-900">{mockDashboards.length}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Publicados</p>
            <p className="text-3xl font-bold text-green-600">
              {mockDashboards.filter(d => d.status === 'published').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Borradores</p>
            <p className="text-3xl font-bold text-yellow-600">
              {mockDashboards.filter(d => d.status === 'draft').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Clima</p>
            <p className="text-3xl font-bold text-[#00B4D8]">
              {mockDashboards.filter(d => d.type === 'climate').length}
            </p>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar dashboards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {types.map(type => (
                  <Button
                    key={type.value}
                    variant={typeFilter === type.value ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setTypeFilter(type.value)}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Dashboards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDashboards.map(dashboard => (
            <DashboardCard key={dashboard.id} dashboard={dashboard} />
          ))}
        </div>

        {filteredDashboards.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Icon name="chart" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron dashboards</h3>
            <p className="text-gray-500">Intenta con otros filtros o crea un nuevo dashboard</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
