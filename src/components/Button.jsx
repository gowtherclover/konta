import React from "react"

export default function Button({ children, variant = "primary", onClick, className }) {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition"
  const variantClasses = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300"

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className || ""}`}
    >
      {children}
    </button>
  )
}
