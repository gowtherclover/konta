import React from "react"
import Navbar from "../../components/Navbar.jsx"
import Button from "../../components/Button.jsx"
import ContactCard from "../../components/ContactCard.jsx"

// Mock de contactos para mostrar en el dashboard
const mockContacts = [
  { id: 1, name: "Enzo Aguilar", company: "Fecovita", email: "enzo@fecovita.com", tags: ["Cliente", "VIP"] },
  { id: 2, name: "Laura Pérez", company: "Mendoza S.A.", email: "laura@mendoza.com", tags: ["Lead"] },
  { id: 3, name: "Carlos Ruiz", company: "Tech Solutions", email: "carlos@tech.com", tags: ["Cliente"] },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <main className="flex-1 p-6">
        {/* KPIs */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-gray-500">Total Contactos</p>
            <h3 className="text-2xl font-bold text-gray-900">123</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-gray-500">Contactos con notas</p>
            <h3 className="text-2xl font-bold text-gray-900">45</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-gray-500">Última importación</p>
            <h3 className="text-2xl font-bold text-gray-900">28/08/2025</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-gray-500">Etiquetas más usadas</p>
            <h3 className="text-2xl font-bold text-gray-900">VIP</h3>
          </div>
        </section>

        {/* Acciones rápidas */}
        <section className="flex flex-wrap gap-4 mb-8">
          <Button variant="primary" onClick={() => console.log("Agregar contacto")}>
            + Nuevo contacto
          </Button>
          <Button variant="secondary" onClick={() => console.log("Importar JSON")}>
            Importar JSON
          </Button>
        </section>

        {/* Listado de contactos */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Contactos recientes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockContacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
