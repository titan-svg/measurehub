'use client';

import React from 'react';
import Link from 'next/link';
import { Dashboard } from '@/types';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icons';

interface DashboardCardProps {
  dashboard: Dashboard;
  showClient?: boolean;
}

const typeLabels: { [key: string]: string } = {
  climate: 'Clima Organizacional',
  culture: 'Cultura Empresarial',
  experience: 'Experiencia del Empleado',
  sociodemographic: 'Sociodemográfico',
};

const typeColors: { [key: string]: string } = {
  climate: 'from-[#1E3A5F] to-[#00B4D8]',
  culture: 'from-[#00B4D8] to-[#1E3A5F]',
  experience: 'from-[#FF6B35] to-[#00B4D8]',
  sociodemographic: 'from-[#1E3A5F] to-[#FF6B35]',
};

export const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard, showClient = false }) => {
  return (
    <Card hover className="overflow-hidden">
      {/* Thumbnail/Banner */}
      <div className={`h-32 bg-gradient-to-r ${typeColors[dashboard.type]} flex items-center justify-center`}>
        <div className="text-white">
          <Icon name="chart" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium text-[#00B4D8] bg-[#00B4D8]/10 px-2 py-1 rounded-full">
            {typeLabels[dashboard.type]}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              dashboard.status === 'published'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {dashboard.status === 'published' ? 'Publicado' : 'Borrador'}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {dashboard.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          Actualizado: {new Date(dashboard.updatedAt).toLocaleDateString('es-ES')}
        </p>

        <Link
          href={`/dashboard/${dashboard.id}`}
          className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] hover:text-[#00B4D8] transition-colors"
        >
          Ver Dashboard
          <Icon name="chevronRight" />
        </Link>
      </div>
    </Card>
  );
};
