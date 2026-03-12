'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icons';
import { MetricCard as MetricCardType } from '@/types';

interface MetricCardProps {
  metric: MetricCardType;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const iconMap: { [key: string]: 'climate' | 'response' | 'satisfaction' | 'participants' } = {
    climate: 'climate',
    response: 'response',
    satisfaction: 'satisfaction',
    participants: 'participants',
  };

  const iconName = iconMap[metric.icon] || 'chart';

  return (
    <Card className="p-6" hover>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-medium">{metric.title}</p>
          <p className="text-3xl font-bold text-foreground">{metric.value}</p>
          {metric.change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {metric.changeType === 'positive' && (
                <span className="text-green-500">
                  <Icon name="arrowUp" />
                </span>
              )}
              {metric.changeType === 'negative' && (
                <span className="text-red-500">
                  <Icon name="arrowDown" />
                </span>
              )}
              <span
                className={`text-sm font-medium ${
                  metric.changeType === 'positive'
                    ? 'text-green-500'
                    : metric.changeType === 'negative'
                    ? 'text-red-500'
                    : 'text-muted-foreground'
                }`}
              >
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
              <span className="text-sm text-muted-foreground">vs mes anterior</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-md">
          <Icon name={iconName} />
        </div>
      </div>
    </Card>
  );
};
