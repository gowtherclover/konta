import React from "react";
import { Link } from "react-router-dom";

export default function FooterMinimal() {
  return (
    <footer className="text-gray-400 p-4 text-center mt-auto">
    <p>© 2025 Konta</p>
    <p className="mt-1 text-sm">
      <Link to="/" className="text-primary-600 hover:text-primary-700">
        Volver al inicio
      </Link>
    </p>
  </footer>
  );
}