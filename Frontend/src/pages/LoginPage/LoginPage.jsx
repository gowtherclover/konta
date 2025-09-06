import React from "react";
import { Link } from "react-router-dom";
import FooterMinimal from "../../components/Footer-pequeno.jsx";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Lado izquierdo: formulario */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white relative z-10">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Bienvenido a <span className="text-primary-600">Konta</span>
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Iniciá sesión con tu cuenta
          </p>

          {/* Botones sociales */}
          <div className="space-y-3 mb-6">
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
              <span className="text-gray-700">Continuar con Google</span>
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
              <span className="text-gray-700">Continuar con Apple</span>
            </button>
          </div>

          <div className="text-center text-gray-400 mb-4">o</div>

          {/* Formulario */}
          <form className="space-y-4">
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
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            ¿No tenés cuenta?{" "}
            <Link
              to="/register"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Registrarse
            </Link>
          </p>
        </div>

        {/* Footer minimalista */}
        <FooterMinimal />
      </div>

      {/* Lado derecho con imagen y diagonal */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">
        {/* Imagen con clip irregular */}
        <div
          className="absolute inset-0 bg-cover bg-center clip-diagonal"
          style={{ backgroundImage: `url(${"./login-img.jpg"})` }}
        ></div>

        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/70 via-primary-500/60 to-primary-400/60 clip-diagonal"></div>

        {/* Branding sobre la imagen */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Konta CRM
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-md mx-auto">
            Organizá y potenciá tus relaciones con clientes de manera simple y
            profesional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
