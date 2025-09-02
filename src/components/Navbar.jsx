/* import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Contactario</Link>
        <nav className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600 font-medium">Registro</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
} */
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/konta-logo.svg" alt="Konta" className="h-7 w-23"></img>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link to="/#features" className="hover:text-gray-900">Características</Link>
          <Link to="/#pricing" className="hover:text-gray-900">Precios</Link>
          <Link to="/contacts" className="hover:text-gray-900">Contactos</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-gray-700 hover:text-gray-900">Iniciar sesión</Link>
          <Link
            to="/signup"
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-white font-semibold hover:bg-primary-700 transition"
          >
            Registrarse
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {/* Si querés, acá podés meter un Drawer/Hamburger */}
        </div>
      </div>
    </header>
  );
}


