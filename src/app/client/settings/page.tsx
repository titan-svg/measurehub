'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ClientSettingsPage() {
  return (
    <DashboardLayout user={{ name: 'Carlos Mendoza', role: 'client' }}>
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
            <h3 className="text-lg font-semibold text-gray-900">Mi Perfil</h3>
            <p className="text-sm text-gray-500">Información de tu cuenta</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#1E3A5F] to-[#00B4D8] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">CM</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Carlos Mendoza</p>
                <p className="text-sm text-gray-500">TechCorp Solutions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nombre" defaultValue="Carlos" />
              <Input label="Apellido" defaultValue="Mendoza" />
              <Input label="Email" type="email" defaultValue="carlos@techcorp.com" disabled />
              <Input label="Empresa" defaultValue="TechCorp Solutions" disabled />
            </div>
            <div className="flex justify-end pt-4">
              <Button variant="primary">Guardar Cambios</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Seguridad</h3>
            <p className="text-sm text-gray-500">Actualiza tu contraseña</p>
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

        {/* Notifications */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Notificaciones</h3>
            <p className="text-sm text-gray-500">Configura tus preferencias de notificación</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">Nuevos Dashboards</p>
                  <p className="text-sm text-gray-500">Recibe notificaciones cuando haya nuevos resultados</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-[#00B4D8] focus:ring-[#00B4D8]" />
              </label>

              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">Resumen Semanal</p>
                  <p className="text-sm text-gray-500">Recibe un resumen semanal de tus métricas</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-[#00B4D8] focus:ring-[#00B4D8]" />
              </label>

              <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <p className="font-medium text-gray-900">Actualizaciones de Encuestas</p>
                  <p className="text-sm text-gray-500">Notificaciones sobre nuevas encuestas disponibles</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-[#00B4D8] focus:ring-[#00B4D8]" />
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
