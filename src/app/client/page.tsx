'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { mockDashboards, mockDashboardData } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

export default function ClientPortal() {
  // Simulate client-specific dashboards
  const clientDashboards = mockDashboards.filter(d => d.clientId === '1' && d.status === 'published');

  return (
    <DashboardLayout user={{ name: 'Carlos Mendoza', role: 'client' }}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-6 md:p-8 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Bienvenido, Carlos
          </h1>
          <p className="text-white/80 mb-6">
            Accede a tus dashboards de resultados y métricas organizacionales
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold">{clientDashboards.length}</p>
              <p className="text-sm text-white/70">Dashboards</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold">87%</p>
              <p className="text-sm text-white/70">Índice de Clima</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold">342</p>
              <p className="text-sm text-white/70">Participantes</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold">+5%</p>
              <p className="text-sm text-white/70">vs Anterior</p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Acceso Rápido</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/dashboard/1">
              <Card hover className="p-6 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-xl flex items-center justify-center text-white">
                    <Icon name="climate" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Clima Organizacional</p>
                    <p className="text-sm text-gray-500">Último resultado: Q4 2025</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/dashboard/2">
              <Card hover className="p-6 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-xl flex items-center justify-center text-white">
                    <Icon name="users" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cultura Empresarial</p>
                    <p className="text-sm text-gray-500">Último resultado: 2025</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/client/dashboards">
              <Card hover className="p-6 cursor-pointer border-2 border-dashed border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                    <Icon name="plus" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ver Todos</p>
                    <p className="text-sm text-gray-500">{clientDashboards.length} dashboards disponibles</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Recent Results */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Resultados Recientes</h3>
            <p className="text-sm text-gray-500">Últimas métricas de tus mediciones</p>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockDashboardData.metrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  {metric.change !== undefined && (
                    <p className={`text-sm ${metric.changeType === 'positive' ? 'text-green-500' : metric.changeType === 'negative' ? 'text-red-500' : 'text-gray-500'}`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}% vs anterior
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Dashboards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Mis Dashboards</h2>
            <Link
              href="/client/dashboards"
              className="text-sm font-medium text-[#00B4D8] hover:text-[#1E3A5F] transition-colors flex items-center gap-1"
            >
              Ver todos
              <Icon name="chevronRight" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientDashboards.map(dashboard => (
              <DashboardCard key={dashboard.id} dashboard={dashboard} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
