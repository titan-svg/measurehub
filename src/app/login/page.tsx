'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - redirect based on email
    setTimeout(() => {
      if (email.includes('admin')) {
        router.push('/admin');
      } else {
        router.push('/client');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
                MeasureHub
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido</h1>
            <p className="text-gray-600">Inicia sesión para acceder a tu cuenta</p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Correo Electrónico"
                  type="email"
                  placeholder="correo@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Icon name="email" />}
                  required
                />

                <Input
                  label="Contraseña"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Icon name="lock" />}
                  required
                />

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00B4D8] focus:ring-[#00B4D8]" />
                    <span className="text-sm text-gray-600">Recordarme</span>
                  </label>
                  <Link href="#" className="text-sm text-[#00B4D8] hover:text-[#1E3A5F] transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth disabled={isLoading}>
                  {isLoading ? 'Ingresando...' : 'Iniciar Sesión'}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm mb-4">Demo Accesos Rápidos:</p>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEmail('admin@measurehub.com');
                      setPassword('demo123');
                    }}
                  >
                    Admin Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEmail('cliente@empresa.com');
                      setPassword('demo123');
                    }}
                  >
                    Cliente Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center mt-6 text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link href="#" className="text-[#00B4D8] hover:text-[#1E3A5F] font-medium transition-colors">
              Solicita una demo
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#1E3A5F] to-[#00B4D8] items-center justify-center p-12">
        <div className="max-w-lg text-white text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="analytics" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Gestiona tus mediciones organizacionales
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Accede a dashboards interactivos, gestiona accesos de clientes y centraliza toda la información de tus encuestas en un solo lugar.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold">87%</p>
              <p className="text-sm text-white/70">Clima</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold">342</p>
              <p className="text-sm text-white/70">Respuestas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold">+12%</p>
              <p className="text-sm text-white/70">Mejora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
