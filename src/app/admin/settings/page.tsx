'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Icon } from '@/components/ui/Icons';

export default function SettingsPage() {
  return (
    <DashboardLayout user={{ name: 'Admin User', role: 'admin' }}>
      <div className="space-y-6 max-w-4xl">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] bg-clip-text text-transparent">
              Configuración
            </span>
          </h1>
          <p className="text-gray-600 mt-1">Administra la configuración de tu cuenta</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Perfil de Usuario</h3>
            <p className="text-sm text-gray-500">Información básica de tu cuenta</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">AU</span>
              </div>
              <div>
                <Button variant="outline" size="sm">Cambiar Foto</Button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nombre" defaultValue="Admin" />
              <Input label="Apellido" defaultValue="User" />
              <Input label="Email" type="email" defaultValue="admin@measurehub.com" />
              <Input label="Teléfono" defaultValue="+1 555 123 4567" />
            </div>
            <div className="flex justify-end pt-4">
              <Button variant="primary">Guardar Cambios</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Seguridad</h3>
            <p className="text-sm text-gray-500">Gestiona tu contraseña y autenticación</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Contraseña Actual" type="password" placeholder="••••••••" />
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nueva Contraseña" type="password" placeholder="••••••••" />
              <Input label="Confirmar Contraseña" type="password" placeholder="••••••••" />
            </div>
            <div className="flex justify-end pt-4">
              <Button variant="primary">Actualizar Contraseña</Button>
            </div>
          </CardContent>
        </Card>

        {/* Integrations */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Integraciones</h3>
            <p className="text-sm text-gray-500">Conecta con herramientas externas</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
                    <Icon name="integration" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Typeform</p>
                    <p className="text-sm text-gray-500">Captura de datos de encuestas</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Conectar</Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
                    <Icon name="chart" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Power BI</p>
                    <p className="text-sm text-gray-500">Importar dashboards</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <Icon name="check" />
                  Conectado
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
                    <Icon name="email" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Google Workspace</p>
                    <p className="text-sm text-gray-500">Integración con Google Forms</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Conectar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
