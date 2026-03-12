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
  climate: 'from-primary to-secondary',
  culture: 'from-secondary to-primary',
  experience: 'from-accent to-secondary',
  sociodemographic: 'from-primary to-accent',
};

export const DashboardCard: React.FC<DashboardCardProps> = ({ dashboard }) => {
  return (
    <Card hover className="overflow-hidden">
      {/* Thumbnail/Banner */}
      <div className={`h-32 bg-gradient-to-r ${typeColors[dashboard.type]} flex items-center justify-center`}>
        <div className="text-white opacity-80">
          <Icon name="chart" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
            {typeLabels[dashboard.type]}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              dashboard.status === 'published'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {dashboard.status === 'published' ? 'Publicado' : 'Borrador'}
          </span>
        </div>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {dashboard.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          Actualizado: {new Date(dashboard.updatedAt).toLocaleDateString('es-ES')}
        </p>

        <Link
          href={`/dashboard/${dashboard.id}`}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group"
        >
          Ver Dashboard
          <span className="group-hover:translate-x-1 transition-transform">
            <Icon name="chevronRight" />
          </span>
        </Link>
      </div>
    </Card>
  );
};
