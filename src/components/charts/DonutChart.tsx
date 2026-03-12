'use client';

import React from 'react';
import { ChartData } from '@/types';

interface DonutChartProps {
  data: ChartData;
  size?: number;
  centerLabel?: string;
  centerValue?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  size = 200,
  centerLabel,
  centerValue,
}) => {
  const total = data.datasets[0].data.reduce((sum, val) => sum + val, 0);
  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-accent)',
    'var(--color-primary-light)',
    'var(--color-secondary-light)',
  ];

  let currentAngle = -90;
  const radius = 40;
  const strokeWidth = 12;
  const center = 50;

  const segments = data.datasets[0].data.map((value, index) => {
    const percentage = (value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    const pathD = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;

    return {
      pathD,
      color: colors[index % colors.length],
      label: data.labels[index],
      value,
      percentage,
    };
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {segments.map((segment, index) => (
            <path
              key={index}
              d={segment.pathD}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="transition-all duration-300 hover:opacity-80"
            />
          ))}
        </svg>

        {(centerLabel || centerValue) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {centerValue && (
              <span className="text-3xl font-bold text-foreground">{centerValue}</span>
            )}
            {centerLabel && (
              <span className="text-sm text-muted-foreground font-medium">{centerLabel}</span>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-sm text-muted-foreground font-medium">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
