// App.jsx — Contactario (mini‑CRM) — Starter sólo Front (React + Vite)
// Requisitos: npm i react-router-dom
// Opcional: puedes agregar Tailwind más tarde. Este starter usa clases básicas.

import { useEffect, useMemo, useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { ContactsProvider } from "./context/ContactsContext.jsx"
import AppRoutes from "./routes/index.jsx"

export default function App() {
  return (
    <ContactsProvider>
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
    </ContactsProvider>
  );
}
