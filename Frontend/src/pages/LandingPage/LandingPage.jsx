import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import TestimonialCard from "../../components/TestimonialCard.jsx";
import { Link } from "react-router-dom";
import { MotionWrapper } from "../../components/MotionWrapper.jsx";
import { motion } from "framer-motion";

export default function LandingPage() {
  const features = [
    {
      title: "Importación masiva",
      description: "Traé todos tus contactos desde archivos JSON en segundos y tenelos listos para organizar."
    },
    {
      title: "Filtros potentes",
      description: "Encontrá exactamente lo que necesitás con filtros avanzados y personalizables."
    },
    {
      title: "Notas por cliente",
      description: "Agregá notas detalladas a cada contacto para no olvidar ningún dato importante."
    },
  ];
  const testimonials = [
    {
      quote: "Contactario transformó la forma en que gestionamos nuestros clientes. La importación y organización son increíbles.",
      name: "Ana García",
      role: "Gerente de Ventas en Tech Solutions",
    },
    {
      quote: "Los filtros me permiten encontrar contactos específicos en un instante. Es esencial para mi día a día.",
      name: "Pedro Sánchez",
      role: "Consultor de Negocios Independiente",
    },
    {
      quote: "Las notas por cliente son un salvavidas; siempre sé dónde quedó la última conversación y los detalles.",
      name: "Laura Fernández",
      role: "Fundadora de Creative Marketing",
    },
  ];
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* HERO */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
            {/* Texto: entra desde la izquierda */}
            <motion.div
              className="flex-1 mx-auto max-w-2xl md:max-w-7xl px-6 py-12 md:py-20 text-center md:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Organizá tus contactos en minutos
              </h1>

              <p className="mx-auto md:mx-0 mt-5 max-w-xl md:max-w-2xl text-lg md:text-xl text-gray-600">
                Contactario es el mini-CRM que te ayuda a mantener tus contactos ordenados, accesibles y siempre actualizados.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  to="/dashboard"
                  className="px-6 py-3 rounded-xl bg-primary-400 text-gray-900 font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 duration-300"
                >
                  Probar demo
                </Link>
                <Link
                  to="/import"
                  className="px-6 py-3 rounded-xl bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 duration-300"
                >
                  Importar JSON
                </Link>
              </div>
            </motion.div>

            {/* Imagen: entra desde la derecha */}
            <motion.div
              className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl px-6 md:px-0"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src="/hero-konta-crm.jpg" alt="referencia konta" className="object-cover" />
            </motion.div>

          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Ventajas clave de Contactario
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <MotionWrapper key={i} delay={i * 0.2}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:scale-105 hover:shadow-lg transition-all duration-500">
                    <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                    <p className="mt-2 text-gray-600">{f.description}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Lo que dicen nuestros clientes
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <MotionWrapper key={i} delay={i * 0.2}>
                  <TestimonialCard
                    quote={t.quote}
                    name={t.name}
                    role={t.role}
                  />
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative bg-primary">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Empezá a organizar tus contactos hoy mismo
            </h2>
            <Link
              to="/dashboard"
              className="inline-flex items-center mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-primary hover:bg-gray-100 transition"
            >
              Probar Konta ahora
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
