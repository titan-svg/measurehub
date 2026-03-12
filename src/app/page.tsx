'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Footer } from '@/components/layout/Footer';
import { Icon } from '@/components/ui/Icons';

const features = [
  {
    icon: 'analytics' as const,
    title: 'Análisis Avanzado',
    description: 'Dashboards interactivos con visualizaciones de datos en tiempo real para tomar decisiones informadas.',
  },
  {
    icon: 'security' as const,
    title: 'Acceso Seguro',
    description: 'Gestión de accesos personalizada para cada cliente con autenticación robusta y permisos granulares.',
  },
  {
    icon: 'integration' as const,
    title: 'Integraciones',
    description: 'Conecta con herramientas de captura como Typeform, Google Forms y más para centralizar datos.',
  },
  {
    icon: 'realtime' as const,
    title: 'Tiempo Real',
    description: 'Monitorea respuestas y resultados al momento con actualizaciones automáticas del dashboard.',
  },
];

const stats = [
  { value: '500+', label: 'Empresas' },
  { value: '50K+', label: 'Encuestas' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                MeasureHub
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-[#1E3A5F] transition-colors">
                Características
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#1E3A5F] transition-colors">
                Precios
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-[#1E3A5F] transition-colors">
                Contacto
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">Iniciar Sesión</Button>
              </Link>
              <Link href="/login" className="hidden sm:block">
                <Button variant="primary" size="sm">Comenzar</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Centraliza tus{' '}
                <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                  Mediciones
                </span>{' '}
                Organizacionales
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Plataforma integral para gestionar encuestas de clima, cultura y experiencia del empleado. Presenta resultados de BI de forma profesional a tus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button variant="primary" size="lg" fullWidth>
                    Solicitar Demo
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" fullWidth>
                    Conocer Más
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-24 bg-gradient-to-b from-[#00B4D8] to-[#00B4D8]/50 rounded-lg"></div>
                    <div className="h-32 bg-gradient-to-b from-[#1E3A5F] to-[#1E3A5F]/50 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-b from-[#FF6B35] to-[#FF6B35]/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF6B35] rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">87%</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[#00B4D8] font-bold text-xl">+12%</span>
                  <p className="text-xs text-gray-500">Crecimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas en{' '}
              <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                una plataforma
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas poderosas para gestionar mediciones organizacionales y presentar resultados profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] rounded-xl flex items-center justify-center text-white">
                    <Icon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para transformar tu gestión organizacional?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Únete a más de 500 empresas que ya confían en MeasureHub para sus mediciones.
          </p>
          <Link href="/login">
            <Button variant="primary" size="lg">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
