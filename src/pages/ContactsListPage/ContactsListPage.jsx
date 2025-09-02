import { useContacts } from "../../context/ContactsContext.jsx"

export default function ContactsListPage() {
  const { contacts } = useContacts()

  return (
    <div>
      <h1>Lista de contactos</h1>
      {contacts.map(c => (
        <div key={c.id}>{c.name}</div>
      ))}
    </div>
  )
}
