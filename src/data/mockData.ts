import { Client, Dashboard, Survey, DashboardData } from '@/types';

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    company: 'TechCorp Solutions',
    email: 'carlos@techcorp.com',
    status: 'active',
    dashboardsAssigned: 4,
    lastAccess: '2026-01-15',
  },
  {
    id: '2',
    name: 'María García',
    company: 'Global Industries',
    email: 'maria@globalind.com',
    status: 'active',
    dashboardsAssigned: 3,
    lastAccess: '2026-01-14',
  },
  {
    id: '3',
    name: 'Roberto Silva',
    company: 'InnovateTech',
    email: 'roberto@innovatetech.com',
    status: 'active',
    dashboardsAssigned: 5,
    lastAccess: '2026-01-13',
  },
  {
    id: '4',
    name: 'Ana Torres',
    company: 'StartUp Hub',
    email: 'ana@startuphub.com',
    status: 'inactive',
    dashboardsAssigned: 2,
    lastAccess: '2026-01-10',
  },
  {
    id: '5',
    name: 'Luis Fernández',
    company: 'Enterprise Co',
    email: 'luis@enterprise.com',
    status: 'active',
    dashboardsAssigned: 6,
    lastAccess: '2026-01-15',
  },
];

export const mockDashboards: Dashboard[] = [
  {
    id: '1',
    title: 'Clima Organizacional Q4 2025',
    type: 'climate',
    clientId: '1',
    createdAt: '2025-12-01',
    updatedAt: '2026-01-10',
    status: 'published',
  },
  {
    id: '2',
    title: 'Cultura Empresarial 2025',
    type: 'culture',
    clientId: '1',
    createdAt: '2025-11-15',
    updatedAt: '2026-01-08',
    status: 'published',
  },
  {
    id: '3',
    title: 'Experiencia del Empleado',
    type: 'experience',
    clientId: '2',
    createdAt: '2025-12-20',
    updatedAt: '2026-01-12',
    status: 'published',
  },
  {
    id: '4',
    title: 'Encuesta Sociodemográfica',
    type: 'sociodemographic',
    clientId: '3',
    createdAt: '2025-10-01',
    updatedAt: '2025-12-15',
    status: 'published',
  },
  {
    id: '5',
    title: 'Clima Organizacional Q1 2026',
    type: 'climate',
    clientId: '1',
    createdAt: '2026-01-05',
    updatedAt: '2026-01-15',
    status: 'draft',
  },
];

export const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Encuesta de Clima Laboral 2026',
    type: 'climate',
    responses: 342,
    completionRate: 87,
    startDate: '2026-01-01',
    endDate: '2026-01-31',
    status: 'active',
  },
  {
    id: '2',
    title: 'Evaluación de Cultura',
    type: 'culture',
    responses: 289,
    completionRate: 94,
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Employee Experience Survey',
    type: 'experience',
    responses: 156,
    completionRate: 72,
    startDate: '2026-01-10',
    endDate: '2026-02-10',
    status: 'active',
  },
  {
    id: '4',
    title: 'Datos Sociodemográficos',
    type: 'sociodemographic',
    responses: 0,
    completionRate: 0,
    startDate: '2026-02-01',
    endDate: '2026-02-28',
    status: 'scheduled',
  },
];

export const mockDashboardData: DashboardData = {
  metrics: [
    {
      title: 'Índice de Clima',
      value: '78%',
      change: 5.2,
      changeType: 'positive',
      icon: 'climate',
    },
    {
      title: 'Tasa de Respuesta',
      value: '87%',
      change: 12.3,
      changeType: 'positive',
      icon: 'response',
    },
    {
      title: 'Satisfacción General',
      value: '4.2/5',
      change: -2.1,
      changeType: 'negative',
      icon: 'satisfaction',
    },
    {
      title: 'Participantes',
      value: 342,
      change: 0,
      changeType: 'neutral',
      icon: 'participants',
    },
  ],
  climateScore: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Índice de Clima',
        data: [72, 74, 71, 75, 77, 78],
        borderColor: '#00B4D8',
        backgroundColor: 'rgba(0, 180, 216, 0.1)',
      },
    ],
  },
  departmentComparison: {
    labels: ['RRHH', 'IT', 'Ventas', 'Marketing', 'Operaciones', 'Finanzas'],
    datasets: [
      {
        label: 'Puntuación',
        data: [85, 78, 72, 80, 68, 75],
        backgroundColor: [
          '#1E3A5F',
          '#2E4A6F',
          '#3E5A7F',
          '#4E6A8F',
          '#5E7A9F',
          '#6E8AAF',
        ],
      },
    ],
  },
  responseTimeline: {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    datasets: [
      {
        label: 'Respuestas',
        data: [45, 120, 98, 79],
        backgroundColor: '#00B4D8',
      },
    ],
  },
  categoryBreakdown: {
    labels: ['Liderazgo', 'Comunicación', 'Desarrollo', 'Bienestar', 'Equipo'],
    datasets: [
      {
        label: 'Puntuación',
        data: [82, 75, 68, 85, 79],
        backgroundColor: [
          '#1E3A5F',
          '#00B4D8',
          '#FF6B35',
          '#1E3A5F',
          '#00B4D8',
        ],
      },
    ],
  },
};

export const adminUser = {
  id: 'admin-1',
  email: 'admin@measurehub.com',
  name: 'Admin User',
  role: 'admin' as const,
};

export const clientUser = {
  id: 'client-1',
  email: 'carlos@techcorp.com',
  name: 'Carlos Mendoza',
  role: 'client' as const,
  company: 'TechCorp Solutions',
};
