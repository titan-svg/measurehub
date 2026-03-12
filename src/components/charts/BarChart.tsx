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
  const colors = data.datasets[0].backgroundColor as string[];

  if (horizontal) {
    return (
      <div className="w-full space-y-3" style={{ minHeight: height }}>
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const percentage = (value / maxValue) * 100;
          const color = colors?.[index] || '#1E3A5F';

          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{label}</span>
                <span className="font-medium text-gray-900">{value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
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
      <div className="flex items-end justify-between h-full gap-2">
        {data.labels.map((label, index) => {
          const value = data.datasets[0].data[index];
          const percentage = (value / maxValue) * 100;
          const color = colors?.[index] || '#1E3A5F';

          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-medium text-gray-700">{value}</span>
              <div
                className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80"
                style={{
                  height: `${percentage}%`,
                  minHeight: '20px',
                  background: `linear-gradient(180deg, ${color}, ${color}aa)`,
                }}
              />
              <span className="text-xs text-gray-500 text-center truncate w-full">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
