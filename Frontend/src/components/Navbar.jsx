import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/konta-logo.svg" alt="Konta" className="h-7 w-23" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link to="/#features" className="hover:text-primary-900 transition-all transform hover:scale-105 duration-300">Características</Link>
          <Link to="/#pricing" className="hover:text-primary-900 transition-all transform hover:scale-105 duration-300">Precios</Link>
          <Link to="/contacts" className="hover:text-primary-900 transition-all transform hover:scale-105 duration-300">Contactos</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-gray-700 hover:text-primary-900 transition-all transform hover:scale-105 duration-300">Iniciar sesión</Link>
          <Link
            to="/register"
            className="inline-flex items-center rounded-xl bg-primary-500 px-4 py-2 text-white font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 duration-300"
          >
            Registrarse
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-2 text-gray-700">
            <Link to="/#features" onClick={() => setIsOpen(false)} className="hover:text-primary-900">Características</Link>
            <Link to="/#pricing" onClick={() => setIsOpen(false)} className="hover:text-primary-900">Precios</Link>
            <Link to="/contacts" onClick={() => setIsOpen(false)} className="hover:text-primary-900">Contactos</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-primary-900">Iniciar sesión</Link>
            <Link to="/register" onClick={() => setIsOpen(false)} className="hover:text-primary-900">Registrarse</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
