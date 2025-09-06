import React from 'react';
import FooterMinimal from "../../components/Footer-pequeno.jsx";
import ContactCard from "../../components/ContactCard.jsx";

const Dashboard = () => {
  const contactos = [
    { id: 1, name: 'Ana García', email: 'ana.garcia@example.com', company: 'Empresa A', tags: ['Cliente', 'VIP'] },
    { id: 2, name: 'Luis Fernandez', email: 'luis.f@example.com', company: 'Empresa B', tags: ['Prospecto'] },
    { id: 3, name: 'María Pérez', email: 'maria.p@example.com', company: 'Empresa C', tags: ['Proveedor'] },
    { id: 4, name: 'Carlos Sánchez', email: 'carlos.s@example.com', company: 'Empresa D', tags: ['Cliente'] },
    { id: 5, name: 'Sofía Martínez', email: 'sofia.m@example.com', company: 'Empresa E', tags: ['VIP', 'Soporte'] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-primary-600">Konta</h2>
            <nav className="flex flex-col gap-4">
              <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Dashboard</a>
              <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Contactos</a>
              <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Etiquetas</a>
              <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Importar</a>
            </nav>
          </div>

          {/* Footer dentro del sidebar */}
          <div className="mt-6">
            <FooterMinimal />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-8">
          <h1 className="text-3xl font-bold text-gray-900">Resumen General</h1>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
              <h2 className="text-lg font-semibold text-gray-500">Total de Contactos</h2>
              <p className="text-3xl font-bold text-primary-600">2,150</p>
              <p className="text-sm text-green-500 mt-1">+25 nuevos hoy</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
              <h2 className="text-lg font-semibold text-gray-500">Contactos con Notas</h2>
              <p className="text-3xl font-bold text-primary-600">870</p>
              <p className="text-sm text-gray-500 mt-1">50 actualizados recientemente</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 text-center">
              <h2 className="text-lg font-semibold text-gray-500">Última Importación</h2>
              <p className="text-xl font-bold text-green-600">28/07/2024</p>
              <p className="text-sm text-gray-500 mt-1">Éxito (150 contactos)</p>
            </div>
          </div>

          {/* Etiquetas más usadas */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Etiquetas Más Usadas</h2>
            <div className="flex flex-wrap gap-2">
              {['Clientes', 'Prospectos', 'Proveedores', 'VIP'].map(tag => (
                <span key={tag} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
              ))}
            </div>
          </div>

          {/* Contactos recientes como tarjetas */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Contactos Recientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contactos.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
