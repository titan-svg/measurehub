'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader } from '@/components/ui/Card';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { mockDashboards } from '@/data/mockData';

export default function ClientDashboardsPage() {
  // Simulate client-specific dashboards
  const clientDashboards = mockDashboards.filter(d => d.clientId === '1' && d.status === 'published');

  return (
    <DashboardLayout user={{ name: 'Carlos Mendoza', role: 'client' }}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Mis{' '}
            <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
              Dashboards
            </span>
          </h1>
          <p className="text-gray-600 mt-1">Accede a todos tus dashboards de resultados</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Total Dashboards</p>
            <p className="text-3xl font-bold text-gray-900">{clientDashboards.length}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Clima</p>
            <p className="text-3xl font-bold text-[#1E3A5F]">
              {clientDashboards.filter(d => d.type === 'climate').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Cultura</p>
            <p className="text-3xl font-bold text-[#00B4D8]">
              {clientDashboards.filter(d => d.type === 'culture').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Última Actualización</p>
            <p className="text-lg font-bold text-gray-900">Ene 2026</p>
          </Card>
        </div>

        {/* Dashboards by Type */}
        {['climate', 'culture', 'experience', 'sociodemographic'].map(type => {
          const dashboardsOfType = clientDashboards.filter(d => d.type === type);
          if (dashboardsOfType.length === 0) return null;

          const typeLabels: { [key: string]: string } = {
            climate: 'Clima Organizacional',
            culture: 'Cultura Empresarial',
            experience: 'Experiencia del Empleado',
            sociodemographic: 'Sociodemográfico',
          };

          return (
            <div key={type}>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">{typeLabels[type]}</h3>
                  <p className="text-sm text-gray-500">{dashboardsOfType.length} dashboard(s)</p>
                </CardHeader>
              </Card>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {dashboardsOfType.map(dashboard => (
                  <DashboardCard key={dashboard.id} dashboard={dashboard} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
