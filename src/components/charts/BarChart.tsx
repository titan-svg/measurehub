'use client';

import React from 'react';
import { ChartData } from '@/types';

interface BarChartProps {
  data: ChartData;
  height?: number;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ data, height = 200, horizontal = false }) => {
  const maxValue = Math.max(...data.datasets[0].data);
  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-accent)',
    'var(--color-primary-light)',
    'var(--color-secondary-light)',
    'var(--color-accent-light)',
  ];

  if (horizontal) {
    return (
      <div className="w-full space-y-4" style={{ minHeight: height }}>
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const percentage = (value / maxValue) * 100;
          const color = colors[index % colors.length];

          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">{label}</span>
                <span className="font-semibold text-foreground">{value}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${percentage}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}dd)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full" style={{ height }}>
      <div className="flex items-end justify-between h-full gap-3">
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const percentage = (value / maxValue) * 100;
          const color = colors[index % colors.length];

          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-semibold text-foreground">{value}</span>
              <div
                className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 shadow-sm"
                style={{
                  height: `${percentage}%`,
                  minHeight: '20px',
                  background: `linear-gradient(180deg, ${color}, ${color}99)`,
                }}
              />
              <span className="text-xs text-muted-foreground text-center truncate w-full font-medium">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
