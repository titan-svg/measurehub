'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MeasureHub</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Plataforma integral para la gestión de mediciones organizacionales y presentación de resultados de Business Intelligence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li>info@measurehub.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 MeasureHub. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
