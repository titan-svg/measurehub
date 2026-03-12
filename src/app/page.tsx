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
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MeasureHub
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Características
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Precios
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Contacto
              </Link>
            </div>

            <div className="flex items-center gap-3">
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
      <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-br from-muted via-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Centraliza tus{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mediciones
                </span>{' '}
                Organizacionales
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
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

            {/* Hero Illustration */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4 shadow-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-4">
                    <div className="h-24 bg-gradient-to-b from-secondary to-secondary/50 rounded-lg"></div>
                    <div className="h-32 bg-gradient-to-b from-primary to-primary/50 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-b from-accent to-accent/50 rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-2xl">87%</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <span className="text-secondary font-bold text-xl">+12%</span>
                  <p className="text-xs text-muted-foreground">Crecimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Todo lo que necesitas en{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                una plataforma
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Herramientas poderosas para gestionar mediciones organizacionales y presentar resultados profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Icon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para transformar tu gestión organizacional?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
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
