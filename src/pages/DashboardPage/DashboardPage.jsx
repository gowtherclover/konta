import React from 'react';

const Dashboard = () => {
  const contactos = [
    { nombre: 'Ana García', email: 'ana.garcia@example.com', telefono: '555-123-4567', etiquetas: ['Cliente', 'VIP'], actividad: 'Hace 2 horas' },
    { nombre: 'Luis Fernandez', email: 'luis.f@example.com', telefono: '555-987-6543', etiquetas: ['Prospecto'], actividad: 'Hace 1 día' },
    { nombre: 'María Pérez', email: 'maria.p@example.com', telefono: '555-456-7890', etiquetas: ['Proveedor'], actividad: 'Hace 3 días' },
    { nombre: 'Carlos Sánchez', email: 'carlos.s@example.com', telefono: '555-234-5678', etiquetas: ['Cliente'], actividad: 'Hace 1 semana' },
    { nombre: 'Sofía Martínez', email: 'sofia.m@example.com', telefono: '555-876-5432', etiquetas: ['VIP', 'Soporte'], actividad: 'Hace 2 semanas' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-primary-600">Konta</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Contactos</a>
          <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Etiquetas</a>
          <a href="#" className="block text-gray-700 hover:text-primary-600 transition">Importar</a>
        </nav>
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

        {/* Tabla de contactos recientes */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Contactos Recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="py-2 px-4">Nombre</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Teléfono</th>
                  <th className="py-2 px-4">Etiquetas</th>
                  <th className="py-2 px-4">Última Actividad</th>
                </tr>
              </thead>
              <tbody>
                {contactos.map((c, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4 font-medium">{c.nombre}</td>
                    <td className="py-2 px-4">{c.email}</td>
                    <td className="py-2 px-4">{c.telefono}</td>
                    <td className="py-2 px-4">{c.etiquetas.join(', ')}</td>
                    <td className="py-2 px-4">{c.actividad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
