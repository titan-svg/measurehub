'use client';

import React from 'react';
import { ChartData } from '@/types';

interface LineChartProps {
  data: ChartData;
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ data, height = 200 }) => {
  const maxValue = Math.max(...data.datasets[0].data);
  const minValue = Math.min(...data.datasets[0].data);
  const range = maxValue - minValue || 1;

  const points = data.datasets[0].data.map((value, index) => {
    const x = (index / (data.labels.length - 1)) * 100;
    const y = 100 - ((value - minValue) / range) * 80 - 10;
    return { x, y, value };
  });

  const pathD = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <div className="w-full" style={{ height }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="#e5e7eb"
            strokeWidth="0.3"
          />
        ))}

        {/* Area fill */}
        <path
          d={areaD}
          fill="url(#lineGradient)"
          opacity="0.2"
        />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="2"
              fill="var(--color-secondary)"
              stroke="white"
              strokeWidth="0.5"
              className="transition-all duration-200 hover:r-3"
            />
          </g>
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-secondary)" />
            <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-xs text-muted-foreground font-medium">
        {data.labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
    </div>
  );
};
