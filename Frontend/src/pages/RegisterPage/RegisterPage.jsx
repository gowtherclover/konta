import React from "react";
import { Link } from "react-router-dom";
import FooterMinimal from "../../components/Footer-pequeno.jsx";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden relative">
      {/* Figuras decorativas de fondo */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
      <div className="absolute top-20 left-1/2 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-45 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-5000"></div>

      {/* Contenedor principal centrado */}
      <div className="flex-1 flex items-center justify-center z-10">
        {/* Card de registro */}
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Crear una cuenta en <span className="text-primary-600">Konta</span>
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Completá tus datos para empezar
          </p>

          {/* Formulario */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@ejemplo.com"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition font-semibold"
            >
              Registrarse
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            ¿Ya tenés cuenta?{" "}
            <Link
              to="/login"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>

      {/* Footer siempre al final */}
      <div className="w-full">
        <FooterMinimal />
      </div>
    </div>
  );
}
