'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ClientsTable } from '@/components/dashboard/ClientsTable';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { mockClients, mockDashboardData, mockSurveys } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

export default function AdminDashboard() {
  const activeClients = mockClients.filter(c => c.status === 'active').length;
  const activeSurveys = mockSurveys.filter(s => s.status === 'active').length;

  return (
    <DashboardLayout user={{ name: 'Admin User', role: 'admin' }}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Panel de{' '}
            <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
              Administración
            </span>
          </h1>
          <p className="text-gray-600 mt-1">Bienvenido al centro de control de MeasureHub</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6" hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Clientes Activos</p>
                <p className="text-3xl font-bold text-gray-900">{activeClients}</p>
                <p className="text-sm text-green-500 mt-2">+2 este mes</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center text-white">
                <Icon name="users" />
              </div>
            </div>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Dashboards Totales</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
                <p className="text-sm text-green-500 mt-2">+5 este mes</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B4D8] to-[#1E3A5F] rounded-lg flex items-center justify-center text-white">
                <Icon name="chart" />
              </div>
            </div>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Encuestas Activas</p>
                <p className="text-3xl font-bold text-gray-900">{activeSurveys}</p>
                <p className="text-sm text-gray-500 mt-2">En curso</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#00B4D8] rounded-lg flex items-center justify-center text-white">
                <Icon name="survey" />
              </div>
            </div>
          </Card>

          <Card className="p-6" hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Respuestas Totales</p>
                <p className="text-3xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-green-500 mt-2">+156 esta semana</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#FF6B35] rounded-lg flex items-center justify-center text-white">
                <Icon name="response" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Tendencia de Respuestas</h3>
              <p className="text-sm text-gray-500">Últimos 6 meses</p>
            </CardHeader>
            <CardContent>
              <LineChart data={mockDashboardData.climateScore} height={220} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Dashboards por Categoría</h3>
              <p className="text-sm text-gray-500">Distribución actual</p>
            </CardHeader>
            <CardContent>
              <BarChart data={mockDashboardData.departmentComparison} height={220} />
            </CardContent>
          </Card>
        </div>

        {/* Recent Clients */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Clientes Recientes</h3>
              <p className="text-sm text-gray-500">Gestión de accesos de clientes</p>
            </div>
            <a
              href="/admin/clients"
              className="text-sm font-medium text-[#00B4D8] hover:text-[#1E3A5F] transition-colors flex items-center gap-1"
            >
              Ver todos
              <Icon name="chevronRight" />
            </a>
          </CardHeader>
          <CardContent className="p-0">
            <ClientsTable clients={mockClients.slice(0, 5)} />
          </CardContent>
        </Card>

        {/* Active Surveys */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Encuestas en Curso</h3>
            <p className="text-sm text-gray-500">Monitoreo de encuestas activas</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSurveys.filter(s => s.status === 'active').map((survey) => (
                <div
                  key={survey.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center text-white">
                      <Icon name="survey" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{survey.title}</p>
                      <p className="text-sm text-gray-500">
                        {survey.responses} respuestas · {survey.completionRate}% completado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-full"
                        style={{ width: `${survey.completionRate}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-[#00B4D8]">
                      {survey.completionRate}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
