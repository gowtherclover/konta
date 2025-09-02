import React from "react";

export default function TestimonialCard({ quote, name, role,className  }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${className}`}>
      <p className="text-gray-700 italic leading-relaxed">“{quote}”</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
