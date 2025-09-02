import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/konta-logo.svg" alt="Konta" className="h-7 w-23"></img>
              <span className="sr-only">Contactario</span>
            </div>
            <p className="mt-4 text-gray-600">
              La solución sencilla para gestionar tus contactos.
            </p>
          </div>

          {/* Columns */}
          <div>
            <h5 className="text-gray-900 font-semibold">Producto</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="/#features">Caracteristicas</a></li>
              <li><a href="/#pricing">Precios</a></li>
              <li><a href="/#integrationsones">Integraciones</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-900 font-semibold">Empresa</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="/about">Nosotros</a></li>
              <li><a href="/careers" className="hover:text-primaryg">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-900 font-semibold">Soporte</h5>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="/help">Ayuda</a></li>
              <li><a href="/faq" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-gray-600">© {new Date().getFullYear()} Contactario. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-5 text-gray-600">
            <a href="/#">Privacidad</a>
            <a href="/">Inicio</a>
            <a href="/#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
