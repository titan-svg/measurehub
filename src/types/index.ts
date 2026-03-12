export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'client';
  company?: string;
  avatar?: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  status: 'active' | 'inactive';
  dashboardsAssigned: number;
  lastAccess: string;
  logo?: string;
}

export interface Dashboard {
  id: string;
  title: string;
  type: 'climate' | 'culture' | 'experience' | 'sociodemographic';
  clientId: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published';
  thumbnail?: string;
}

export interface Survey {
  id: string;
  title: string;
  type: 'climate' | 'culture' | 'experience' | 'sociodemographic';
  responses: number;
  completionRate: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'scheduled';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }[];
}

export interface MetricCard {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export interface DashboardData {
  metrics: MetricCard[];
  climateScore: ChartData;
  departmentComparison: ChartData;
  responseTimeline: ChartData;
  categoryBreakdown: ChartData;
}
