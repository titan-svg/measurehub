'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { mockSurveys } from '@/data/mockData';
import { Icon } from '@/components/ui/Icons';

const statusColors: { [key: string]: string } = {
  active: 'bg-green-100 text-green-700',
  completed: 'bg-blue-100 text-blue-700',
  scheduled: 'bg-yellow-100 text-yellow-700',
};

const statusLabels: { [key: string]: string } = {
  active: 'Activa',
  completed: 'Completada',
  scheduled: 'Programada',
};

export default function SurveysPage() {
  return (
    <DashboardLayout user={{ name: 'Admin User', role: 'admin' }}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Gestión de{' '}
              <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                Encuestas
              </span>
            </h1>
            <p className="text-gray-600 mt-1">Monitorea y administra tus encuestas organizacionales</p>
          </div>
          <Button variant="primary">
            <Icon name="plus" />
            Nueva Encuesta
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Total Encuestas</p>
            <p className="text-3xl font-bold text-gray-900">{mockSurveys.length}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Activas</p>
            <p className="text-3xl font-bold text-green-600">
              {mockSurveys.filter(s => s.status === 'active').length}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Respuestas Totales</p>
            <p className="text-3xl font-bold text-[#00B4D8]">
              {mockSurveys.reduce((sum, s) => sum + s.responses, 0)}
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-500 mb-1">Tasa Promedio</p>
            <p className="text-3xl font-bold text-[#FF6B35]">
              {Math.round(mockSurveys.reduce((sum, s) => sum + s.completionRate, 0) / mockSurveys.length)}%
            </p>
          </Card>
        </div>

        {/* Surveys List */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Todas las Encuestas</h3>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {mockSurveys.map((survey) => (
                <div
                  key={survey.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <Icon name="survey" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{survey.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Icon name="calendar" />
                            {new Date(survey.startDate).toLocaleDateString('es-ES')} - {new Date(survey.endDate).toLocaleDateString('es-ES')}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[survey.status]}`}>
                            {statusLabels[survey.status]}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{survey.responses}</p>
                        <p className="text-xs text-gray-500">Respuestas</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#00B4D8]">{survey.completionRate}%</p>
                        <p className="text-xs text-gray-500">Completado</p>
                      </div>
                      <div className="hidden md:block w-32">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-full transition-all"
                            style={{ width: `${survey.completionRate}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-[#00B4D8] hover:bg-[#00B4D8]/10 rounded-lg transition-colors">
                          <Icon name="eye" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 rounded-lg transition-colors">
                          <Icon name="edit" />
                        </button>
                      </div>
                    </div>
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
