import React from 'react';

const ContactDetailPage = () => {
  return (
    <div className="min-h-screen bg-primary-50 text-primary-900 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-primary-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Konta CRM</h1>
        <button className="bg-primary-600 hover:bg-primary-800 px-3 py-1 rounded text-sm">Cerrar Sesión</button>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-5xl w-full mx-auto bg-white mt-6 p-6 rounded-lg shadow space-y-6">
        {/* Header with name and actions */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-primary-800">Sofía Rodríguez</h1>
            <p className="text-lg text-primary-600">Gerente de Ventas</p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Editar Contacto</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="rounded" />
              <span>Agregar Etiqueta</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Exportar como JSON</span>
            </label>
          </div>
        </div>

        <hr className="border-primary-200" />

        {/* Company Information */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Información de la Empresa</h3>
          <p>Innovatech Solutions</p>
        </section>

        <hr className="border-primary-200" />

        {/* Contact Information */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Información de Contacto</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p><span className="font-medium">Personal:</span> sofia.rodriguez@example.com</p>
            <p><span className="font-medium">Trabajo:</span> srodriguez@innovatech.com</p>
            <p><span className="font-medium">Móvil:</span> +34 678 123 456</p>
            <p><span className="font-medium">Oficina:</span> +34 912 345 678</p>
          </div>
        </section>

        <hr className="border-primary-200" />

        {/* Address */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Dirección</h3>
          <p>Calle Mayor 123, 28001 Madrid, España</p>
        </section>

        <hr className="border-primary-200" />

        {/* Tags */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Etiquetas</h3>
          <div className="grid grid-cols-3 gap-2 w-full max-w-md">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-center">Cliente VIP</span>
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-center">Lead Activo</span>
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-center">Reunión Pendiente</span>
          </div>
        </section>

        <hr className="border-primary-200" />

        {/* Sales Comments */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Comentarios de Ventas</h3>
          <textarea
            className="w-full border border-primary-200 rounded p-2 mb-2 resize-none h-24"
            placeholder="Escribe tus observaciones de ventas aquí..."
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">Guardar Comentario</button>
        </section>

        <hr className="border-primary-200" />

        {/* Notes */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Notas</h3>
          <textarea
            className="w-full border border-primary-200 rounded p-2 mb-2 resize-none h-24"
            placeholder="Escribe una nueva nota..."
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">Guardar Nota</button>
        </section>

        <hr className="border-primary-200" />

        {/* Interaction History */}
        <section>
          <h3 className="text-lg font-semibold text-primary-700 mb-4">Historial de Interacciones</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">A. Carlos Gómez</span>
                <span className="text-sm text-primary-500">2023-10-26 10:30</span>
              </div>
              <p>Llamada inicial para presentar nuestros servicios. Interesado en la solución CRM.</p>
            </div>
            
            <div className="border-l-4 border-primary-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">B. Ana Martínez</span>
                <span className="text-sm text-primary-500">2023-11-01 15:00</span>
              </div>
              <p>Envío de propuesta personalizada. Quedamos en revisar los detalles la próxima semana.</p>
            </div>
            
            <div className="border-l-4 border-primary-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">C. Carlos Gómez</span>
                <span className="text-sm text-primary-500">2023-11-08 09:45</span>
              </div>
              <p>Reunión de seguimiento. Sofía ha solicitado una demostración más profunda de las características de importación de datos.</p>
            </div>
            
            <div className="border-l-4 border-primary-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">D. Laura Fernández</span>
                <span className="text-sm text-primary-500">2023-11-15 11:00</span>
              </div>
              <p>Demostración de importación de JSON completada. Sofía está satisfecha con la flexibilidad, pero necesita saber si se pueden mapear campos personalizados. Preparar un caso de uso específico para la próxima llamada.</p>
            </div>
            
            <div className="border-l-4 border-primary-300 pl-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">E. Miguel Sánchez</span>
                <span className="text-sm text-primary-500">2023-11-20 14:00</span>
              </div>
              <p>Respondió a un correo electrónico de seguimiento confirmando su interés en la implementación de la fase dos. Programar una reunión con el equipo técnico para discutir la integración con sus sistemas existentes.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-800 text-white text-center py-3 text-sm mt-6">
        <p>Recursos | Legal | Contacta con nosotros</p>
      </footer>
    </div>
  );
};

export default ContactDetailPage;