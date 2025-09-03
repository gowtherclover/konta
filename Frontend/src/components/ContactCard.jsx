import React from "react"
import { Link } from "react-router-dom"

export default function ContactCard({ contact }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-lg">{contact.name}</h3>
          <p className="text-gray-500">{contact.company}</p>
        </div>
        <span className="text-sm text-gray-400">{contact.email}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {contact.tags?.map(tag => (
          <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Link
          to={`/contacts/${contact.id}`}
          className="text-blue-600 font-medium hover:underline"
        >
          Ver
        </Link>
      </div>
    </div>
  )
}
