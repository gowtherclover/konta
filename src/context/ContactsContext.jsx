import { createContext, useState, useContext } from "react"

// Crear contexto
const ContactsContext = createContext()

// Provider
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([])       // lista de contactos
  const [notes, setNotes] = useState({})            // notas por contacto

  // Funciones para manejar contactos
  const addContact = (contact) => setContacts([...contacts, contact])
  const updateContact = (id, data) => {
    setContacts(contacts.map(c => (c.id === id ? { ...c, ...data } : c)))
  }
  const addNote = (contactId, note) => {
    setNotes(prev => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), note]
    }))
  }

  return (
    <ContactsContext.Provider value={{ contacts, notes, addContact, updateContact, addNote }}>
      {children}
    </ContactsContext.Provider>
  )
}

// Hook para usar el contexto más fácil
export function useContacts() {
  return useContext(ContactsContext)
}
