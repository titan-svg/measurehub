'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gradient">
                MeasureHub
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-[#1E3A5F] transition-colors font-medium">
                Características
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#1E3A5F] transition-colors font-medium">
                Precios
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-[#1E3A5F] transition-colors font-medium">
                Contacto
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <button className="px-4 py-2 text-[#1E3A5F] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                  Iniciar Sesión
                </button>
              </Link>
              <Link href="/login" className="hidden sm:block">
                <button
                  className="btn-primary px-5 py-2.5 rounded-lg font-medium"
                  style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}
                >
                  Comenzar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Centraliza tus{' '}
                <span className="text-gradient">Mediciones</span>{' '}
                Organizacionales
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Plataforma integral para gestionar encuestas de clima, cultura y experiencia del empleado. Presenta resultados de BI de forma profesional a tus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <button
                    className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}
                  >
                    Solicitar Demo
                  </button>
                </Link>
                <Link href="#features">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all">
                    Conocer Más
                  </button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                  alt="Business Analytics Dashboard"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}
                ></div>
              </div>
              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-xl shadow-lg flex items-center justify-center animate-float"
                style={{ background: '#FF6B35' }}
              >
                <span className="text-white font-bold text-2xl">87%</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center border border-gray-100">
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
      <section
        className="py-16 md:py-20"
        style={{ background: 'linear-gradient(90deg, #1E3A5F 0%, #00B4D8 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas en{' '}
              <span className="text-gradient">una plataforma</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas poderosas para gestionar mediciones organizacionales y presentar resultados profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center p-6 md:p-8">
                <CardContent className="p-0">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}
                  >
                    <Icon name={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                alt="Team collaboration"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Impulsa el <span className="text-gradient">engagement</span> de tu equipo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nuestras herramientas de medición te permiten identificar áreas de mejora, celebrar logros y crear un ambiente laboral excepcional.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Encuestas de clima personalizadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Reportes ejecutivos automáticos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #00B4D8 100%)' }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700">Seguimiento de planes de acción</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1470&auto=format&fit=crop"
            alt="Modern office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(30,58,95,0.9) 0%, rgba(0,180,216,0.85) 100%)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu gestión organizacional?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Únete a más de 500 empresas que ya confían en MeasureHub para sus mediciones.
          </p>
          <Link href="/login">
            <button
              className="px-10 py-4 rounded-lg font-semibold text-[#1E3A5F] text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 bg-white hover:bg-gray-100"
            >
              Comenzar Ahora
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
