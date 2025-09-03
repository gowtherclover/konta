import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage.jsx"
import LoginPage from "../pages/LoginPage/LoginPage.jsx"
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx"
import DashboardPage from "../pages/DashboardPage/DashboardPage.jsx"
import ContactsListPage from "../pages/ContactsListPage/ContactsListPage.jsx"
import NewContactPage from "../pages/NewContactPage/NewContactPage.jsx"
import ContactDetailPage from "../pages/ContactDetailPage/ContactDetailPage.jsx"
import ImportPage from "../pages/ImportPage/ImportPage.jsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contacts" element={<ContactsListPage />} />
      <Route path="/contacts/new" element={<NewContactPage />} />
      <Route path="/contacts/:id" element={<ContactDetailPage />} />
      <Route path="/import" element={<ImportPage />} />
    </Routes>
  )
}