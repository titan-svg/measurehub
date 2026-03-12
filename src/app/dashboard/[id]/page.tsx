'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import { mockDashboards, mockDashboardData } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

export default function DashboardViewerPage() {
  const params = useParams();
  const dashboardId = params.id as string;

  const dashboard = mockDashboards.find(d => d.id === dashboardId) || mockDashboards[0];

  const typeLabels: { [key: string]: string } = {
    climate: 'Clima Organizacional',
    culture: 'Cultura Empresarial',
    experience: 'Experiencia del Empleado',
    sociodemographic: 'Sociodemográfico',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/client" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{dashboard.title}</h1>
                <p className="text-sm text-gray-500">{typeLabels[dashboard.type]}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Exportar
              </Button>
              <Button variant="primary" size="sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Compartir
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="space-y-6">
          {/* Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-xl p-6 text-white">
            <div>
              <h2 className="text-2xl font-bold mb-1">{dashboard.title}</h2>
              <p className="text-white/80">
                Última actualización: {new Date(dashboard.updatedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold">78%</p>
                <p className="text-sm text-white/70">Índice General</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">342</p>
                <p className="text-sm text-white/70">Participantes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-300">+5%</p>
                <p className="text-sm text-white/70">vs Anterior</p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockDashboardData.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Evolución del Índice de Clima</h3>
                <p className="text-sm text-gray-500">Últimos 6 meses</p>
              </CardHeader>
              <CardContent>
                <LineChart data={mockDashboardData.climateScore} height={250} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Comparativa por Departamento</h3>
                <p className="text-sm text-gray-500">Puntuación por área</p>
              </CardHeader>
              <CardContent>
                <BarChart data={mockDashboardData.departmentComparison} height={250} />
              </CardContent>
            </Card>
          </div>

          {/* Charts Row 2 */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Distribución por Categoría</h3>
                <p className="text-sm text-gray-500">Desglose de resultados</p>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DonutChart
                  data={mockDashboardData.categoryBreakdown}
                  size={200}
                  centerValue="78%"
                  centerLabel="Promedio"
                />
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Resultados por Dimensión</h3>
                <p className="text-sm text-gray-500">Análisis detallado por categoría</p>
              </CardHeader>
              <CardContent>
                <BarChart data={mockDashboardData.categoryBreakdown} height={200} horizontal />
              </CardContent>
            </Card>
          </div>

          {/* Timeline / Responses */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Timeline de Respuestas</h3>
              <p className="text-sm text-gray-500">Respuestas recibidas por semana</p>
            </CardHeader>
            <CardContent>
              <BarChart data={mockDashboardData.responseTimeline} height={180} />
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Insights Clave</h3>
              <p className="text-sm text-gray-500">Principales hallazgos de la medición</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500">
                      <Icon name="arrowUp" />
                    </span>
                    <span className="text-sm font-medium text-green-700">Fortaleza</span>
                  </div>
                  <p className="text-gray-900 font-medium">Bienestar Laboral</p>
                  <p className="text-sm text-gray-600 mt-1">
                    85% de satisfacción en condiciones de trabajo y balance vida-trabajo.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500">
                      <Icon name="arrowUp" />
                    </span>
                    <span className="text-sm font-medium text-green-700">Fortaleza</span>
                  </div>
                  <p className="text-gray-900 font-medium">Liderazgo</p>
                  <p className="text-sm text-gray-600 mt-1">
                    82% considera que su líder directo es accesible y brinda apoyo.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">
                      <Icon name="arrowDown" />
                    </span>
                    <span className="text-sm font-medium text-yellow-700">Área de Mejora</span>
                  </div>
                  <p className="text-gray-900 font-medium">Desarrollo Profesional</p>
                  <p className="text-sm text-gray-600 mt-1">
                    68% siente que necesita más oportunidades de crecimiento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-gray-500 text-sm">
          <p>© 2026 MeasureHub. Dashboard generado automáticamente.</p>
        </div>
      </footer>
    </div>
  );
}
